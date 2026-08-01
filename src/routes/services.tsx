import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users, HeartHandshake, Briefcase, ClipboardList, UserCog, Headphones,
  Database, Mail, FileCode2, PenLine, Laptop, ArrowRight, CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — DL Talent & Technology" },
      { name: "description", content: "Recruitment, HR, virtual assistance, customer support, data entry, email marketing, content & technical writing, and web development." },
      { property: "og:title", content: "Services — DL Talent & Technology" },
      { property: "og:description", content: "A complete suite of talent and technology services for growing businesses." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  offerings?: string[];
  benefits: string[];
  why: string;
};

const services: Service[] = [
  {
    id: "recruitment",
    icon: Users,
    title: "Recruitment & Talent Acquisition",
    description: "End-to-end hiring for startups and growing companies — from sourcing to onboarding.",
    offerings: ["Permanent Hiring", "Remote Hiring", "Startup Hiring", "Bulk Hiring", "Candidate Sourcing", "Screening & Interview Coordination"],
    benefits: ["Faster time-to-hire", "Pre-vetted, role-fit candidates", "Reduced hiring overhead", "Flexible engagement models"],
    why: "We combine deep talent networks with structured screening to deliver candidates who fit your culture and goals.",
  },
  {
    id: "hr",
    icon: HeartHandshake,
    title: "Human Resources Support",
    description: "HR partner-as-a-service for teams without a full in-house HR function.",
    offerings: ["HR Documentation", "Employee Engagement", "Onboarding Assistance", "HR Administration"],
    benefits: ["Compliant policies & docs", "Smoother onboarding", "Higher retention", "Scalable HR processes"],
    why: "Practical HR systems your team will actually use — built around your company's stage.",
  },
  {
    id: "virtual-assistance",
    icon: Briefcase,
    title: "Virtual Assistant Services",
    description: "Reliable VAs for scheduling, research, inbox management and day-to-day operations.",
    benefits: ["Reclaim 15+ hours weekly", "Consistent quality", "Time-zone flexible", "Tool-agnostic"],
    why: "Hand-picked VAs trained in modern productivity tools and communication best practices.",
  },
  {
    id: "admin",
    icon: ClipboardList,
    title: "Administrative Assistance",
    description: "Back-office support that keeps your business running smoothly.",
    benefits: ["Faster turnarounds", "Accurate documentation", "Lower operational cost", "Process consistency"],
    why: "Detail-oriented professionals who treat your operations like their own.",
  },
  {
    id: "exec-admin",
    icon: UserCog,
    title: "Executive Administrative Assistance",
    description: "Senior support for founders and executives — calendar, comms, prep and follow-through.",
    benefits: ["Better focus time", "Polished communication", "Confidentiality first", "Proactive ownership"],
    why: "Experienced EAs who anticipate needs and remove friction from your day.",
  },
  {
    id: "support",
    icon: Headphones,
    title: "Customer Support Services",
    description: "Email, chat and voice support that delights your customers and protects your brand.",
    benefits: ["24/7 coverage available", "Lower response times", "Higher CSAT", "Scalable team size"],
    why: "We build playbooks, train agents and measure what matters — so support becomes a growth lever.",
  },
  {
    id: "data-entry",
    icon: Database,
    title: "Data Entry Services",
    description: "Accurate, fast and secure data entry across spreadsheets, CRMs and custom systems.",
    benefits: ["High accuracy SLAs", "Quick turnaround", "Data privacy compliant", "Quality-controlled"],
    why: "Trained operators with QA layers ensure clean, usable data — every time.",
  },
  {
    id: "email-marketing",
    icon: Mail,
    title: "Email Marketing",
    description: "Strategy, copy and automation that turns lists into revenue.",
    benefits: ["Higher open & click rates", "Automated workflows", "Segmented campaigns", "Clear performance reporting"],
    why: "We pair sharp copywriting with smart lifecycle automations across your favorite ESPs.",
  },
  {
    id: "tech-writing",
    icon: FileCode2,
    title: "Technical Writing",
    description: "Developer docs, API references, user guides and SOPs written with clarity and rigor.",
    benefits: ["Faster developer onboarding", "Fewer support tickets", "Search-friendly docs", "Version-controlled"],
    why: "Writers who understand engineering teams — we work with your stack, not against it.",
  },
  {
    id: "content-writing",
    icon: PenLine,
    title: "Content Writing",
    description: "SEO content, blogs, thought leadership and brand storytelling that performs.",
    benefits: ["Original, on-brand voice", "SEO-optimized", "Editorial calendar", "Performance-tracked"],
    why: "Strategists + writers who create content tied to real business outcomes.",
  },
  {
    id: "web-dev",
    icon: Laptop,
    title: "Web Development",
    description: "Modern websites and web apps that look beautiful and convert.",
    offerings: ["Business Websites", "Portfolio Websites", "Landing Pages", "React Applications", "WordPress Websites"],
    benefits: ["Fast & SEO-friendly", "Mobile-first design", "Easy to maintain", "Built to scale"],
    why: "Designers and engineers who care about performance, accessibility and outcomes — not just pixels.",
  },
];

function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <Reveal>
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary">Services</span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl">
              Everything you need to <span className="text-gradient">hire, support and build.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              One partner across talent, operations and technology — flexible engagement models
              tailored to your stage of growth.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-2">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="rounded-full glass-card px-3 py-1.5 text-xs font-medium hover:bg-secondary transition-colors">
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          {services.map((s, i) => (
            <Reveal key={s.id}>
              <section id={s.id} className="scroll-mt-24 rounded-3xl glass-card p-6 sm:p-10 shadow-card">
                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8">
                  <div>
                    <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-5 text-2xl sm:text-3xl font-bold">{s.title}</h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{s.description}</p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button asChild className="gradient-primary text-primary-foreground border-0">
                        <Link to="/contact">Book a Consultation</Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link to="/contact">Request a Quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
                      </Button>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {s.offerings && (
                      <div className="sm:col-span-2">
                        <div className="text-xs font-semibold tracking-widest uppercase text-primary">Offerings</div>
                        <ul className="mt-3 grid sm:grid-cols-2 gap-2">
                          {s.offerings.map((o) => (
                            <li key={o} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                              <span>{o}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div>
                      <div className="text-xs font-semibold tracking-widest uppercase text-primary">Key Benefits</div>
                      <ul className="mt-3 space-y-2">
                        {s.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-semibold tracking-widest uppercase text-primary">Why DL</div>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.why}</p>
                    </div>
                  </div>
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl gradient-primary p-10 text-center text-primary-foreground shadow-elegant">
              <h2 className="text-3xl font-bold">Not sure where to start?</h2>
              <p className="mt-3 opacity-90">Tell us about your goals — we'll recommend the right mix of services.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contact">Book a Free Consultation</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
