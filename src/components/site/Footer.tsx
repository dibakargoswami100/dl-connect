import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import logoAsset from "@/assets/dl-talent-logo.png.asset.json";

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
    <footer className="mt-20 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img
                src={logoAsset.url}
                alt="DL Talent & Technology"
                loading="lazy"
                decoding="async"
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg object-contain"
              />
              <span className="font-display font-semibold">DL Talent & Technology</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Connecting Talent. Delivering Technology. Driving Growth — for startups and growing businesses worldwide.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href="https://www.linkedin.com/company/dl-talent-technology-%E2%AD%90/?viewAsMember=true" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-md border border-border hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="mailto:dltalenttechnology@gmail.com" aria-label="Email" className="grid h-9 w-9 place-items-center rounded-md border border-border hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4" />
              </a>
              <a href="https://wa.me/919073599179" target="_blank" rel="noreferrer noopener" aria-label="WhatsApp" className="grid h-9 w-9 place-items-center rounded-md border border-border hover:bg-primary hover:text-primary-foreground transition-colors">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/careers" className="hover:text-foreground">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Recruitment & Hiring</li>
              <li>Virtual Assistance</li>
              <li>Customer Support</li>
              <li>Web Development</li>
              <li>Content & Tech Writing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm">Newsletter</h4>
            <p className="mt-4 text-sm text-muted-foreground">
              Hiring tips, productivity insights, and growth strategies — monthly.
            </p>
            <form onSubmit={onSubscribe} className="mt-4 flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 min-w-0 h-10 rounded-md border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
              <button type="submit" className="h-10 px-3 rounded-md gradient-primary text-primary-foreground inline-flex items-center gap-1 text-sm font-medium">
                Join <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} DL Talent & Technology. All rights reserved.</p>
          <p>Built with care for ambitious teams.</p>
        </div>
      </div>
    </footer>
  );
}
