// Inline SVG diagrams styled as real engineering architecture visuals

export function RAGDiagram() {
  return (
    <svg viewBox="0 0 340 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-rag" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#2F6BFF" />
        </marker>
      </defs>
      {/* Background grid */}
      <pattern id="grid-rag" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(47,107,255,0.08)" strokeWidth="0.5"/>
      </pattern>
      <rect width="340" height="160" fill="url(#grid-rag)" />

      {/* Data Sources */}
      <rect x="8" y="30" width="60" height="22" rx="4" fill="#1B2F52" stroke="#2F6BFF" strokeWidth="1"/>
      <text x="38" y="45" textAnchor="middle" fontSize="8" fill="#A9D6FF" fontFamily="monospace">Docs/PDFs</text>
      <rect x="8" y="60" width="60" height="22" rx="4" fill="#1B2F52" stroke="#2F6BFF" strokeWidth="1"/>
      <text x="38" y="75" textAnchor="middle" fontSize="8" fill="#A9D6FF" fontFamily="monospace">Web/APIs</text>
      <rect x="8" y="90" width="60" height="22" rx="4" fill="#1B2F52" stroke="#2F6BFF" strokeWidth="1"/>
      <text x="38" y="105" textAnchor="middle" fontSize="8" fill="#A9D6FF" fontFamily="monospace">Databases</text>
      <text x="38" y="18" textAnchor="middle" fontSize="7" fill="#6B7280" fontFamily="monospace">DATA SOURCES</text>

      {/* Arrow to Embeddings */}
      <line x1="68" y1="70" x2="90" y2="70" stroke="#2F6BFF" strokeWidth="1" markerEnd="url(#arr-rag)"/>

      {/* Embeddings */}
      <rect x="90" y="48" width="64" height="44" rx="5" fill="#0F1E3A" stroke="rgba(47,107,255,0.5)" strokeWidth="1.2"/>
      <text x="122" y="68" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="monospace" fontWeight="600">Embed</text>
      <text x="122" y="80" textAnchor="middle" fontSize="7" fill="#6B7280" fontFamily="monospace">text-ada-002</text>
      <text x="122" y="40" textAnchor="middle" fontSize="7" fill="#6B7280" fontFamily="monospace">EMBEDDINGS</text>

      {/* Arrow to Vector Store */}
      <line x1="154" y1="70" x2="175" y2="70" stroke="#2F6BFF" strokeWidth="1" markerEnd="url(#arr-rag)"/>

      {/* Vector Store */}
      <rect x="175" y="48" width="64" height="44" rx="5" fill="#0F1E3A" stroke="rgba(47,107,255,0.5)" strokeWidth="1.2"/>
      <text x="207" y="68" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="monospace" fontWeight="600">FAISS</text>
      <text x="207" y="80" textAnchor="middle" fontSize="7" fill="#6B7280" fontFamily="monospace">Vector DB</text>
      <text x="207" y="40" textAnchor="middle" fontSize="7" fill="#6B7280" fontFamily="monospace">VECTOR STORE</text>

      {/* Query path */}
      <rect x="240" y="18" width="64" height="22" rx="4" fill="#1B2F52" stroke="#A9D6FF" strokeWidth="1"/>
      <text x="272" y="33" textAnchor="middle" fontSize="8" fill="#A9D6FF" fontFamily="monospace">User Query</text>
      <line x1="272" y1="40" x2="272" y2="58" stroke="#A9D6FF" strokeWidth="1" strokeDasharray="3,2" markerEnd="url(#arr-rag)"/>

      {/* LLM box */}
      <rect x="245" y="58" width="80" height="44" rx="5" fill="#0F1E3A" stroke="#A9D6FF" strokeWidth="1.5"/>
      <text x="285" y="77" textAnchor="middle" fontSize="9" fill="#fff" fontFamily="monospace" fontWeight="700">LLM</text>
      <text x="285" y="90" textAnchor="middle" fontSize="7" fill="#A9D6FF" fontFamily="monospace">GPT-4 / Llama</text>

      {/* Retrieval arrow */}
      <line x1="239" y1="70" x2="245" y2="70" stroke="#2F6BFF" strokeWidth="1.5" markerEnd="url(#arr-rag)"/>

      {/* Response */}
      <rect x="245" y="120" width="80" height="22" rx="4" fill="#1B2F52" stroke="rgba(34,197,94,0.5)" strokeWidth="1"/>
      <text x="285" y="135" textAnchor="middle" fontSize="8" fill="#22c55e" fontFamily="monospace">Response ✓</text>
      <line x1="285" y1="102" x2="285" y2="120" stroke="#22c55e" strokeWidth="1" markerEnd="url(#arr-rag)"/>

      {/* MLflow tracking */}
      <rect x="90" y="118" width="80" height="28" rx="5" fill="#0F1E3A" stroke="rgba(47,107,255,0.3)" strokeWidth="1"/>
      <text x="130" y="130" textAnchor="middle" fontSize="7" fill="#6B7280" fontFamily="monospace">MLflow Tracking</text>
      <text x="130" y="141" textAnchor="middle" fontSize="7" fill="#6B7280" fontFamily="monospace">Experiment Registry</text>
    </svg>
  );
}

export function MLOpsDiagram() {
  return (
    <svg viewBox="0 0 340 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-ml" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#2F6BFF" />
        </marker>
      </defs>
      <pattern id="grid-ml" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(47,107,255,0.08)" strokeWidth="0.5"/>
      </pattern>
      <rect width="340" height="160" fill="url(#grid-ml)" />

      {/* Pipeline stages */}
      {[
        { x: 8,   label: "Data\nIngest",  color: "#2F6BFF" },
        { x: 68,  label: "Feature\nEng",  color: "#2F6BFF" },
        { x: 128, label: "Train\nModel",  color: "#A9D6FF" },
        { x: 188, label: "Validate\n+Test", color: "#A9D6FF" },
        { x: 248, label: "Deploy\nAPI",   color: "#22c55e" },
        { x: 282, label: "Monitor\n+Drift", color: "#22c55e" },
      ].map(({ x, label, color }, i) => (
        <g key={i}>
          <rect x={x} y="40" width="52" height="48" rx="5"
            fill="#0F1E3A" stroke={`rgba(${color === "#2F6BFF" ? "47,107,255" : color === "#A9D6FF" ? "169,214,255" : "34,197,94"},0.5)`} strokeWidth="1.2"/>
          {label.split("\n").map((line, li) => (
            <text key={li} x={x + 26} y={58 + li * 12} textAnchor="middle"
              fontSize="8" fill="#fff" fontFamily="monospace" fontWeight="600">{line}</text>
          ))}
          {i < 5 && <line x1={x + 52} y1="64" x2={x + 60} y2="64"
            stroke="#2F6BFF" strokeWidth="1" markerEnd="url(#arr-ml)"/>}
        </g>
      ))}

      {/* MLflow layer */}
      <rect x="68" y="108" width="172" height="24" rx="5"
        fill="rgba(47,107,255,0.08)" stroke="rgba(47,107,255,0.3)" strokeWidth="1" strokeDasharray="4,2"/>
      <text x="154" y="124" textAnchor="middle" fontSize="8" fill="#9CA3AF" fontFamily="monospace">MLflow: Tracking · Registry · Model Versioning</text>

      {/* Feedback loop */}
      <path d="M308 64 Q320 64 320 30 Q320 8 170 8 Q20 8 20 30 Q20 40 8 40"
        fill="none" stroke="rgba(169,214,255,0.3)" strokeWidth="1" strokeDasharray="3,2"/>
      <text x="170" y="6" textAnchor="middle" fontSize="7" fill="#6B7280" fontFamily="monospace">Continuous Retraining Loop</text>

      {/* Kafka */}
      <rect x="8" y="108" width="52" height="24" rx="4" fill="#1B2F52" stroke="rgba(169,214,255,0.3)" strokeWidth="1"/>
      <text x="34" y="124" textAnchor="middle" fontSize="7" fill="#A9D6FF" fontFamily="monospace">Kafka</text>

      <rect x="248" y="108" width="72" height="24" rx="4" fill="#1B2F52" stroke="rgba(34,197,94,0.3)" strokeWidth="1"/>
      <text x="284" y="124" textAnchor="middle" fontSize="7" fill="#22c55e" fontFamily="monospace">Prometheus · Grafana</text>
    </svg>
  );
}

export function K8sDiagram() {
  return (
    <svg viewBox="0 0 340 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-k8s" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#2F6BFF" />
        </marker>
      </defs>
      <pattern id="grid-k8s" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(47,107,255,0.06)" strokeWidth="0.5"/>
      </pattern>
      <rect width="340" height="160" fill="url(#grid-k8s)" />

      {/* Internet / user */}
      <rect x="4" y="66" width="44" height="24" rx="4" fill="#1B2F52" stroke="rgba(169,214,255,0.4)" strokeWidth="1"/>
      <text x="26" y="82" textAnchor="middle" fontSize="8" fill="#A9D6FF" fontFamily="monospace">Internet</text>
      <line x1="48" y1="78" x2="62" y2="78" stroke="#2F6BFF" strokeWidth="1" markerEnd="url(#arr-k8s)"/>

      {/* ALB */}
      <rect x="62" y="60" width="48" height="36" rx="5" fill="#0F1E3A" stroke="rgba(47,107,255,0.5)" strokeWidth="1.2"/>
      <text x="86" y="78" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="monospace" fontWeight="600">ALB</text>
      <text x="86" y="90" textAnchor="middle" fontSize="7" fill="#6B7280" fontFamily="monospace">Ingress</text>
      <line x1="110" y1="78" x2="124" y2="78" stroke="#2F6BFF" strokeWidth="1" markerEnd="url(#arr-k8s)"/>

      {/* EKS Cluster box */}
      <rect x="124" y="8" width="188" height="136" rx="8" fill="rgba(15,30,58,0.6)" stroke="rgba(47,107,255,0.25)" strokeWidth="1" strokeDasharray="5,3"/>
      <text x="218" y="22" textAnchor="middle" fontSize="8" fill="#6B7280" fontFamily="monospace">EKS CLUSTER</text>

      {/* Namespaces */}
      {[
        { y: 30,  label: "app-ns",      pods: ["API Pod", "Worker"] },
        { y: 82,  label: "monitoring",  pods: ["Prometheus", "Grafana"] },
      ].map(({ y, label, pods }) => (
        <g key={label}>
          <rect x="132" y={y} width="172" height="44" rx="5"
            fill="rgba(27,47,82,0.6)" stroke="rgba(47,107,255,0.2)" strokeWidth="1"/>
          <text x="140" y={y + 12} fontSize="7" fill="#6B7280" fontFamily="monospace">{label}</text>
          {pods.map((pod, pi) => (
            <g key={pod}>
              <rect x={140 + pi * 84} y={y + 18} width="72" height="20" rx="3"
                fill="#0F1E3A" stroke="rgba(47,107,255,0.4)" strokeWidth="1"/>
              <text x={176 + pi * 84} y={y + 32} textAnchor="middle"
                fontSize="7.5" fill="#fff" fontFamily="monospace">{pod}</text>
            </g>
          ))}
        </g>
      ))}

      {/* ArgoCD */}
      <rect x="132" y="134" width="172" height="0" rx="3" fill="transparent"/>
      <text x="218" y="152" textAnchor="middle" fontSize="7" fill="#6B7280" fontFamily="monospace">ArgoCD GitOps · Trivy · OPA</text>
    </svg>
  );
}

export function AWSDiagram() {
  return (
    <svg viewBox="0 0 340 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-aws" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#FF9900" />
        </marker>
      </defs>
      <pattern id="grid-aws" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,153,0,0.06)" strokeWidth="0.5"/>
      </pattern>
      <rect width="340" height="160" fill="url(#grid-aws)" />

      {/* Route53 */}
      <rect x="6" y="66" width="44" height="22" rx="4" fill="#1B2F52" stroke="rgba(255,153,0,0.4)" strokeWidth="1"/>
      <text x="28" y="81" textAnchor="middle" fontSize="7" fill="#FF9900" fontFamily="monospace">Route53</text>
      <line x1="50" y1="77" x2="62" y2="77" stroke="#FF9900" strokeWidth="1" markerEnd="url(#arr-aws)"/>

      {/* CloudFront */}
      <rect x="62" y="58" width="54" height="38" rx="5" fill="#0F1E3A" stroke="rgba(255,153,0,0.5)" strokeWidth="1.2"/>
      <text x="89" y="76" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="monospace" fontWeight="600">CloudFront</text>
      <text x="89" y="88" textAnchor="middle" fontSize="7" fill="#6B7280" fontFamily="monospace">CDN + WAF</text>
      <line x1="116" y1="77" x2="128" y2="77" stroke="#FF9900" strokeWidth="1" markerEnd="url(#arr-aws)"/>

      {/* ALB */}
      <rect x="128" y="58" width="48" height="38" rx="5" fill="#0F1E3A" stroke="rgba(255,153,0,0.5)" strokeWidth="1.2"/>
      <text x="152" y="76" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="monospace" fontWeight="600">ALB</text>
      <text x="152" y="88" textAnchor="middle" fontSize="7" fill="#6B7280" fontFamily="monospace">Load Bal.</text>
      <line x1="176" y1="77" x2="188" y2="77" stroke="#FF9900" strokeWidth="1" markerEnd="url(#arr-aws)"/>

      {/* Auto Scaling Group */}
      <rect x="188" y="30" width="80" height="94" rx="6" fill="rgba(255,153,0,0.04)" stroke="rgba(255,153,0,0.25)" strokeWidth="1" strokeDasharray="4,2"/>
      <text x="228" y="44" textAnchor="middle" fontSize="7" fill="#6B7280" fontFamily="monospace">AUTO SCALING</text>
      {["EC2 Web", "EC2 App", "EC2 Worker"].map((name, i) => (
        <g key={name}>
          <rect x="196" y={52 + i * 22} width="64" height="16" rx="3"
            fill="#1B2F52" stroke="rgba(255,153,0,0.3)" strokeWidth="1"/>
          <text x="228" y={63 + i * 22} textAnchor="middle" fontSize="7.5" fill="#fff" fontFamily="monospace">{name}</text>
        </g>
      ))}

      {/* RDS */}
      <line x1="268" y1="112" x2="290" y2="112" stroke="#FF9900" strokeWidth="1" markerEnd="url(#arr-aws)"/>
      <rect x="290" y="98" width="44" height="28" rx="5" fill="#0F1E3A" stroke="rgba(255,153,0,0.5)" strokeWidth="1.2"/>
      <text x="312" y="113" textAnchor="middle" fontSize="7.5" fill="#fff" fontFamily="monospace" fontWeight="600">RDS</text>
      <text x="312" y="122" textAnchor="middle" fontSize="6.5" fill="#6B7280" fontFamily="monospace">Multi-AZ</text>

      {/* CI/CD */}
      <rect x="6" y="116" width="108" height="30" rx="5" fill="rgba(47,107,255,0.06)" stroke="rgba(47,107,255,0.2)" strokeWidth="1"/>
      <text x="60" y="128" textAnchor="middle" fontSize="7" fill="#9CA3AF" fontFamily="monospace">GitHub Actions → ECR → ECS</text>
      <text x="60" y="140" textAnchor="middle" fontSize="7" fill="#6B7280" fontFamily="monospace">Blue/Green Deploy</text>
    </svg>
  );
}

export function ObservabilityDiagram() {
  return (
    <svg viewBox="0 0 340 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-obs" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#2F6BFF" />
        </marker>
      </defs>
      <pattern id="grid-obs" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(47,107,255,0.08)" strokeWidth="0.5"/>
      </pattern>
      <rect width="340" height="160" fill="url(#grid-obs)" />

      {/* App sources */}
      {["Services", "K8s Nodes", "Databases"].map((src, i) => (
        <g key={src}>
          <rect x="4" y={18 + i * 42} width="56" height="26" rx="4"
            fill="#1B2F52" stroke="rgba(47,107,255,0.3)" strokeWidth="1"/>
          <text x="32" y={35 + i * 42} textAnchor="middle" fontSize="8" fill="#9CA3AF" fontFamily="monospace">{src}</text>
          <line x1="60" y1={31 + i * 42} x2="76" y2={31 + i * 42}
            stroke="#2F6BFF" strokeWidth="1" markerEnd="url(#arr-obs)"/>
        </g>
      ))}

      {/* Collectors */}
      <rect x="76" y="30" width="58" height="88" rx="6" fill="rgba(15,30,58,0.8)" stroke="rgba(47,107,255,0.35)" strokeWidth="1.2"/>
      <text x="105" y="45" textAnchor="middle" fontSize="7" fill="#6B7280" fontFamily="monospace">COLLECT</text>
      {["Prometheus", "Loki", "Tempo"].map((t, i) => (
        <g key={t}>
          <rect x="82" y={52 + i * 22} width="46" height="16" rx="3"
            fill="#0A0F1C" stroke="rgba(47,107,255,0.25)" strokeWidth="1"/>
          <text x="105" y={63 + i * 22} textAnchor="middle" fontSize="7" fill="#A9D6FF" fontFamily="monospace">{t}</text>
          <line x1="128" y1={60 + i * 22} x2="142" y2={60 + i * 22}
            stroke="#2F6BFF" strokeWidth="0.8" markerEnd="url(#arr-obs)"/>
        </g>
      ))}

      {/* Grafana */}
      <rect x="142" y="44" width="64" height="60" rx="6" fill="#0F1E3A" stroke="#A9D6FF" strokeWidth="1.5"/>
      <text x="174" y="62" textAnchor="middle" fontSize="9" fill="#fff" fontFamily="monospace" fontWeight="700">Grafana</text>
      <text x="174" y="76" textAnchor="middle" fontSize="7" fill="#6B7280" fontFamily="monospace">Dashboards</text>
      <rect x="150" y="82" width="48" height="14" rx="2" fill="rgba(47,107,255,0.15)"/>
      <text x="174" y="92" textAnchor="middle" fontSize="6.5" fill="#9CA3AF" fontFamily="monospace">Real-time Metrics</text>
      <line x1="206" y1="74" x2="220" y2="74" stroke="#A9D6FF" strokeWidth="1" markerEnd="url(#arr-obs)"/>

      {/* AlertManager */}
      <rect x="220" y="30" width="68" height="32" rx="5" fill="#0F1E3A" stroke="rgba(239,68,68,0.4)" strokeWidth="1.2"/>
      <text x="254" y="48" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="monospace" fontWeight="600">AlertManager</text>
      <text x="254" y="58" textAnchor="middle" fontSize="7" fill="#6B7280" fontFamily="monospace">PagerDuty · Slack</text>

      {/* OpenTelemetry */}
      <rect x="220" y="76" width="68" height="32" rx="5" fill="#0F1E3A" stroke="rgba(47,107,255,0.35)" strokeWidth="1.2"/>
      <text x="254" y="91" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="monospace" fontWeight="600">OTel Traces</text>
      <text x="254" y="102" textAnchor="middle" fontSize="7" fill="#6B7280" fontFamily="monospace">Distributed Tracing</text>

      {/* MTTD badge */}
      <rect x="220" y="124" width="108" height="26" rx="5" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.3)" strokeWidth="1"/>
      <text x="274" y="135" textAnchor="middle" fontSize="7.5" fill="#22c55e" fontFamily="monospace">MTTD reduced by 60%</text>
      <text x="274" y="145" textAnchor="middle" fontSize="7" fill="#6B7280" fontFamily="monospace">Incident Detection Time</text>
    </svg>
  );
}

export function AgentDiagram() {
  return (
    <svg viewBox="0 0 340 160" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr-agent" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#A9D6FF" />
        </marker>
      </defs>
      <pattern id="grid-agent" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(169,214,255,0.06)" strokeWidth="0.5"/>
      </pattern>
      <rect width="340" height="160" fill="url(#grid-agent)" />

      {/* User */}
      <rect x="4" y="66" width="46" height="24" rx="4" fill="#1B2F52" stroke="rgba(169,214,255,0.4)" strokeWidth="1"/>
      <text x="27" y="82" textAnchor="middle" fontSize="8" fill="#A9D6FF" fontFamily="monospace">User</text>
      <line x1="50" y1="78" x2="66" y2="78" stroke="#A9D6FF" strokeWidth="1" markerEnd="url(#arr-agent)"/>

      {/* LangGraph Orchestrator */}
      <rect x="66" y="42" width="84" height="72" rx="6" fill="#0F1E3A" stroke="#A9D6FF" strokeWidth="1.5"/>
      <text x="108" y="58" textAnchor="middle" fontSize="8" fill="#A9D6FF" fontFamily="monospace">LangGraph</text>
      <text x="108" y="70" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="monospace" fontWeight="700">Orchestrator</text>
      <rect x="74" y="76" width="68" height="14" rx="2" fill="rgba(169,214,255,0.08)"/>
      <text x="108" y="86" textAnchor="middle" fontSize="6.5" fill="#9CA3AF" fontFamily="monospace">State Machine</text>
      <rect x="74" y="94" width="68" height="14" rx="2" fill="rgba(169,214,255,0.08)"/>
      <text x="108" y="104" textAnchor="middle" fontSize="6.5" fill="#9CA3AF" fontFamily="monospace">Memory + Context</text>
      <line x1="150" y1="78" x2="166" y2="78" stroke="#A9D6FF" strokeWidth="1" markerEnd="url(#arr-agent)"/>

      {/* LLM */}
      <rect x="166" y="42" width="64" height="36" rx="5" fill="#0F1E3A" stroke="rgba(169,214,255,0.5)" strokeWidth="1.2"/>
      <text x="198" y="58" textAnchor="middle" fontSize="8" fill="#fff" fontFamily="monospace" fontWeight="700">LLM Core</text>
      <text x="198" y="70" textAnchor="middle" fontSize="7" fill="#6B7280" fontFamily="monospace">GPT-4 / Claude</text>

      {/* Tools */}
      {["Web Search", "Code Exec", "DB Query", "API Calls"].map((tool, i) => (
        <g key={tool}>
          <rect x="242" y={18 + i * 34} width="68" height="22" rx="4"
            fill="#1B2F52" stroke="rgba(169,214,255,0.25)" strokeWidth="1"/>
          <text x="276" y={33 + i * 34} textAnchor="middle" fontSize="7.5" fill="#9CA3AF" fontFamily="monospace">{tool}</text>
          <line x1="230" y1={60 + (i - 1) * 10} x2="242" y2={29 + i * 34}
            stroke="rgba(169,214,255,0.2)" strokeWidth="0.8" strokeDasharray="2,2"/>
        </g>
      ))}

      {/* Response */}
      <rect x="66" y="130" width="84" height="22" rx="4" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.3)" strokeWidth="1"/>
      <text x="108" y="145" textAnchor="middle" fontSize="7.5" fill="#22c55e" fontFamily="monospace">80% ticket automation ✓</text>
    </svg>
  );
}

export function getDiagram(type: string) {
  switch (type) {
    case "rag":          return <RAGDiagram />;
    case "mlops":        return <MLOpsDiagram />;
    case "k8s":          return <K8sDiagram />;
    case "aws":          return <AWSDiagram />;
    case "observability":return <ObservabilityDiagram />;
    case "agent":        return <AgentDiagram />;
    default:             return <MLOpsDiagram />;
  }
}
