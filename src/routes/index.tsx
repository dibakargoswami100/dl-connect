import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Users, Headphones, Laptop, FileText, Mail, Database,
  Sparkles, Target, Rocket, ShieldCheck, Clock, Globe2, Briefcase,
  GraduationCap, HeartHandshake, Star, Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DL Talent & Technology — Talent, Support & Web Solutions" },
      { name: "description", content: "Recruitment, HR support, virtual assistance, customer support, content writing and web development for startups and growing businesses." },
      { property: "og:title", content: "DL Talent & Technology" },
      { property: "og:description", content: "Connecting Talent. Delivering Technology. Driving Growth." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: Users, title: "Recruitment & Hiring", desc: "Permanent, remote, startup and bulk hiring with end-to-end sourcing and screening." },
  { icon: HeartHandshake, title: "HR Support", desc: "HR documentation, onboarding, engagement and administration that scales with you." },
  { icon: Briefcase, title: "Virtual Assistance", desc: "Reliable VAs to handle admin, scheduling, research and day-to-day operations." },
  { icon: Headphones, title: "Customer Support", desc: "Email, chat and voice support that keeps your customers happy 24/7." },
  { icon: Database, title: "Data Entry & Admin", desc: "Accurate data entry, executive admin and back-office support." },
  { icon: Mail, title: "Email Marketing", desc: "Campaign strategy, copywriting and automation that converts." },
  { icon: FileText, title: "Content & Tech Writing", desc: "SEO content, blogs, whitepapers and technical documentation." },
  { icon: Laptop, title: "Web Development", desc: "Modern business websites, React apps, landing pages and WordPress builds." },
];

const why = [
  { icon: ShieldCheck, title: "Vetted Talent", desc: "Rigorous screening across skills, communication and reliability." },
  { icon: Clock, title: "Fast Turnaround", desc: "Most engagements kick off within 48–72 hours." },
  { icon: Target, title: "Outcome Focused", desc: "We measure success in your growth metrics, not hours billed." },
  { icon: Globe2, title: "Global Mindset", desc: "Comfortable across time zones, tools and cultures." },
];

const steps = [
  { n: "01", title: "Discovery Call", desc: "We listen to your goals, team and constraints." },
  { n: "02", title: "Tailored Proposal", desc: "A custom plan with the right people, scope and pricing." },
  { n: "03", title: "Kickoff & Onboarding", desc: "We integrate with your tools and workflows in days, not weeks." },
  { n: "04", title: "Deliver & Optimize", desc: "Weekly reporting, transparent comms and continuous improvement." },
];

const industries = [
  "SaaS & Tech Startups", "E-commerce & D2C", "Healthcare", "EdTech",
  "Finance & FinTech", "Real Estate", "Marketing Agencies", "Professional Services",
];

const testimonials = [
  { name: "Priya Sharma", role: "Founder, BloomKart", quote: "DL helped us hire 6 quality engineers in a month. Their screening saved us weeks of effort." },
  { name: "Michael Chen", role: "COO, Northwind SaaS", quote: "Our VA team from DL is rock-solid. Customer response time dropped 60% in 30 days." },
  { name: "Aarav Mehta", role: "CEO, GreenLeaf Studio", quote: "They rebuilt our marketing site and now we convert 2x more leads. Truly a growth partner." },
];

const faqs = [
  { q: "How fast can you start a new engagement?", a: "Most projects kick off within 48–72 hours after the discovery call and signed proposal." },
  { q: "Do you support remote and global hiring?", a: "Yes — we source, screen and coordinate hiring across time zones for remote-first teams." },
  { q: "What is your pricing model?", a: "We offer flexible monthly retainers, project-based pricing and dedicated FTE models." },
  { q: "Do you sign NDAs and DPAs?", a: "Absolutely. We follow strict confidentiality, security and data-protection practices." },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative hero-bg overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-foreground/80 backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  Trusted by startups across 12+ countries
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
                  Empowering Businesses with{" "}
                  <span className="text-gradient">Talent & Technology</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Helping startups and growing businesses with recruitment, virtual assistance,
                  customer support, administrative support, digital services and web development.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="gradient-primary text-primary-foreground border-0 shadow-elegant hover:opacity-95">
                    <Link to="/contact">Hire Talent <ArrowRight className="ml-1 h-4 w-4" /></Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contact">Get a Free Consultation</Link>
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                  {[
                    { k: "200+", v: "Talents Placed" },
                    { k: "98%", v: "Client Retention" },
                    { k: "48h", v: "Avg. Kickoff" },
                  ].map((s) => (
                    <div key={s.v}>
                      <div className="text-2xl sm:text-3xl font-display font-bold text-foreground">{s.k}</div>
                      <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div className="relative">
                <div className="absolute -inset-6 gradient-primary opacity-20 blur-3xl rounded-[3rem]" />
                <div className="relative grid grid-cols-2 gap-4">
                  {services.slice(0, 4).map((s, i) => (
                    <div
                      key={s.title}
                      className={`glass-card rounded-2xl p-5 shadow-card ${i % 2 ? "translate-y-6" : ""}`}
                    >
                      <div className="grid h-10 w-10 place-items-center rounded-lg gradient-primary text-primary-foreground">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <div className="mt-3 font-display font-semibold text-sm">{s.title}</div>
                      <div className="mt-1 text-xs text-muted-foreground line-clamp-2">{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="A full-stack of talent & tech services"
              description="One partner for hiring, support, content and web — purpose-built for ambitious teams."
            />
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 hover:shadow-elegant hover:-translate-y-1 transition-all">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary group-hover:gradient-primary group-hover:text-primary-foreground transition-all">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display font-semibold text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">Explore all services <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 sm:py-28 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Why DL"
                align="left"
                title="Built for the way modern teams scale"
                description="We blend hand-picked talent with pragmatic technology so you ship more, faster, with fewer headaches."
              />
              <div className="mt-8">
                <Button asChild className="gradient-primary text-primary-foreground border-0">
                  <Link to="/about">Learn more about us <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-5">
              {why.map((w, i) => (
                <Reveal key={w.title} delay={i * 80}>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                    <div className="grid h-10 w-10 place-items-center rounded-lg gradient-primary text-primary-foreground">
                      <w.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display font-semibold">{w.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Client success process"
              title="How we work with you"
              description="A clear, collaborative path from first call to long-term partnership."
            />
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="relative rounded-2xl border border-border bg-card p-6 h-full">
                  <div className="text-4xl font-display font-bold text-gradient">{s.n}</div>
                  <h3 className="mt-3 font-display font-semibold text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 sm:py-28 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Industries" title="Industries we serve" />
          </Reveal>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {industries.map((i, idx) => (
              <Reveal key={i} delay={idx * 40}>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-card">
                  <Rocket className="h-4 w-4 text-primary" /> {i}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="Loved by founders & operators"
              description="Real teams. Real results."
            />
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card">
                  <Quote className="h-6 w-6 text-primary" />
                  <p className="mt-4 text-sm text-foreground/90 leading-relaxed">"{t.quote}"</p>
                  <div className="mt-5 flex items-center gap-1 text-primary">
                    {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                  </div>
                  <div className="mt-4">
                    <div className="font-display font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW */}
      <section className="py-20 sm:py-28 bg-secondary/40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          </Reveal>
          <Reveal delay={120}>
            <Accordion type="single" collapsible className="mt-10">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`f-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-display">{f.q}</AccordionTrigger>
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
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl gradient-primary p-10 sm:p-16 text-primary-foreground shadow-elegant">
              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="relative max-w-2xl">
                <GraduationCap className="h-10 w-10 opacity-90" />
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Ready to scale with the right talent & tech?</h2>
                <p className="mt-3 opacity-90">Book a free 30-minute consultation. We'll map a plan tailored to your goals.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/contact">Get a Free Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-white/40 text-primary-foreground hover:bg-white/10">
                    <Link to="/services">View Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
