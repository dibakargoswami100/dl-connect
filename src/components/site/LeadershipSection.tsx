import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Linkedin, Mail, ArrowUpRight, CalendarDays, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import dibakarPhoto from "@/assets/dibakar-goswami.png.asset.json";

/* ---------- shared bits ---------- */

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="group/chip relative inline-flex items-center gap-1.5 rounded-full border border-border bg-card/40 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground hover:border-primary/50 hover:shadow-elegant">
      <span className="h-1.5 w-1.5 rounded-full gradient-primary opacity-70 transition-opacity group-hover/chip:opacity-100" />
      {children}
    </span>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card/40 text-muted-foreground backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:rotate-6 hover:text-primary hover:border-primary/60 hover:shadow-elegant"
    >
      {children}
    </a>
  );
}

/** Circular floating portrait with animated gradient ring + mouse parallax */
function Portrait({
  src,
  alt,
  initials,
  size = "lg",
}: {
  src?: string;
  alt: string;
  initials: string;
  size?: "lg" | "sm";
}) {
  const reduce = useReducedMotion();
  const wrap = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setT({ x: px * 18, y: py * 18 });
  };

  const dim = size === "lg" ? "h-64 w-64 sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem]" : "h-44 w-44";

  return (
    <div
      ref={wrap}
      onMouseMove={onMove}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
      className={`relative ${dim} shrink-0`}
      style={{ perspective: "1000px" }}
    >
      {/* soft rgb glow */}
      <div aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-primary/25 blur-[90px]" />
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-full bg-purple/25 blur-[70px]"
        style={{ animationDelay: "-4s" }}
      />

      {/* rotating gradient ring */}
      <div
        aria-hidden
        className="absolute -inset-3 rounded-full animate-spin-slow opacity-80"
        style={{
          background:
            "conic-gradient(from 0deg, var(--color-primary), var(--color-purple), var(--color-cyan), var(--color-primary))",
          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 0)",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 0)",
        }}
      />

      <motion.div
        className="relative h-full w-full rounded-full p-2 glass-panel shadow-elegant"
        animate={
          reduce
            ? undefined
            : { rotateY: t.x, rotateX: -t.y, y: [0, -10, 0] }
        }
        transition={{
          rotateY: { type: "spring", stiffness: 120, damping: 14 },
          rotateX: { type: "spring", stiffness: 120, damping: 14 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="h-full w-full overflow-hidden rounded-full bg-secondary">
          {src ? (
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className="grid h-full w-full place-items-center">
              <span className="text-5xl font-display font-bold text-gradient">{initials}</span>
            </div>
          )}
        </div>
      </motion.div>

      {/* floating glass orbs */}
      <div
        aria-hidden
        className="absolute -right-2 top-8 h-14 w-14 rounded-full glass-card animate-float"
      />
      <div
        aria-hidden
        className="absolute -left-4 bottom-12 h-9 w-9 rounded-full glass-card animate-float"
        style={{ animationDelay: "-2.5s" }}
      />
    </div>
  );
}

/* ---------- data ---------- */

const founder = {
  name: "Lata Bari",
  role: "Founder & CEO",
  bio: "Lata Bari leads DL Talent & Technology with a vision to bridge businesses with exceptional talent and innovative digital solutions. She focuses on strategic growth, client relationships, and building high-performing teams that help organizations scale efficiently.",
  linkedin: "https://www.linkedin.com/company/dl-talent-technology-%E2%AD%90/?viewAsMember=true",
  email: "dltalenttechnology@gmail.com",
  badges: [
    "Leadership",
    "Talent Acquisition",
    "Business Strategy",
    "Client Relations",
    "Workforce Solutions",
  ],
};

const cofounder = {
  name: "Dibakar Goswami",
  role: "Co-Founder & Operations Lead",
  bio: "Dibakar Goswami oversees operations, recruitment delivery, technology initiatives and business development at DL Talent & Technology. He combines recruitment expertise with technical knowledge to deliver scalable workforce and digital solutions for startups and growing businesses.",
  linkedin: "https://www.linkedin.com/in/dibakar-goswami-62910327a",
  email: "dltalenttechnology@gmail.com",
  photo: dibakarPhoto.url,
  badges: ["Operations", "Recruitment", "Technology", "Business Development", "Web Solutions"],
};

/* ---------- section ---------- */

export function LeadershipSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* animated mesh / aurora backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-10 h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-[130px] animate-aurora" />
        <div
          className="absolute right-[-8%] bottom-0 h-[28rem] w-[28rem] rounded-full bg-purple/20 blur-[130px] animate-aurora"
          style={{ animationDelay: "-9s" }}
        />
        <div className="absolute inset-0 grid-overlay opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <Reveal direction="blur">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5" /> Our Leadership
            </span>
            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Meet the <span className="text-gradient">Leadership</span>
            </h2>
            <p className="mt-5 max-w-[550px] text-lg text-muted-foreground leading-relaxed">
              Building the future of Talent & Technology with innovation, trust and excellence.
            </p>
          </div>
        </Reveal>

        {/* Founder — feature split (60/40 visual weight) */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-12">
          <Reveal direction="scale" className="lg:col-span-5 flex justify-center">
            <Portrait alt={founder.name} initials="LB" />
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal delay={100} direction="blur">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gradient">
                {founder.role}
              </p>
              <h3 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">{founder.name}</h3>
              <p className="mt-6 max-w-[550px] text-base sm:text-lg text-muted-foreground leading-relaxed">
                {founder.bio}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {founder.badges.map((b) => (
                  <Chip key={b}>{b}</Chip>
                ))}
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground gradient-primary animate-gradient-pan shadow-elegant transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Linkedin className="h-4 w-4" /> Connect on LinkedIn
                </a>
                <a
                  href={`mailto:${founder.email}`}
                  className="group inline-flex items-center gap-2 rounded-full glass-card px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-elegant"
                >
                  <CalendarDays className="h-4 w-4" /> Schedule Meeting
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <div className="flex items-center gap-2 sm:ml-2">
                  <SocialIcon href={founder.linkedin} label="LinkedIn">
                    <Linkedin className="h-4.5 w-4.5" />
                  </SocialIcon>
                  <SocialIcon href={`mailto:${founder.email}`} label="Email">
                    <Mail className="h-4.5 w-4.5" />
                  </SocialIcon>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Co-founder — elegant side row */}
        <Reveal delay={120} direction="up" className="mt-20">
          <div className="relative overflow-hidden rounded-[2rem] glass-panel p-8 sm:p-10 shadow-card">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple/20 blur-[100px]"
            />
            <div className="relative flex flex-col items-center gap-10 md:flex-row md:items-center">
              <Portrait src={cofounder.photo} alt={cofounder.name} initials="DG" size="sm" />
              <div className="min-w-0 flex-1 text-center md:text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gradient">
                  {cofounder.role}
                </p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">
                  {cofounder.name}
                </h3>
                <p className="mt-4 max-w-[550px] text-sm sm:text-base text-muted-foreground leading-relaxed md:mx-0 mx-auto">
                  {cofounder.bio}
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2.5 md:justify-start">
                  {cofounder.badges.map((b) => (
                    <Chip key={b}>{b}</Chip>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-2 md:justify-start">
                  <SocialIcon href={cofounder.linkedin} label="LinkedIn">
                    <Linkedin className="h-4.5 w-4.5" />
                  </SocialIcon>
                  <SocialIcon href={`mailto:${cofounder.email}`} label="Email">
                    <Mail className="h-4.5 w-4.5" />
                  </SocialIcon>
                  <a
                    href={cofounder.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="ml-1 inline-flex items-center gap-2 rounded-full glass-card px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-elegant"
                  >
                    View Profile
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
