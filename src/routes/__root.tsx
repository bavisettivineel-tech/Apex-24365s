import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no" },

      /* ── Primary SEO ── */
      { title: "Apex Solutions Kakinada | TATA AIA, TATA AIG & Star Health Insurance | Free Quote" },
      {
        name: "description",
        content:
          "Apex Solutions is Kakinada's #1 trusted insurance advisor offering TATA AIA Life Insurance, TATA AIG General Insurance & Star Health plans. 500+ families protected. Free expert consultation. Call +91 9885755669.",
      },
      {
        name: "keywords",
        content:
          "insurance kakinada, TATA AIA life insurance kakinada, TATA AIG health insurance andhra pradesh, star health insurance kakinada, best insurance agent kakinada, life insurance plans india, health insurance andhra pradesh, term insurance kakinada, insurance advisor kakinada, family health insurance, cheap health insurance india, best life insurance plan 2025, insurance agent jobs kakinada, apex solutions insurance, insurance kakinada andhra pradesh, IRDAI approved insurance, free insurance consultation, insurance claim support, insurance near me, apex24365s, N.M. Lakshmi Prasad insurance, kakinada insurance company, panasapadu insurance, east godavari insurance, rajahmundry insurance, vijayawada insurance, amalapuram insurance, south india insurance advisor",
      },
      { name: "author", content: "N.M. Lakshmi Prasad — Apex Solutions" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "revisit-after", content: "7 days" },
      { name: "language", content: "English" },
      { name: "rating", content: "general" },
      { name: "category", content: "Insurance, Finance, Health Insurance, Life Insurance" },

      /* ── Geo / Local SEO ── */
      { name: "geo.region", content: "IN-AP" },
      { name: "geo.placename", content: "Kakinada, Andhra Pradesh, India" },
      { name: "geo.position", content: "16.9891;82.2475" },
      { name: "ICBM", content: "16.9891, 82.2475" },

      /* ── Open Graph ── */
      { property: "og:title", content: "Apex Solutions — Kakinada's Trusted Insurance Advisor | TATA AIA · TATA AIG · Star Health" },
      {
        property: "og:description",
        content:
          "500+ families protected in Andhra Pradesh. Expert insurance guidance from TATA AIA Life, TATA AIG & Star Health. Get a free quote today — call or WhatsApp +91 9885755669.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://apex24365s.in/" },
      { property: "og:site_name", content: "Apex Solutions" },
      { property: "og:locale", content: "en_IN" },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/fdF8XSY320MWDXejxlBQ3CfiMK72/social-images/social-1778216088368-1000066298.webp",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Apex Solutions — Trusted Insurance Advisor in Kakinada, Andhra Pradesh" },

      /* ── Twitter Card ── */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@ApexSolutions" },
      { name: "twitter:creator", content: "@ApexSolutions" },
      { name: "twitter:title", content: "Apex Solutions — TATA AIA, TATA AIG & Star Health Insurance | Kakinada" },
      {
        name: "twitter:description",
        content:
          "Kakinada's most trusted insurance advisor. TATA AIA Life · TATA AIG · Star Health. Free consultation. 500+ families protected. WhatsApp: +91 9885755669.",
      },
      {
        name: "twitter:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/fdF8XSY320MWDXejxlBQ3CfiMK72/social-images/social-1778216088368-1000066298.webp",
      },
      { name: "twitter:image:alt", content: "Apex Solutions Insurance — Kakinada, Andhra Pradesh" },

      /* ── Mobile / PWA ── */
      { name: "theme-color", content: "#0a0f1e" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "Apex Solutions" },
      { name: "application-name", content: "Apex Solutions" },
      { name: "msapplication-TileColor", content: "#C9A84C" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://apex24365s.in/" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://wa.me" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "@id": "https://apex24365s.in/#localbusiness",
              name: "Apex Solutions",
              alternateName: "Apex Solutions Kakinada",
              description:
                "Apex Solutions is a premier insurance advisory firm in Kakinada, Andhra Pradesh, offering TATA AIA Life Insurance, TATA AIG General & Health Insurance, and Star Health Insurance. Trusted by 500+ families across Andhra Pradesh.",
              url: "https://apex24365s.in/",
              telephone: "+91-9885755669",
              email: "apex24365s@gmail.com",
              foundingDate: "2021",
              founder: {
                "@type": "Person",
                name: "N.M. Lakshmi Prasad",
                jobTitle: "Founder & CEO",
                worksFor: { "@id": "https://apex24365s.in/#localbusiness" },
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Panasapadu",
                addressLocality: "Kakinada",
                addressRegion: "Andhra Pradesh",
                postalCode: "533005",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 16.9891,
                longitude: 82.2475,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                  opens: "09:00",
                  closes: "19:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/share/1B83rrGM1G/",
                "https://www.instagram.com/apex24365s",
                "https://www.linkedin.com/in/apex-solutions-003235407/",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Insurance Plans",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "TATA AIA Life Insurance",
                      description: "Term plans, life cover, child education plans, and retirement plans from TATA AIA Life Insurance.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "TATA AIG General & Health Insurance",
                      description: "Comprehensive health cover, cashless hospitalization at 5000+ hospitals from TATA AIG.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Star Health Insurance",
                      description: "Individual & family floater health plans, pre-existing disease coverage from Star Health.",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "500",
                bestRating: "5",
              },
              award: [
                "Best Insurance Provider Award",
                "Wealth Planning Excellence Award",
              ],
              areaServed: [
                "Kakinada","Rajahmundry","Vijayawada","Amalapuram","Andhra Pradesh","East Godavari","Panasapadu",
              ],
              priceRange: "₹",
              currenciesAccepted: "INR",
              paymentAccepted: "Cash, Online Transfer, UPI",
            },
            {
              "@type": "Organization",
              "@id": "https://apex24365s.in/#organization",
              name: "Apex Solutions",
              url: "https://apex24365s.in/",
              logo: {
                "@type": "ImageObject",
                url: "https://apex24365s.in/favicon.ico",
                width: 512,
                height: 512,
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9885755669",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Telugu"],
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://apex24365s.in/#website",
              url: "https://apex24365s.in/",
              name: "Apex Solutions",
              description: "Kakinada's most trusted insurance advisor — TATA AIA Life, TATA AIG & Star Health Insurance",
              publisher: { "@id": "https://apex24365s.in/#organization" },
              inLanguage: "en-IN",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://apex24365s.in/?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What insurance companies does Apex Solutions work with?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We work with three of India's most trusted IRDAI-approved insurance companies: TATA AIA Life Insurance, TATA AIG (General & Health), and Star Health Insurance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is consultation with Apex Solutions free of charge?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! Our expert consultation is 100% free. We help you understand the best plan for your needs and budget with zero charges.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I apply for a job as an Insurance Agent or Leader at Apex Solutions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Visit our 'Join Our Team' section on the website, fill out the application form, and click 'Apply via WhatsApp'. We'll reach out within 24 hours.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much can I earn as an Insurance Agent at Apex Solutions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Agents typically earn ₹50,000+ per month based on performance. Leaders can earn ₹1,00,000+ per month with team-building commissions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I get a health insurance quote from Apex Solutions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Click 'Get Free Quote' on any insurance plan, or WhatsApp us at +91 9885755669. Our advisor will respond with a personalized quote within hours.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does Apex Solutions assist with insurance claims?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes — we provide end-to-end claim support for all our clients to ensure quick and hassle-free settlements.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" prefix="og: https://ogp.me/ns#">
      <head>
        <HeadContent />
      </head>
      <body itemScope itemType="https://schema.org/WebPage">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
