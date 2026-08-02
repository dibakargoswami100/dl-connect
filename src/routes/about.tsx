import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { LeadershipSection } from "@/components/site/LeadershipSection";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — DL Talent & Technology" },
      { name: "description", content: "DL Talent & Technology is a trusted business support and technology solutions partner for startups and growing teams." },
      { property: "og:title", content: "About DL Talent & Technology" },
      { property: "og:description", content: "Our mission, vision and the team behind DL." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});


function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <Reveal>
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary">About us</span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold max-w-3xl">
              A trusted partner for <span className="text-gradient">talent, support & technology.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              DL Talent & Technology helps startups, entrepreneurs and growing businesses streamline
              operations, improve productivity and access skilled talent and technology solutions —
              through cost-effective, scalable support services.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-3xl glass-card p-8 sm:p-10 shadow-card h-full">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-2xl sm:text-3xl font-bold">Our Mission</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To empower businesses with reliable talent and scalable technology solutions that
                drive efficiency and growth.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl glass-card p-8 sm:p-10 shadow-card h-full">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-2xl sm:text-3xl font-bold">Our Vision</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To become a trusted global partner for talent acquisition, business support and
                digital transformation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="What we stand for" title="Our core values" />
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Award, t: "Excellence", d: "We obsess over quality in every deliverable." },
              { icon: Users, t: "People First", d: "Talent and clients both deserve a great experience." },
              { icon: Target, t: "Outcomes", d: "We optimize for impact, not activity." },
              { icon: Eye, t: "Transparency", d: "Honest, clear, frequent communication — always." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 80}>
                <div className="rounded-2xl glass-card p-6 h-full">
                  <div className="grid h-10 w-10 place-items-center rounded-lg gradient-primary text-primary-foreground">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <LeadershipSection />


      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl glass-card p-10 text-center shadow-card">
              <h2 className="text-3xl font-bold">Let's build something great together.</h2>
              <p className="mt-3 text-muted-foreground">Tell us your goals — we'll bring the talent and the tech.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" className="gradient-primary text-primary-foreground border-0">
                  <Link to="/contact">Start a Conversation</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
