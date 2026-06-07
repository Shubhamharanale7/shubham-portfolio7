"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const W = mount.clientWidth, H = mount.clientHeight;

    const scene    = new THREE.Scene();
    const camera   = new THREE.PerspectiveCamera(55, W / H, 0.1, 100);
    camera.position.set(0, 2.2, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    /* ── Animated grid plane with glow lines ── */
    const vert = `
      varying vec2 vUv;
      varying float vElev;
      uniform float uTime;
      void main() {
        vUv = uv;
        vec4 mp = modelMatrix * vec4(position, 1.0);
        float e = sin(mp.x * 1.4 + uTime * 0.3) * 0.09
                + sin(mp.z * 1.9 + uTime * 0.22) * 0.06
                + sin((mp.x - mp.z) * 1.0 + uTime * 0.18) * 0.04;
        mp.y += e; vElev = e;
        gl_Position = projectionMatrix * viewMatrix * mp;
      }`;

    const frag = `
      varying vec2 vUv;
      varying float vElev;
      void main() {
        // fine grid
        float gx = abs(fract(vUv.x * 32.0) - 0.5);
        float gy = abs(fract(vUv.y * 32.0) - 0.5);
        float fine = 1.0 - smoothstep(0.0, 0.032, min(gx, gy));
        // coarse grid
        float cx = abs(fract(vUv.x * 8.0) - 0.5);
        float cy = abs(fract(vUv.y * 8.0) - 0.5);
        float coarse = 1.0 - smoothstep(0.0, 0.022, min(cx, cy));
        // distance fade from center
        float dist = length(vUv - 0.5) * 1.9;
        float fade = 1.0 - smoothstep(0.4, 1.0, dist);
        // elevation glow
        float elevGlow = clamp(vElev * 7.0 + 0.3, 0.0, 1.0);
        vec3 baseColor = mix(vec3(0.12,0.35,0.95), vec3(0.55,0.78,1.0), elevGlow);
        float a = (fine * 0.18 + coarse * 0.42 + elevGlow * 0.12) * fade * 0.72;
        gl_FragColor = vec4(baseColor, clamp(a, 0.0, 0.6));
      }`;

    const uniforms = { uTime:{ value:0 } };
    const planeGeo = new THREE.PlaneGeometry(22, 22, 140, 140);
    const planeMat = new THREE.ShaderMaterial({ vertexShader:vert, fragmentShader:frag, uniforms, transparent:true, side:THREE.DoubleSide });
    const plane = new THREE.Mesh(planeGeo, planeMat);
    plane.rotation.x = -Math.PI / 2.2;
    plane.position.y = -1.5;
    scene.add(plane);

    /* ── Particles ── */
    const N = 220;
    const pos = new Float32Array(N * 3);
    const col = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      pos[i*3]   = (Math.random()-0.5)*16;
      pos[i*3+1] = (Math.random()-0.5)*9;
      pos[i*3+2] = (Math.random()-0.5)*8;
      const t = Math.random();
      col[i*3]   = 0.15 + t*0.55; col[i*3+1] = 0.38 + t*0.44; col[i*3+2] = 1.0;
    }
    const ptGeo = new THREE.BufferGeometry();
    ptGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    ptGeo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    const ptMat = new THREE.PointsMaterial({ size:0.03, vertexColors:true, transparent:true, opacity:0.75, sizeAttenuation:true });
    const pts = new THREE.Points(ptGeo, ptMat);
    scene.add(pts);

    /* ── Glowing orbs ── */
    [
      { p:[-4,1.5,-3], r:0.22, c:0x2F6BFF, o:0.3 },
      { p:[4,0.8,-4],  r:0.15, c:0xA9D6FF, o:0.2 },
      { p:[0,2.5,-5],  r:0.28, c:0x1B4FCC, o:0.25 },
    ].forEach(({ p, r, c, o }) => {
      const g = new THREE.SphereGeometry(r, 16, 16);
      const m = new THREE.MeshBasicMaterial({ color:c, transparent:true, opacity:o });
      const mesh = new THREE.Mesh(g, m);
      mesh.position.set(p[0], p[1], p[2]);
      scene.add(mesh);
    });

    /* ── Mouse ── */
    const mouse = { x:0, y:0, tx:0, ty:0 };
    const onMove = (e: MouseEvent) => {
      mouse.tx = (e.clientX/window.innerWidth  - 0.5)*0.55;
      mouse.ty = -(e.clientY/window.innerHeight - 0.5)*0.28;
    };
    window.addEventListener("mousemove", onMove);

    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth, h = mount.clientHeight;
      camera.aspect = w/h; camera.updateProjectionMatrix(); renderer.setSize(w,h);
    };
    window.addEventListener("resize", onResize);

    let id: number;
    const clock = new THREE.Clock();
    const tick = () => {
      id = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();
      uniforms.uTime.value = t;
      mouse.x += (mouse.tx - mouse.x)*0.035;
      mouse.y += (mouse.ty - mouse.y)*0.035;
      plane.rotation.z = mouse.x * 0.07;
      plane.rotation.x = -Math.PI/2.2 + mouse.y * 0.05;
      pts.rotation.y = t*0.022 + mouse.x*0.18;
      pts.rotation.x = t*0.01  + mouse.y*0.1;
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose(); planeGeo.dispose(); planeMat.dispose(); ptGeo.dispose(); ptMat.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true" />;
}
