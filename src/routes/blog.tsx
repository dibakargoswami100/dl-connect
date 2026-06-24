import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — DL Talent & Technology" },
      { name: "description", content: "Insights on recruitment, hiring strategy, HR, virtual assistance, productivity and web development." },
      { property: "og:title", content: "DL Talent & Technology Blog" },
      { property: "og:description", content: "Practical insights for founders and operators." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const categories = [
  "Recruitment Tips", "Hiring Strategies", "Startup Growth",
  "HR Best Practices", "Virtual Assistance", "Business Productivity", "Web Development",
];

const posts = [
  { cat: "Recruitment Tips", title: "How to write job descriptions that actually attract A-players", date: "Jun 18, 2026", excerpt: "Five frameworks to make your roles stand out in a noisy job market." },
  { cat: "Hiring Strategies", title: "Remote hiring playbook for early-stage startups", date: "Jun 12, 2026", excerpt: "From sourcing to onboarding — what changes when your team is global." },
  { cat: "Startup Growth", title: "When to hire your first operations partner", date: "Jun 04, 2026", excerpt: "Signals that say it's time, and how to scope the role." },
  { cat: "HR Best Practices", title: "Onboarding in your first 30 days: a simple template", date: "May 27, 2026", excerpt: "The four pillars that turn new hires into productive contributors fast." },
  { cat: "Virtual Assistance", title: "10 tasks every founder should delegate to a VA", date: "May 19, 2026", excerpt: "Reclaim your calendar with these high-leverage handoffs." },
  { cat: "Business Productivity", title: "Async-first communication: a practical guide", date: "May 09, 2026", excerpt: "Cut meetings in half without losing alignment." },
  { cat: "Web Development", title: "Why your marketing site should be your fastest experiment", date: "Apr 30, 2026", excerpt: "Treat your homepage like a product surface, not a brochure." },
  { cat: "Recruitment Tips", title: "Screening signals that actually predict success", date: "Apr 21, 2026", excerpt: "Skip the gimmicks — focus on these four predictive signals." },
  { cat: "Startup Growth", title: "Building a hiring brand on a startup budget", date: "Apr 12, 2026", excerpt: "Small, repeatable habits that compound into magnetic employer branding." },
];

function BlogPage() {
  return (
    <div>
      <section className="hero-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <Reveal>
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary">Insights</span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold max-w-3xl">
              Stories on <span className="text-gradient">talent, hiring & growth.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Practical playbooks and lessons from working with founders, operators and engineering teams.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((c) => (
              <span key={c} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium hover:bg-secondary transition-colors cursor-pointer">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Latest" title="Fresh from the blog" />
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <Reveal key={p.title} delay={i * 50}>
                <article className="group h-full rounded-2xl border border-border bg-card overflow-hidden shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
                  <div className="h-40 gradient-primary opacity-90 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <span className="absolute top-4 left-4 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {p.cat}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" /> {p.date}
                    </div>
                    <h3 className="mt-3 font-display font-semibold text-lg leading-snug group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                    <Link to="/blog" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read more <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
