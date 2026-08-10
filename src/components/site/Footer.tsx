import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import logoAsset from "@/assets/dl-talent-logo.png.asset.json";

const services = [
  "Recruitment",
  "HR Solutions",
  "Virtual Assistance",
  "Customer Support",
  "AI Solutions",
  "Web Development",
];

export function Footer() {
  const [email, setEmail] = useState("");
  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }
    toast.success("Subscribed! We'll keep you posted.");
    setEmail("");
  };

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[46rem] -translate-x-1/2 rounded-full gradient-primary opacity-15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src= "/DL_Talent_500x500.png"
                alt="DL Talent & Technology"
                loading="lazy"
                decoding="async"
                className="h-9 w-9 rounded-xl object-contain"
              />
              <span className="font-display font-semibold">
                DL Talent <span className="text-gradient">& Technology</span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Talent. Technology. Growth. We help startups, SMEs and enterprises scale with elite
              talent and modern technology.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { href: "https://www.linkedin.com/company/dl-talent-technology-%E2%AD%90/?viewAsMember=true", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:dltalenttechnology@gmail.com", icon: Mail, label: "Email" },
                { href: "https://wa.me/919073599179", icon: MessageCircle, label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="group grid h-10 w-10 place-items-center rounded-xl glass-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-elegant"
                >
                  <s.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {[
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/careers", label: "Careers" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Services</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {services.map((s) => (
                <li key={s} className="transition-colors duration-300 hover:text-foreground">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Newsletter</h4>
            <p className="mt-5 text-sm text-muted-foreground">
              Hiring tips, AI insights and growth strategies — monthly.
            </p>
            <form onSubmit={onSubscribe} className="mt-5 flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="h-11 min-w-0 flex-1 rounded-full border border-border bg-background/60 px-4 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="inline-flex h-11 items-center gap-1 rounded-full gradient-primary px-4 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Join <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} DL Talent & Technology. All rights reserved.</p>
          <p>Built for ambitious teams worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
