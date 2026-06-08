import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { ApexHome } from "@/components/ApexHome";
import { FloatingActions } from "@/components/FloatingActions";

export const Route = createFileRoute("/")(({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "Apex Solutions Kakinada | Best Insurance Plans — TATA AIA Life · TATA AIG · Star Health | Free Quote",
      },
      {
        name: "description",
        content:
          "Apex Solutions — Kakinada's #1 trusted insurance advisor. Expert guidance on TATA AIA Life Insurance, TATA AIG Health & General Insurance, and Star Health plans. 500+ families protected across Andhra Pradesh. Free consultation. WhatsApp: +91 9885755669.",
      },
      {
        name: "keywords",
        content:
          "insurance kakinada, best insurance kakinada, TATA AIA life insurance, TATA AIG insurance, Star Health insurance kakinada, health insurance andhra pradesh, term life insurance india, cheap term insurance 2025, family floater health plan, cashless health insurance, IRDAI approved insurance india, insurance advisor kakinada, free insurance quote, insurance agent jobs kakinada, leader jobs insurance kakinada, earn 50000 insurance agent, apex solutions kakinada, apex24365s, N.M. Lakshmi Prasad, panasapadu insurance, east godavari insurance agent, life insurance claim support, critical illness cover india, child education insurance, retirement pension plan india, TATA AIA claim support, TATA AIG cashless hospital, Star Health family plan, insurance near me kakinada, south india best insurance advisor",
      },
      {
        property: "og:title",
        content:
          "Apex Solutions Kakinada — TATA AIA · TATA AIG · Star Health Insurance | Free Expert Guidance",
      },
      {
        property: "og:description",
        content:
          "Kakinada's most trusted insurance advisor. Get the best TATA AIA Life Insurance, TATA AIG & Star Health plans. 500+ families protected. Free consultation — WhatsApp +91 9885755669.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://apex24365s.in/" },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/fdF8XSY320MWDXejxlBQ3CfiMK72/social-images/social-1778216088368-1000066298.webp",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "Apex Solutions — TATA AIA, TATA AIG & Star Health Insurance | Kakinada",
      },
      {
        name: "twitter:description",
        content:
          "Kakinada's most trusted insurance advisor. Expert plans from TATA AIA Life, TATA AIG & Star Health. Free consultation. WhatsApp: +91 9885755669.",
      },
    ],
  }),
} as any));

function Index() {
  return (
    <main
      className="min-h-screen bg-background text-foreground"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <Navbar />
      <ApexHome />
      <FloatingActions />
    </main>
  );
}
