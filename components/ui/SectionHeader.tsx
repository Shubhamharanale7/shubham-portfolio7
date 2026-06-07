import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export default function SectionHeader({ label, title, subtitle, className, centered = false }: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      <span className="section-label">// {label}</span>
      <h2
        className="font-bold tracking-tight leading-[1.12] mb-5 text-[#F0F6FF]"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#8B95A8] leading-[1.75] max-w-2xl" style={{ fontSize: "1.0625rem" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
