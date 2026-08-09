import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, Users, Headphones, Laptop, FileText, Megaphone,
  Sparkles, Target, ShieldCheck, Clock, Globe2, Briefcase, BrainCircuit,
  HeartHandshake, Star, Quote, Zap, LineChart, CheckCircle2,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { SpotlightCard } from "@/components/site/SpotlightCard";
import { GlowButton } from "@/components/site/GlowButton";
import { HeroVisual } from "@/components/site/HeroVisual";
import { Counter } from "@/components/site/Counter";
import { Marquee } from "@/components/site/Marquee";
import { motion } from "framer-motion";
// DL_Talent_500x500.png
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DL Talent & Technology — Talent. Technology. Growth." },
      { name: "description", content: "Premium recruitment, HR solutions, virtual assistance, customer support, AI solutions and web development for startups, SMEs and enterprises." },
      { property: "og:title", content: "DL Talent & Technology — Talent. Technology. Growth." },
      { property: "og:description", content: "Elite talent and modern technology for startups, SMEs and enterprises worldwide." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
       {
      rel: "icon",
      href: "/DL_Talent_500x500.png",
    },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Users, title: "Recruitment", desc: "Permanent, remote and bulk hiring with end-to-end sourcing and screening." },
  { icon: HeartHandshake, title: "HR Solutions", desc: "Onboarding, documentation, engagement and HR ops that scale with you." },
  { icon: Briefcase, title: "Virtual Assistance", desc: "Dedicated VAs for admin, scheduling, research and daily operations." },
  { icon: Headphones, title: "Customer Support", desc: "Email, chat and voice support that keeps your customers delighted." },
  { icon: FileText, title: "Administrative Support", desc: "Executive assistance, data operations and precise back-office work." },
  { icon: Laptop, title: "Web Development", desc: "Modern React apps, marketing sites and conversion-focused landing pages." },
  { icon: BrainCircuit, title: "AI Solutions", desc: "AI assistants, automation and workflow intelligence built into your stack." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Campaigns, email automation and demand generation that compounds." },
  { icon: FileText, title: "Content Writing", desc: "SEO content, technical documentation and thought-leadership at scale." },
];

const why = [
  { icon: ShieldCheck, title: "Vetted Talent", desc: "Rigorous screening on skills, communication and reliability." },
  { icon: Clock, title: "48h Kickoff", desc: "Most engagements start within 48–72 hours of the first call." },
  { icon: Target, title: "Outcome Focused", desc: "We measure success in your growth metrics, not hours billed." },
  { icon: Globe2, title: "Global Coverage", desc: "Comfortable across time zones, tools and cultures." },
  { icon: Zap, title: "Elastic Capacity", desc: "Scale your team up or down without hiring overhead." },
  { icon: LineChart, title: "Transparent Reporting", desc: "Weekly metrics, clear comms, zero surprises." },
];

const stats = [
  { value: 50, suffix: "+", label: "Clients Served" },
  { value: 1000, suffix: "+", label: "Candidates Placed" },
  { value: 12, suffix: "+", label: "Countries" },
  { value: 95, suffix: "%", label: "Success Rate" },
];

const steps = [
  { n: "01", icon: Sparkles, title: "Discovery Call", desc: "We listen to your goals, team structure and constraints." },
  { n: "02", icon: Target, title: "Tailored Proposal", desc: "A custom plan with the right people, scope and pricing." },
  { n: "03", icon: Zap, title: "Kickoff & Onboarding", desc: "We integrate with your tools and workflows in days." },
  { n: "04", icon: LineChart, title: "Deliver & Optimize", desc: "Weekly reporting and continuous improvement." },
];

const industries = [
  "SaaS & Tech Startups", "E-commerce & D2C", "Healthcare", "EdTech",
  "Finance & FinTech", "Real Estate", "AI & Data", "Marketing Agencies", "Professional Services",
];

const testimonials = [
  { name: "Priya Sharma", role: "Founder, BloomKart", quote: "DL helped us hire 6 quality engineers in a month. Their screening saved us weeks of effort." },
  { name: "Michael Chen", role: "COO, Northwind SaaS", quote: "Our VA team from DL is rock-solid. Customer response time dropped 60% in 30 days." },
  { name: "Aarav Mehta", role: "CEO, GreenLeaf Studio", quote: "They rebuilt our marketing site and now we convert 2x more leads. A true growth partner." },
];

const faqs = [
  { q: "How fast can you start a new engagement?", a: "Most projects kick off within 48–72 hours after the discovery call and signed proposal." },
  { q: "Do you support remote and global hiring?", a: "Yes — we source, screen and coordinate hiring across time zones for remote-first teams." },
  { q: "What is your pricing model?", a: "Flexible monthly retainers, project-based pricing and dedicated FTE models." },
  { q: "Do you sign NDAs and DPAs?", a: "Absolutely. We follow strict confidentiality, security and data-protection practices." },
];

const headlineWords = ["Empowering", "Businesses", "with"];

function HomePage() {
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs font-medium text-muted-foreground"
              >
                <Sparkles className="h-3.5 w-3.5 text-cyan" />
                Trusted by teams across 12+ countries
              </motion.span>

              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                {headlineWords.map((w, i) => (
                  <motion.span
                    key={w}
                    initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="mr-3 inline-block"
                  >
                    {w}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-gradient animate-gradient-pan"
                >
                  Talent &amp; Technology
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                We help startups, SMEs and enterprises scale with recruitment, HR solutions,
                virtual assistance, customer support, AI solutions and web development.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.85 }}
                className="mt-9 flex flex-wrap gap-3"
              >
                <GlowButton to="/contact">
                  Hire Talent <ArrowRight className="h-4 w-4" />
                </GlowButton>
                <GlowButton to="/contact" variant="ghost">
                  Get Free Consultation
                </GlowButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-12 flex flex-wrap gap-x-8 gap-y-4"
              >
                {["No hiring overhead", "NDA & DPA ready", "Global time zones"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-success" /> {t}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <HeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Partnering with ambitious teams
          </p>
          <Marquee items={["Northwind SaaS", "BloomKart", "GreenLeaf Studio", "Aster Health", "Lumen AI", "Vertex Labs", "Orbit EdTech", "Finlyft"]} />
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90} direction="blur">
                <SpotlightCard className="p-7 text-center">
                  <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title={<>A full stack of <span className="text-gradient">talent &amp; tech</span> services</>}
              description="One partner for hiring, support, AI and engineering — purpose-built for ambitious teams."
            />
          </Reveal>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <SpotlightCard className="h-full p-7">
                  <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-elegant transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn more <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <GlowButton to="/services" variant="ghost">
              Explore all services <ArrowRight className="h-4 w-4" />
            </GlowButton>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal direction="right">
              <SectionHeading
                eyebrow="Why DL"
                align="left"
                title={<>Built for the way <span className="text-gradient">modern teams scale</span></>}
                description="We blend hand-picked talent with pragmatic technology so you ship more, faster, with fewer headaches."
              />
              <div className="mt-8">
                <GlowButton to="/about">
                  Learn more about us <ArrowRight className="h-4 w-4" />
                </GlowButton>
              </div>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {why.map((w, i) => (
                <Reveal key={w.title} delay={i * 70} direction="left">
                  <SpotlightCard className="h-full p-6">
                    <div className="grid h-11 w-11 place-items-center rounded-xl glass-card text-primary transition-transform duration-500 group-hover:-rotate-6">
                      <w.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display font-semibold">{w.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Process"
              title="How we work with you"
              description="A clear, collaborative path from first call to long-term partnership."
            />
          </Reveal>
          <div className="relative mt-16">
            <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px gradient-primary opacity-40 lg:block" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 110} direction="scale">
                  <div className="relative">
                    <div className="relative z-10 mx-auto grid h-18 w-18 place-items-center rounded-2xl gradient-primary p-5 text-primary-foreground shadow-elegant lg:mx-0">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <SpotlightCard className="mt-6 h-full p-6">
                      <div className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">Step {s.n}</div>
                      <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                    </SpotlightCard>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Industries" title="Industries we serve" />
          </Reveal>
          <Reveal delay={120} className="mt-12">
            <Marquee items={industries} />
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title={<>Loved by <span className="text-gradient">founders &amp; operators</span></>}
              description="Real teams. Real results."
            />
          </Reveal>
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90} direction="blur">
                <SpotlightCard className="h-full p-7">
                  <Quote className="h-7 w-7 text-primary" />
                  <p className="mt-5 text-sm leading-relaxed text-foreground/90">“{t.quote}”</p>
                  <div className="mt-6 flex items-center gap-1 text-cyan">
                    {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                  </div>
                  <div className="mt-5">
                    <div className="font-display text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          </Reveal>
          <Reveal delay={120}>
            <Accordion type="single" collapsible className="mt-12 space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`f-${i}`} className="rounded-2xl glass-card border border-border px-5">
                  <AccordionTrigger className="text-left font-display hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal direction="scale">
            <div className="relative overflow-hidden rounded-3xl glass-panel p-10 text-center sm:p-16">
              <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full gradient-primary opacity-30 blur-[100px]" />
              <div className="relative mx-auto max-w-2xl">
                <h2 className="font-display text-3xl font-bold sm:text-5xl">
                  Ready to scale with the right <span className="text-gradient">talent &amp; tech</span>?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Book a free 30-minute consultation. We'll map a plan tailored to your goals.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <GlowButton to="/contact">Get Free Consultation <ArrowRight className="h-4 w-4" /></GlowButton>
                  <GlowButton to="/services" variant="ghost">View Services</GlowButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
