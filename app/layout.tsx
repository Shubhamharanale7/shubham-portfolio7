import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shubham Haranale — Senior DevOps, MLOps, AIOps & AI Infrastructure Engineer",
  description:
    "AWS-certified DevOps & MLOps Engineer building production-grade cloud infrastructure, Kubernetes platforms, CI/CD pipelines, and AI systems for startups globally.",
  keywords: ["DevOps Engineer","MLOps","AWS","Kubernetes","AI Infrastructure","Cloud Architecture","Terraform","CI/CD"],
  authors: [{ name: "Shubham Haranale" }],
  openGraph: {
    title: "Shubham Haranale — Senior DevOps & MLOps Engineer",
    description: "Building production-grade cloud and AI systems that scale startups globally.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
        style={{ background: "#080C18", color: "#F0F6FF" }}
      >
        {children}
      </body>
    </html>
  );
}
