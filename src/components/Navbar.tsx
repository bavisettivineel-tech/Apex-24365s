import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/apex-logo.jpg";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Insurance Plans", id: "plans" },
  { label: "Join Our Team", id: "careers" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

const WA = "https://wa.me/919885755669?text=Hello%20Apex%20Solutions%2C%20I%20would%20like%20a%20free%20insurance%20quote.";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-navy-deep/90 backdrop-blur-xl border-b border-gold/30 py-3" : "bg-transparent py-5"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <button onClick={() => go("home")} className="flex items-center gap-3">
          <img src={logo} alt="Apex Solutions" className="h-10 w-10 rounded-full object-cover ring-1 ring-gold/40" />
          <div className="leading-tight text-left">
            <div className="font-brand text-lg tracking-widest text-gold">APEX</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-silver">Solutions</div>
          </div>
        </button>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <button key={l.id} onClick={() => go(l.id)} className="group relative text-sm font-medium text-silver transition-colors hover:text-gold">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>
        <a href={WA} target="_blank" rel="noreferrer" className="hidden rounded-full px-5 py-2.5 text-sm btn-shimmer shadow-gold lg:inline-block">
          Get Free Quote
        </a>
        <button onClick={() => setOpen(!open)} className="text-gold lg:hidden" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="lg:hidden">
            <div className="mx-6 mt-3 rounded-2xl glass-strong p-6 flex flex-col gap-4">
              {links.map((l, i) => (
                <motion.button key={l.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                  onClick={() => go(l.id)} className="text-left text-base text-silver hover:text-gold">
                  {l.label}
                </motion.button>
              ))}
              <a href={WA} target="_blank" rel="noreferrer" className="rounded-full px-5 py-3 text-center btn-shimmer">Get Free Quote</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
