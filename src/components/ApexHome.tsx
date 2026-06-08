import { motion } from "framer-motion";
import { Shield, Award, Building2, Users, ArrowRight, CheckCircle2, Phone, Mail, MapPin, Facebook, MessageCircle, Quote, Star, Plus, Minus, Target, Eye, Gem, Zap, Wallet, HeartHandshake, Trophy, Linkedin, Instagram, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { ParticleNetwork } from "./ParticleNetwork";
import { CountUp, fadeUp } from "./anim";
import logo from "@/assets/apex-logo.jpg";
import founder from "@/assets/founder.jpg";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import AD1 from "@/assets/AD-1.jpeg";
import AD2 from "@/assets/AD-2.jpeg";
import AD3 from "@/assets/AD-3.jpeg";
import AD4 from "@/assets/AD-4.jpeg";
import AD5 from "@/assets/AD-5.jpeg";
import AD6 from "@/assets/AD-6.jpeg";
import AD7 from "@/assets/AD-7.jpeg";

const WA_BASE = "https://wa.me/919885755669?text=";
const wa = (msg: string) => WA_BASE + encodeURIComponent(msg);

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="home" aria-label="Hero — Apex Solutions Insurance Kakinada" className="relative min-h-screen overflow-hidden bg-hero">
      <ParticleNetwork />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.15),transparent_60%)]" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-5 pt-28 pb-16 text-center sm:px-6 sm:pt-32 sm:pb-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[10px] uppercase tracking-widest text-silver sm:mb-8 sm:px-4 sm:py-2 sm:text-xs whitespace-nowrap">
          <Shield size={12} className="text-gold" />
          Trusted Insurance Partner — Kakinada, Andhra Pradesh
        </motion.div>
        <h1 className="font-display text-[2.5rem] font-bold leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
          {["Securing Lives.", "Empowering Futures.", "Building Trust."].map((line, i) => (
            <motion.span key={line} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.7 }}
              className={`block ${i === 1 ? "text-gold-gradient" : i === 2 ? "text-silver" : "text-foreground"}`}>
              {line}
            </motion.span>
          ))}
        </h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          className="mt-6 max-w-3xl text-sm text-silver sm:mt-8 sm:text-base md:text-lg">
          Apex Solutions brings you premium health and life insurance plans from <span className="text-gold" itemProp="brand">TATA AIA Life Insurance</span>, <span className="text-gold" itemProp="brand">TATA AIG General Insurance</span>, and <span className="text-gold" itemProp="brand">Star Health Insurance</span> — protecting every family in Andhra Pradesh, Kakinada, Rajahmundry, Vijayawada and beyond.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 }}
          className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
          <a href="#plans" onClick={(e: React.MouseEvent) => { e.preventDefault(); document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" }); }}
            className="btn-shimmer rounded-full px-6 py-3.5 text-sm shadow-gold inline-flex items-center justify-center gap-2 sm:px-8 sm:py-4">
            Explore Insurance Plans <ArrowRight size={16} />
          </a>
          <a href="#careers" onClick={(e: React.MouseEvent) => { e.preventDefault(); document.getElementById("careers")?.scrollIntoView({ behavior: "smooth" }); }}
            className="rounded-full border border-gold/50 px-6 py-3.5 text-center text-sm font-medium text-gold transition-all hover:bg-gold/10 sm:px-8 sm:py-4">
            Join Our Team
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}
          className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-3 sm:mt-14 md:grid-cols-4">
          {[
            { n: "500+", l: "Clients Protected" },
            { n: "5+", l: "Awards Won" },
            { n: "3", l: "Insurance Brands" },
            { n: "3+", l: "Years Experience" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl px-3 py-3 text-center sm:px-4 sm:py-4">
              <div className="font-display text-xl font-bold text-gold-gradient sm:text-2xl">{s.n}</div>
              <div className="mt-1 text-[10px] uppercase tracking-wider text-silver sm:text-[11px]">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  const cards = [
    { icon: Target, title: "Our Mission", text: "Make premium insurance accessible to every family across Andhra Pradesh and build financial security for all." },
    { icon: Eye, title: "Our Vision", text: "Become the most trusted insurance advisory firm in South India — known for integrity and excellence." },
    { icon: Gem, title: "Our Values", text: "Transparency, Trust, Customer-First Approach, and Lifelong Support." },
  ];
  return (
    <section id="about" aria-label="About Apex Solutions — Insurance Advisor Kakinada" className="relative overflow-hidden bg-navy-deep py-16 sm:py-24 md:py-28" itemScope itemType="https://schema.org/Organization">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_45%,rgba(201,168,76,0.08)_50%,transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div {...fadeUp}>
            <div className="text-xs uppercase tracking-[0.4em] text-gold">About Us</div>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl md:text-5xl" itemProp="name">
              Who <span className="text-gold-gradient">We</span> Are — Apex Solutions, Kakinada
            </h2>
            <p className="mt-6 text-silver leading-relaxed" itemProp="description">
              Apex Solutions is a premier insurance advisory firm headquartered in Kakinada, Andhra Pradesh.
              We simplify insurance for everyday families across East Godavari, Rajahmundry, Vijayawada, and Amalapuram
              — offering trusted IRDAI-approved plans from India's most reputable brands including
              <strong> TATA AIA Life Insurance</strong>, <strong>TATA AIG General &amp; Health Insurance</strong>, and
              <strong> Star Health Insurance</strong>. We don't just sell insurance — we build lifelong relationships
              built on trust, transparency, and genuine care.
            </p>
            <div className="mt-8 grid gap-4">
              {cards.map((c) => (
                <motion.div key={c.title} {...fadeUp}
                  className="glass rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-gold">
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                      <c.icon size={20} />
                    </div>
                    <div>
                      <div className="font-display text-lg text-gold">{c.title}</div>
                      <div className="mt-1 text-sm text-silver">{c.text}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-8 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative grid h-full w-full place-items-center">
              <div className="absolute inset-6 rounded-full border border-gold/30 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-16 rounded-full border border-gold/20 animate-[spin_20s_linear_infinite_reverse]" />
              <div className="glass-strong relative grid h-44 w-44 place-items-center rounded-full ring-gold-glow">
                <Shield size={72} className="text-gold" strokeWidth={1.2} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOUNDER ---------- */
function Founder() {
  const badges = [
    { icon: Trophy, text: "5+ Awards — Best Insurance Provider" },
    { icon: Wallet, text: "Wealth Planning Excellence Award" },
    { icon: Shield, text: "3+ Years Industry Experience" },
    { icon: Users, text: "500+ Families Protected" },
  ];
  return (
    <section aria-label="Founder — N.M. Lakshmi Prasad, CEO Apex Solutions" className="relative overflow-hidden py-16 sm:py-24 md:py-28" style={{ background: "linear-gradient(135deg, oklch(0.20 0.10 20) 0%, oklch(0.14 0.04 260) 100%)" }} itemScope itemType="https://schema.org/Person">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(201,168,76,0.12),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div {...fadeUp} className="text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-gold">Meet The Founder</div>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            The Visionary Behind <span className="text-gold-gradient">Apex Solutions</span>
          </h2>
        </motion.div>
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div {...fadeUp} className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gold/10 blur-2xl" />
              <div className="gold-pulse-ring relative aspect-[3/4] w-64 overflow-hidden rounded-3xl sm:w-72 md:w-80">
                <img src={founder} alt="N.M. Lakshmi Prasad — Founder & CEO of Apex Solutions, Kakinada, Andhra Pradesh" className="h-full w-full object-cover" itemProp="image" />
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeUp}>
            <div className="font-brand text-2xl tracking-wide text-gold sm:text-3xl md:text-4xl" itemProp="name">N.M. Lakshmi Prasad</div>
            <div className="mt-2 text-sm uppercase tracking-widest text-silver" itemProp="jobTitle">Founder &amp; CEO, Apex Solutions — Kakinada</div>
            <p className="mt-6 text-silver leading-relaxed">
              N.M. Lakshmi Prasad is a visionary entrepreneur and the driving force behind Apex Solutions.
              With over 3 years of dedicated experience in the insurance industry, he has built a reputation
              as a trusted advisor — empowering hundreds of families with financial security and peace of mind.
              A proud recipient of 5+ awards in Best Insurance Provider and Wealth Planning, he leads with
              integrity, passion, and an unwavering commitment to protecting what matters most.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {badges.map((b) => (
                <div key={b.text} className="glass flex items-center gap-3 rounded-full px-4 py-3">
                  <b.icon size={18} className="text-gold shrink-0" />
                  <span className="text-xs text-silver">{b.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PLANS ---------- */
function Plans() {
  const plans = [
    {
      brand: "TATA AIA Life", type: "Life & Term Insurance", tag: "Best for Families", accent: "#C8102E",
      benefits: ["High Sum Assured Life Cover", "Term Plans from ₹499/month", "Child Education & Future Plans", "Retirement & Pension Plans", "Tax Benefits under Section 80C"],
      msg: "Hello Apex Solutions, I am interested in TATA AIA Life Insurance plans. Please guide me with details and pricing.",
    },
    {
      brand: "TATA AIG", type: "General & Health Insurance", tag: "Most Popular", accent: "#1E40AF",
      benefits: ["Comprehensive Health Cover", "Cashless at 5000+ Hospitals", "Critical Illness Protection", "Affordable Premiums for All Ages", "Quick & Easy Claim Settlement"],
      msg: "Hello Apex Solutions, I am interested in TATA AIG Insurance plans. Please guide me with details and pricing.",
    },
    {
      brand: "Star Health", type: "Health & Medical Insurance", tag: "Best Health Cover", accent: "#E8A000",
      benefits: ["Individual & Family Floater Plans", "Pre & Post Hospitalization Cover", "No Medical Test up to 50 Years", "Pre-existing Disease Coverage", "24/7 Claim Assistance"],
      msg: "Hello Apex Solutions, I am interested in Star Health Insurance plans. Please guide me with details and pricing.",
    },
  ];
  return (
    <section id="plans" aria-label="Insurance Plans — TATA AIA Life, TATA AIG & Star Health" className="relative overflow-hidden bg-navy-deep py-16 sm:py-24 md:py-28">
      <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div {...fadeUp} className="text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-gold">Our Insurance Plans</div>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Trusted Insurance Brands. <span className="text-gold-gradient">One Trusted Advisor in Kakinada.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-silver">
            We proudly offer insurance plans from India's most reputable IRDAI-approved companies.
            Choose the plan that best fits your life and budget.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div key={p.brand} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="glass-strong group relative flex flex-col overflow-hidden rounded-3xl p-7 transition-all hover:-translate-y-2 hover:shadow-gold">
              <div className="absolute inset-x-0 top-0 h-1" style={{ background: p.accent }} />
              <div className="flex items-start justify-between">
                <Shield size={36} className="text-gold" strokeWidth={1.5} />
                <span className="rounded-full bg-gold/15 px-3 py-1 text-[10px] uppercase tracking-widest text-gold">{p.tag}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold">{p.brand}</h3>
              <div className="text-sm text-silver">{p.type}</div>
              <ul className="mt-6 space-y-3">
                {p.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-silver">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href={wa(p.msg)} target="_blank" rel="noreferrer"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-navy-deep btn-shimmer">
                <MessageCircle size={16} /> Get {p.brand} Quote
              </a>
            </motion.div>
          ))}
        </div>
        <motion.p {...fadeUp} className="mt-10 text-center text-sm text-silver">
          All plans are <span className="text-gold">IRDAI approved</span>. Our expert advisors help you choose the perfect plan — completely <span className="text-gold">FREE consultation</span>.
        </motion.p>
      </div>
    </section>
  );
}

/* ---------- WHY US ---------- */
function WhyUs() {
  const reasons = [
    { icon: Shield, title: "100% Trusted Brands", text: "Only IRDAI-approved, nationally recognized insurance partners." },
    { icon: HeartHandshake, title: "Free Expert Consultation", text: "Personalized guidance with zero hidden charges." },
    { icon: Zap, title: "Fast Claim Support", text: "End-to-end assistance for quick, hassle-free claim settlements." },
    { icon: Wallet, title: "Best Premium Prices", text: "Maximum coverage at the most affordable premiums." },
    { icon: MessageCircle, title: "24/7 WhatsApp Support", text: "Reach us anytime for quotes, queries or claim help." },
    { icon: Trophy, title: "Award-Winning Service", text: "Recognized with 5+ industry awards for excellence." },
  ];
  return (
    <section aria-label="Why Choose Apex Solutions Insurance — Kakinada" className="relative bg-navy py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div {...fadeUp} className="text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-gold">Why Choose Us</div>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Why Thousands Trust <span className="text-gold-gradient">Apex Solutions</span>
          </h2>
        </motion.div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div key={r.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className="glass group rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-gold hover:border-gold/60">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold transition-transform group-hover:scale-110">
                <r.icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl">{r.title}</h3>
              <p className="mt-2 text-sm text-silver">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- STATS BANNER ---------- */
function StatsBanner() {
  const stats = [
    { n: 500, s: "+", l: "Clients Protected" },
    { n: 5, s: "+", l: "Awards Won" },
    { n: 3, s: "", l: "Trusted Brands" },
    { n: 3, s: "+", l: "Years of Excellence" },
    { n: 1000, s: "+", l: "Policies Issued" },
  ];
  return (
    <section className="bg-gold-gradient py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-5">
        {stats.map((s) => (
          <div key={s.l} className="text-center text-navy-deep">
            <div className="font-display text-3xl font-bold md:text-4xl">
              <CountUp to={s.n} suffix={s.s} />
            </div>
            <div className="mt-1 text-xs uppercase tracking-widest md:text-sm">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */
function Gallery() {
  const images = [
    { src: gallery1, title: "Awards & Recognition" },
    { src: gallery2, title: "Excellence in Service" },
    { src: gallery3, title: "Industry Awards" },
    { src: gallery4, title: "Team Accolades" },
    { src: gallery5, title: "Leadership & Team Seminar" },
  ];

  return (
    <section id="gallery" aria-label="Awards & Gallery — Apex Solutions Achievements" className="relative overflow-hidden bg-navy-deep py-16 sm:py-24 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div {...fadeUp} className="text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-gold">Awards & Gallery</div>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Our <span className="text-gold-gradient">Moments of Excellence</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-silver">
            Glimpses of our achievements, recognitions, and the trust we have built over the years.
          </p>
        </motion.div>
        
        <div className="mt-14 relative w-full overflow-hidden mask-horizontal">
          <style>{`
            @keyframes slide-track {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-slide-track {
              display: flex;
              width: max-content;
              animation: slide-track 40s linear infinite;
            }
            .animate-slide-track:hover {
              animation-play-state: paused;
            }
            .mask-horizontal {
              mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
          `}</style>
          
          <div className="animate-slide-track gap-6 py-4">
            {[...images, ...images, ...images, ...images].map((img, i) => (
              <div key={i} className="glass-strong shrink-0 w-[280px] sm:w-[320px] md:w-[360px] rounded-2xl p-3 transition-all hover:-translate-y-2 hover:shadow-gold group">
                <div className="relative w-full aspect-[4/5] sm:aspect-square rounded-xl overflow-hidden">
                  <img src={img.src} alt={`Apex Solutions — ${img.title}, Kakinada Insurance Award`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div className="font-display font-semibold text-gold tracking-wide">{img.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CAREERS ---------- */
function Careers() {
  const [form, setForm] = useState({ name: "", phone: "", city: "", role: "Agent", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Apex Solutions, I am interested in joining your team as an ${form.role}. My name is ${form.name} and I am from ${form.city}. Phone: ${form.phone}. ${form.message ? "Message: " + form.message : ""} Please guide me with the next steps.`;
    window.open(wa(msg), "_blank");
  };
  const roles = [
    { role: "AGENT", icon: "💼", earn: "Earn ₹50,000+ / month", desc: "Sell insurance policies, build your client network, and earn attractive commissions on every policy.",
      benefits: ["Flexible work timings", "Full training & certification", "Attractive commission structure", "Performance bonuses & incentives", "Build your own client network"] },
    { role: "LEADER", icon: "👑", earn: "Earn ₹1,00,000+ / month", desc: "Build and lead your own team of agents, manage business growth, and earn leadership bonuses.",
      benefits: ["Lead & mentor your own team", "High leadership commissions", "Business building incentives", "Recognition & award opportunities", "Long-term passive income"] },
  ];
  return (
    <section id="careers" aria-label="Insurance Agent & Leader Jobs Kakinada — Join Apex Solutions" className="relative overflow-hidden py-16 sm:py-24 md:py-28" style={{ background: "linear-gradient(135deg, oklch(0.22 0.10 20) 0%, oklch(0.14 0.04 260) 100%)" }}>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(201,168,76,0.06)_50%,transparent_52%)] bg-[length:40px_40px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div {...fadeUp} className="text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-gold">Join Our Team</div>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Build Your Insurance Career With <span className="text-gold-gradient">Apex Solutions — Kakinada</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-silver">
            We are actively hiring passionate <strong>Insurance Agents</strong> and dynamic <strong>Team Leaders</strong> for TATA AIA Life Insurance in Kakinada, Rajahmundry, Amalapuram and across Andhra Pradesh.
            Earn ₹50,000–₹1,00,000+ per month. Only serious career seekers need apply.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {roles.map((r, i) => (
            <motion.div key={r.role} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="glass-strong relative overflow-hidden rounded-3xl p-8 hover:-translate-y-1 transition-all hover:shadow-gold">
              <div className="absolute inset-x-0 top-0 h-1 bg-gold-gradient" />
              <div className="text-4xl">{r.icon}</div>
              <h3 className="mt-4 font-display text-3xl font-bold text-gold">{r.role}</h3>
              <div className="mt-1 text-sm text-silver">{r.earn}</div>
              <p className="mt-4 text-silver">{r.desc}</p>
              <ul className="mt-5 space-y-2">
                {r.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-silver">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold" /> {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.form {...fadeUp} onSubmit={submit}
          className="glass-strong mx-auto mt-14 max-w-3xl rounded-3xl p-8 md:p-10">
          <h3 className="text-center font-display text-2xl font-bold">Apply Now — <span className="text-gold-gradient">It's Free!</span></h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Input label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
            <Input label="Phone Number" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />
            <Input label="City" value={form.city} onChange={(v) => setForm({ ...form, city: v })} required />
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest text-silver">Role Interested In</label>
              <select value={form.role} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setForm({ ...form, role: e.target.value })}
                className="w-full rounded-xl border border-gold/30 bg-navy-deep/60 px-4 py-3 text-sm text-foreground outline-none focus:border-gold">
                <option>Agent</option><option>Leader</option><option>Not Sure Yet</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-xs uppercase tracking-widest text-silver">Message (optional)</label>
            <textarea value={form.message} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setForm({ ...form, message: e.target.value })} rows={3}
              className="w-full rounded-xl border border-gold/30 bg-navy-deep/60 px-4 py-3 text-sm outline-none focus:border-gold" />
          </div>
          <button type="submit" className="btn-shimmer mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm shadow-gold">
            <MessageCircle size={16} /> Apply via WhatsApp
          </button>
          <p className="mt-3 text-center text-xs text-silver">We will reach out within 24 hours. Serious applicants only.</p>
        </motion.form>
      </div>
    </section>
  );
}

function Input({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-widest text-silver">{label}</label>
      <input type={type} value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)} required={required}
        className="w-full rounded-xl border border-gold/30 bg-navy-deep/60 px-4 py-3 text-sm outline-none focus:border-gold focus:shadow-gold transition" />
    </div>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const items = [
    { name: "Ravi Kumar", loc: "Kakinada", text: "Apex Solutions helped me find the perfect health insurance plan for my entire family at an affordable price. Lakshmi Prasad garu explained everything in detail. Highly recommended!" },
    { name: "Sunitha Devi", loc: "Rajahmundry", text: "I was confused about which life insurance to choose. The team guided me perfectly and helped me get a TATA AIA plan that suits my budget. Excellent service!" },
    { name: "Venkatesh Rao", loc: "Vijayawada", text: "The claim support from Apex Solutions was outstanding. They handled everything smoothly and I received my claim without any hassle. Truly trustworthy people." },
    { name: "Mounika Reddy", loc: "Kakinada", text: "I joined Apex Solutions as an agent and it changed my financial life. I now earn well every month while helping families get insured. Great leadership." },
    { name: "Prasad Naidu", loc: "Amalapuram", text: "Star Health Insurance through Apex Solutions is the best decision I made. Cashless hospitalization worked perfectly when I needed it most. Thank you!" },
  ];
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i: number) => (i + 1) % items.length);
  return (
    <section id="testimonials" aria-label="Client Testimonials — Apex Solutions Reviews Kakinada" className="bg-navy-deep py-16 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div {...fadeUp} className="text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-gold">Testimonials</div>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">What Our <span className="text-gold-gradient">Clients Say</span></h2>
        </motion.div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <motion.div key={t.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }}
              className="glass relative rounded-2xl p-7">
              <Quote size={36} className="absolute right-5 top-5 text-gold/30" />
              <div className="flex gap-1 text-gold">{Array.from({ length: 5 }).map((_, j) => <Star key={j} size={14} fill="currentColor" />)}</div>
              <p className="mt-4 text-sm text-silver leading-relaxed">"{t.text}"</p>
              <div className="mt-5 border-t border-gold/20 pt-4">
                <div className="font-display text-base text-foreground">{t.name}</div>
                <div className="text-xs text-silver">{t.loc}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <button onClick={next} className="hidden">next</button>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    { q: "What insurance companies does Apex Solutions work with?", a: "We work with three of India's most trusted IRDAI-approved insurance companies: TATA AIA Life Insurance, TATA AIG (General & Health), and Star Health Insurance." },
    { q: "Is consultation with Apex Solutions free of charge?", a: "Yes! Our expert consultation is 100% free. We help you understand the best plan for your needs and budget with zero charges." },
    { q: "How can I apply for a job as an Agent or Leader?", a: "Visit our 'Join Our Team' section, fill out the application form, and click 'Apply via WhatsApp'. We'll reach out within 24 hours." },
    { q: "How much can I earn as an Insurance Agent?", a: "Agents typically earn ₹50,000+ per month based on performance. Leaders can earn ₹1,00,000+ per month with team-building commissions." },
    { q: "How do I get a health insurance quote?", a: "Click 'Get Free Quote' on any insurance plan, or WhatsApp us at +91 9885755669. Our advisor will respond with a personalized quote within hours." },
    { q: "Does Apex Solutions assist with insurance claims?", a: "Yes — we provide end-to-end claim support for all our clients to ensure quick and hassle-free settlements." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section aria-label="Insurance FAQ — Frequently Asked Questions Apex Solutions" className="bg-[oklch(0.96_0.01_85)] py-16 sm:py-24 md:py-28 text-navy-deep">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <motion.div {...fadeUp} className="text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-gold-deep">FAQ</div>
          <h2 className="mt-3 font-display text-3xl font-bold text-navy-deep sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
        </motion.div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={f.q} {...fadeUp}
                className={`overflow-hidden rounded-2xl border bg-white transition-all ${isOpen ? "border-l-4 border-l-gold border-gold/40 shadow-gold" : "border-gold/20"}`}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="font-display text-base font-semibold md:text-lg">{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-deep">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                {isOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                    className="px-6 pb-5 text-sm text-navy/80">{f.a}</motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "Insurance Inquiry", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Apex Solutions, I am ${form.name} (${form.phone}${form.email ? ", " + form.email : ""}). Subject: ${form.subject}. ${form.message}`;
    window.open(wa(msg), "_blank");
  };
  const info = [
    { icon: MapPin, label: "Location", value: "Kakinada, Panasapadu, Andhra Pradesh" },
    { icon: Phone, label: "Phone / WhatsApp", value: "+91 9885755669", href: "tel:+919885755669" },
    { icon: Mail, label: "Email", value: "apex24365s@gmail.com", href: "mailto:apex24365s@gmail.com" },
    { icon: Facebook, label: "Facebook", value: "Apex Solutions on Facebook", href: "https://www.facebook.com/share/1B83rrGM1G/" },
  ];
  return (
    <section id="contact" aria-label="Contact Apex Solutions — Insurance Advisor Kakinada Andhra Pradesh" className="relative bg-navy-deep py-16 sm:py-24 md:py-28" itemScope itemType="https://schema.org/ContactPage">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,168,76,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div {...fadeUp} className="text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-gold">Contact Us</div>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">Get In Touch With <span className="text-gold-gradient">Apex Solutions</span></h2>
        </motion.div>
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <motion.div {...fadeUp} className="space-y-4">
            {info.map((c) => {
              const Tag = c.href ? "a" : "div";
              return (
                <Tag key={c.label} {...(c.href ? { href: c.href, target: "_blank", rel: "noreferrer" } : {})}
                  className="glass flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-gold">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                    <c.icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-silver">{c.label}</div>
                    <div className="font-display text-base text-foreground">{c.value}</div>
                  </div>
                </Tag>
              );
            })}
            <div className="flex gap-3 pt-2">
              <a href="https://www.facebook.com/share/1B83rrGM1G/" target="_blank" rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full bg-navy text-foreground border border-gold/30 hover:bg-gold/10 hover:text-gold"
                aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/apex24365s?igsh=aHBkb3NyOG9sZGRm" target="_blank" rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full bg-navy text-foreground border border-gold/30 hover:bg-gold/10 hover:text-gold"
                aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/in/apex-solutions-003235407/" target="_blank" rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full bg-navy text-foreground border border-gold/30 hover:bg-gold/10 hover:text-gold"
                aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href={wa("Hello Apex Solutions, I have a query.")} target="_blank" rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full bg-[#25D366] text-white"
                aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </motion.div>
          <motion.form {...fadeUp} onSubmit={submit} className="glass-strong rounded-3xl p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <Input label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <Input label="Phone Number" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Input label="Email (optional)" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-silver">Subject</label>
                <select value={form.subject} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setForm({ ...form, subject: e.target.value })}
                  className="w-full rounded-xl border border-gold/30 bg-navy-deep/60 px-4 py-3 text-sm outline-none focus:border-gold">
                  <option>Insurance Inquiry</option><option>Career</option><option>General Query</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-xs uppercase tracking-widest text-silver">Message</label>
              <textarea rows={4} value={form.message} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl border border-gold/30 bg-navy-deep/60 px-4 py-3 text-sm outline-none focus:border-gold" />
            </div>
            <button type="submit" className="btn-shimmer mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm shadow-gold">
              <MessageCircle size={16} /> Send Message via WhatsApp
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-[oklch(0.10_0.03_260)] py-14" aria-label="Apex Solutions Footer — Insurance Services Kakinada">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Apex Solutions" className="h-12 w-12 rounded-full ring-1 ring-gold/40" />
              <div>
                <div className="font-brand text-xl tracking-widest text-gold">APEX</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-silver">Solutions</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-silver">Securing Lives. Empowering Futures. Building Trust.</p>
            <div className="mt-5 flex gap-3">
              <a href="https://www.facebook.com/share/1B83rrGM1G/" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-gold/30 text-silver hover:text-gold" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="https://www.instagram.com/apex24365s?igsh=aHBkb3NyOG9sZGRm" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-gold/30 text-silver hover:text-gold" aria-label="Instagram"><Instagram size={16} /></a>
              <a href="https://www.linkedin.com/in/apex-solutions-003235407/" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full border border-gold/30 text-silver hover:text-gold" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href={wa("Hello Apex Solutions")} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-[#25D366] text-white" aria-label="WhatsApp"><MessageCircle size={16} /></a>
            </div>
          </div>
          <FooterCol heading="Quick Links" items={[
            ["Home", "home"], ["About Us", "about"], ["Insurance Plans", "plans"],
            ["Awards & Gallery", "gallery"], ["Join Our Team", "careers"], ["Insurance Insights", "insights"], ["Testimonials", "testimonials"], ["Contact", "contact"],
          ]} />
          <FooterCol heading="Insurance Partners" items={[
            ["TATA AIA Life", "plans"], ["TATA AIG", "plans"], ["Star Health", "plans"], ["Get Free Quote", "contact"],
          ]} />
          <div>
            <div className="font-display text-sm uppercase tracking-widest text-gold">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-silver">
              <li className="flex items-start gap-2"><MapPin size={14} className="mt-1 text-gold" />Kakinada, Panasapadu, AP</li>
              <li className="flex items-center gap-2"><Phone size={14} className="text-gold" /><a href="tel:+919885755669" className="hover:text-gold">+91 9885755669</a></li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-gold" /><a href="mailto:apex24365s@gmail.com" className="hover:text-gold">apex24365s@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gold/20 pt-6 text-center text-xs text-silver">
          © {new Date().getFullYear()} Apex Solutions, Kakinada, Andhra Pradesh. All Rights Reserved. · IRDAI Approved Insurance Advisor · Trusted by 500+ Families
        </div>
      </div>
    </footer>
  );
}
function FooterCol({ heading, items }: { heading: string; items: [string, string][] }) {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <div>
      <div className="font-display text-sm uppercase tracking-widest text-gold">{heading}</div>
      <ul className="mt-4 space-y-2 text-sm text-silver">
        {items.map(([label, id]) => (
          <li key={label}><button onClick={() => go(id)} className="hover:text-gold">{label}</button></li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- INSURANCE INSIGHTS ---------- */
function InsuranceInsights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeAd, setActiveAd] = useState<number | null>(null);

  const ads = [
    {
      src: AD1,
      title: "Comprehensive Health Solutions",
      description: "Secure the ultimate health plans for your family's safety and complete peace of mind.",
      msg: "Hello Apex Solutions, I am interested in knowing more about the Comprehensive Health Solutions plan (AD-1) shown in your Insurance Insights."
    },
    {
      src: AD2,
      title: "Term Life Protection",
      description: "Financial security for your family's tomorrow with affordable, reliable term coverage.",
      msg: "Hello Apex Solutions, I would like to inquire about the Term Life Protection plans (AD-2) from your Insurance Insights."
    },
    {
      src: AD3,
      title: "Star Health Medical Care",
      description: "Top-tier health coverage with extensive hospital networks and cashless benefits.",
      msg: "Hello Apex Solutions, I want to know more about the Star Health Insurance plans (AD-3) listed under Insurance Insights."
    },
    {
      src: AD4,
      title: "Retirement & Savings Plans",
      description: "Secure your gold years with guaranteed returns and stable lifetime pension schemes.",
      msg: "Hello Apex Solutions, please guide me on the Retirement and Future Savings plans (AD-4) featured in your Insurance Insights."
    },
    {
      src: AD5,
      title: "Child Education Secure Plans",
      description: "Empower your children's future education dreams with dedicated milestone payouts.",
      msg: "Hello Apex Solutions, I am interested in the Child Education and Secure Future plans (AD-5) mentioned in your Insurance Insights."
    },
    {
      src: AD6,
      title: "TATA AIA Protection & Wealth",
      description: "Innovative dual term plans that offer life protection combined with wealth growth opportunities.",
      msg: "Hello Apex Solutions, please provide details on TATA AIA Life Protection & Wealth plans (AD-6) shown in your Insurance Insights."
    },
    {
      src: AD7,
      title: "Hassle-Free Claim Support",
      description: "Dedicated assistance to ensure your claims are processed and settled quickly.",
      msg: "Hello Apex Solutions, I'd like to consult on plans that offer Hassle-Free and Quick Claim Settlements (AD-7)."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ads.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [ads.length]);

  const currentAd = ads[activeIndex];

  return (
    <section id="insights" className="relative overflow-hidden bg-navy py-16 sm:py-24 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,168,76,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-6">
        <motion.div {...fadeUp} className="text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-gold">Insurance Insights</div>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Knowledge is <span className="text-gold-gradient">Protection</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-silver">
            Explore our curated insights, guides, and plans. Banners slide automatically every 3 seconds. Click to view full size.
          </p>
        </motion.div>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes scaleIn {
            from { opacity: 0.8; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
        `}</style>

        {/* Slideshow Card container */}
        <div className="mt-14 relative glass-strong rounded-3xl overflow-hidden border border-gold/20 p-6 sm:p-10 md:p-12 shadow-gold max-w-4xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            {/* Left Column: Details */}
            <div className="flex flex-col justify-center text-center md:text-left order-2 md:order-1 min-h-[220px]">
              <span className="text-xs uppercase tracking-widest text-gold mb-2 font-semibold">Insight {activeIndex + 1} of {ads.length}</span>
              <h3 key={`title-${activeIndex}`} className="font-display text-xl sm:text-2xl font-bold text-foreground animate-[fadeIn_0.5s_ease-out]">
                {currentAd.title}
              </h3>
              <p key={`desc-${activeIndex}`} className="text-sm text-silver mt-4 leading-relaxed animate-[fadeIn_0.5s_ease-out]">
                {currentAd.description}
              </p>
              
              <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
                <a
                  href={wa(currentAd.msg)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-shimmer inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-navy-deep shadow-gold"
                >
                  <MessageCircle size={16} /> WhatsApp Inquiry
                </a>
                <button
                  onClick={() => setActiveAd(activeIndex)}
                  className="rounded-full border border-gold/40 text-gold hover:bg-gold/10 px-5 py-3 text-sm font-semibold transition-all"
                >
                  View Full Banner
                </button>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="flex justify-center order-1 md:order-2">
              <div 
                onClick={() => setActiveAd(activeIndex)}
                className="relative cursor-pointer group aspect-[148/210] w-[220px] sm:w-[260px] rounded-2xl overflow-hidden border border-gold/20 shadow-elegant hover:border-gold/60 transition-colors"
              >
                <img
                  key={`img-${activeIndex}`}
                  src={currentAd.src}
                  alt={currentAd.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 animate-[scaleIn_0.4s_ease-out]"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-gold text-navy-deep text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 shadow-gold">
                    View Full Size <Eye size={12} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={() => setActiveIndex((prev) => (prev === 0 ? ads.length - 1 : prev - 1))}
            className="absolute left-3 top-[30%] md:top-[50%] -translate-y-[50%] hidden sm:grid h-10 w-10 place-items-center rounded-full bg-navy-deep/80 hover:bg-navy text-gold border border-gold/20 hover:border-gold transition-all z-10"
            aria-label="Previous Slide"
          >
            <ArrowRight size={18} className="rotate-180" />
          </button>
          <button 
            onClick={() => setActiveIndex((prev) => (prev + 1) % ads.length)}
            className="absolute right-3 top-[30%] md:top-[50%] -translate-y-[50%] hidden sm:grid h-10 w-10 place-items-center rounded-full bg-navy-deep/80 hover:bg-navy text-gold border border-gold/20 hover:border-gold transition-all z-10"
            aria-label="Next Slide"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {ads.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "w-8 bg-gold" : "w-2 bg-gold/30 hover:bg-gold/50"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {activeAd !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
          <div className="absolute inset-0" onClick={() => setActiveAd(null)} />
          <div className="relative max-w-md w-full glass-strong rounded-3xl p-5 border border-gold/30 shadow-gold">
            <button
              onClick={() => setActiveAd(null)}
              className="absolute top-4 right-4 text-silver hover:text-gold bg-navy-deep/80 hover:bg-navy p-2 rounded-full border border-gold/20 transition-all z-10"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="aspect-[148/210] w-full rounded-2xl overflow-hidden mt-6 border border-gold/10 relative">
              <img src={ads[activeAd].src} alt={ads[activeAd].title} className="w-full h-full object-cover" />
            </div>
            <div className="mt-5 text-center">
              <h3 className="font-display text-lg font-bold text-gold">{ads[activeAd].title}</h3>
              <p className="text-xs text-silver mt-2">{ads[activeAd].description}</p>
              <div className="mt-5 flex gap-3 justify-center">
                <a
                  href={wa(ads[activeAd].msg)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white rounded-full px-5 py-2.5 text-xs font-semibold hover:opacity-90 transition"
                >
                  <MessageCircle size={14} /> WhatsApp Inquiry
                </a>
                <button
                  onClick={() => setActiveAd(null)}
                  className="border border-gold/40 text-gold rounded-full px-5 py-2.5 text-xs font-semibold hover:bg-gold/10 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------- MAIN ---------- */
export function ApexHome() {
  return (
    <>
      <Hero />
      <About />
      <Founder />
      <Plans />
      <WhyUs />
      <StatsBanner />
      <Gallery />
      <Careers />
      <InsuranceInsights />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

void Building2; void Award;
