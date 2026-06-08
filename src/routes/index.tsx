import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { ApexHome } from "@/components/ApexHome";
import { FloatingActions } from "@/components/FloatingActions";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Apex Solutions | Trusted Insurance — TATA AIA, TATA AIG, Star Health | Kakinada" },
      { name: "description", content: "Apex Solutions in Kakinada offers premium insurance plans from TATA AIA Life Insurance, TATA AIG, and Star Health. Free consultation. Hiring agents & leaders." },
      { name: "keywords", content: "insurance kakinada, TATA AIA, TATA AIG, Star Health, insurance agent jobs, apex solutions" },
      { property: "og:title", content: "Apex Solutions — Premium Insurance in Kakinada" },
      { property: "og:description", content: "Securing Lives. Empowering Futures. Building Trust." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <ApexHome />
      <FloatingActions />
    </main>
  );
}
