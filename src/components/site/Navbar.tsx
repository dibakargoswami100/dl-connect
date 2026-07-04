import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/dl-talent-logo.png.asset.json";
import { ThemeToggle } from "@/components/site/ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/careers", label: "Careers" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled ? "glass-card shadow-card" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logoAsset.url}
            alt="DL Talent & Technology"
            className="h-10 w-auto shrink-0 rounded-lg"
          />
          <div className="min-w-0">
            <div className="font-display font-semibold text-sm sm:text-base leading-tight truncate">
              DL Talent & Technology
            </div>
            <div className="text-[10px] sm:text-xs text-muted-foreground leading-tight hidden sm:block">
              Talent. Technology. Growth.
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-md"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Button asChild variant="default" className="gradient-primary text-primary-foreground border-0 shadow-elegant hover:opacity-95">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary"
                activeProps={{ className: "text-primary bg-secondary" }}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="w-full mt-2 gradient-primary text-primary-foreground border-0">
              <Link to="/contact" onClick={() => setOpen(false)}>Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
