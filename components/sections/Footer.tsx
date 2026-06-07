import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const SOCIAL = [
  { href: "https://www.linkedin.com/in/shubhamharanale7", Icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/Shubhamharanale7",          Icon: Github,   label: "GitHub"   },
  { href: "https://x.com/ShubhamHaranal1",                Icon: Twitter,  label: "Twitter"  },
  { href: "mailto:shubhaminfosoft7@gmail.com",            Icon: Mail,     label: "Email"    },
];

const NAV = [
  { href: "#about",        label: "About"    },
  { href: "#skills",       label: "Skills"   },
  { href: "#projects",     label: "Projects" },
  { href: "#process",      label: "Process"  },
  { href: "#services",     label: "Services" },
  { href: "#testimonials", label: "Reviews"  },
  { href: "#cta",          label: "Contact"  },
];

export default function Footer() {
  return (
    <footer className="px-6 lg:px-10 py-14 border-t border-[rgba(47,107,255,0.1)]"
      style={{ background: "#060910" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-10">

          {/* Brand */}
          <div>
            <a href="#hero" className="font-mono font-bold text-xl tracking-tight">
              <span className="text-[#2F6BFF]">SH</span><span className="text-[#A9D6FF]">.dev</span>
            </a>
            <p className="text-[11px] font-mono text-[#5A6478] mt-2 max-w-[220px] leading-relaxed">
              Senior DevOps · MLOps · AIOps · AI Infra Engineer
            </p>
            <div className="flex items-center gap-1.5 mt-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
              <span className="text-[10px] text-[#5A6478] font-mono">Available for new projects</span>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden md:flex flex-wrap gap-x-7 gap-y-2 max-w-sm">
            {NAV.map(({ href, label }) => (
              <a key={href} href={href}
                className="text-[11px] font-mono text-[#5A6478] hover:text-[#A9D6FF] transition-colors duration-200">
                {label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-2">
            {SOCIAL.map(({ href, Icon, label }) => (
              <a key={label} href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-[rgba(47,107,255,0.13)] text-[#5A6478] hover:text-[#A9D6FF] hover:border-[rgba(47,107,255,0.4)] transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "rgba(13,26,50,0.7)" }}>
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(47,107,255,0.18)] to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[10px] font-mono text-[#5A6478]">
            © {new Date().getFullYear()} Shubham Haranale · Next.js · TypeScript · Tailwind CSS
          </p>
          <div className="flex items-center gap-5">
            {[{ label: "AWS Certified SAA", c: "#FF9900" }, { label: "OCI DevOps Certified", c: "#F80000" }].map(({ label, c }) => (
              <span key={label} className="flex items-center gap-1.5 text-[10px] font-mono text-[#5A6478]">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: c }} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
