import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Linkedin, Mail, ArrowUpRight, CalendarDays, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import dibakarPhoto from "@/assets/dibakar-goswami.png.asset.json";
import lataPhoto from "@/assets/lata-bari.png.asset.json";

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
function Portrait({ src, alt, initials }: { src?: string; alt: string; initials: string }) {
  const reduce = useReducedMotion();
  const wrap = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setT({
      x: ((e.clientX - r.left) / r.width - 0.5) * 18,
      y: ((e.clientY - r.top) / r.height - 0.5) * 18,
    });
  };

  return (
    <div
      ref={wrap}
      onMouseMove={onMove}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
      className="relative h-64 w-64 shrink-0 sm:h-80 sm:w-80 lg:h-[24rem] lg:w-[24rem]"
      style={{ perspective: "1000px" }}
    >
      <div aria-hidden className="absolute -inset-10 -z-10 rounded-full bg-primary/25 blur-[90px]" />
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-full bg-purple/25 blur-[70px]"
        style={{ animationDelay: "-4s" }}
      />

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
        animate={reduce ? undefined : { rotateY: t.x, rotateX: -t.y, y: [0, -10, 0] }}
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

      <div aria-hidden className="absolute -right-2 top-8 h-14 w-14 rounded-full glass-card animate-float" />
      <div
        aria-hidden
        className="absolute -left-4 bottom-12 h-9 w-9 rounded-full glass-card animate-float"
        style={{ animationDelay: "-2.5s" }}
      />
    </div>
  );
}

/* ---------- data ---------- */

type Leader = {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  email: string;
  photo?: string;
  initials: string;
  badges: string[];
};

const leaders: Leader[] = [
  {
    name: "Dibakar Goswami",
    role: "Founder & CEO",
    bio: "Dibakar Goswami is the Founder & CEO of DL Talent & Technology. He leads the company's vision, business strategy, operations, and technology initiatives. With expertise in talent acquisition, recruitment operations, business development, and digital solutions, he is committed to helping startups, SMEs, and enterprises build high-performing teams and scalable business solutions through innovation, efficiency, and technology.",
    linkedin: "https://www.linkedin.com/in/dibakar-goswami-62910327a",
    email: "dltalenttechnology@gmail.com",
    photo: dibakarPhoto.url,
    initials: "DG",
    badges: [
      "Leadership",
      "Business Strategy",
      "Talent Acquisition",
      "Recruitment Operations",
      "Technology Solutions",
      "Business Development",
    ],
  },
  {
    name: "Lata Bari",
    role: "Co-Founder",
    bio: "Lata Bari is the Co-Founder of DL Talent & Technology and plays a key role in client relationship management, recruitment coordination, workforce solutions, and organizational growth. She focuses on delivering exceptional hiring experiences, building long-term client partnerships, and ensuring operational excellence across recruitment and HR services.",
    linkedin:
      "https://www.linkedin.com/company/dl-talent-technology-%E2%AD%90/?viewAsMember=true",
    email: "dltalenttechnology@gmail.com",
    photo: lataPhoto.url,
    initials: "LB",
    badges: [
      "Client Relations",
      "Recruitment",
      "HR Solutions",
      "Workforce Planning",
      "Team Coordination",
      "Business Growth",
    ],
  },
];

/* ---------- one shared premium profile ---------- */

function LeaderProfile({ leader, flip }: { leader: Leader; flip?: boolean }) {
  return (
    <Reveal direction="up">
      <div className="relative overflow-hidden rounded-[2.5rem] glass-panel p-8 shadow-card sm:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple/20 blur-[100px]"
        />
        <div
          className={`relative flex flex-col items-center gap-12 lg:items-center ${
            flip ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          <Portrait src={leader.photo} alt={leader.name} initials={leader.initials} />

          <div className="min-w-0 flex-1 text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gradient">
              {leader.role}
            </p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{leader.name}</h3>
            <p className="mx-auto mt-6 max-w-[560px] text-base leading-relaxed text-muted-foreground lg:mx-0">
              {leader.bio}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-2.5 lg:justify-start">
              {leader.badges.map((b) => (
                <Chip key={b}>{b}</Chip>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground gradient-primary animate-gradient-pan shadow-elegant transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Linkedin className="h-4 w-4" /> Connect on LinkedIn
              </a>
              <a
                href={`mailto:${leader.email}`}
                className="group inline-flex items-center gap-2 rounded-full glass-card px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-elegant"
              >
                <CalendarDays className="h-4 w-4" /> Schedule a Meeting
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <div className="flex items-center gap-2 sm:ml-2">
                <SocialIcon href={leader.linkedin} label={`${leader.name} on LinkedIn`}>
                  <Linkedin className="h-4.5 w-4.5" />
                </SocialIcon>
                <SocialIcon href={`mailto:${leader.email}`} label={`Email ${leader.name}`}>
                  <Mail className="h-4.5 w-4.5" />
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ---------- section ---------- */

export function LeadershipSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-10 h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-[130px] animate-aurora" />
        <div
          className="absolute right-[-8%] bottom-0 h-[28rem] w-[28rem] rounded-full bg-purple/20 blur-[130px] animate-aurora"
          style={{ animationDelay: "-9s" }}
        />
        <div className="absolute inset-0 grid-overlay opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="blur">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5" /> Our Leadership
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Meet the <span className="text-gradient">Leadership</span>
            </h2>
            <p className="mt-5 max-w-[550px] text-lg leading-relaxed text-muted-foreground">
              Building the future of Talent & Technology with innovation, trust and excellence.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-12">
          {leaders.map((l, i) => (
            <LeaderProfile key={l.name} leader={l} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
