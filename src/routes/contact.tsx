import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Linkedin, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Reveal } from "@/components/site/Reveal";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DL Talent & Technology" },
      { name: "description", content: "Get in touch with DL Talent & Technology for recruitment, virtual assistance, support and web development." },
      { property: "og:title", content: "Contact DL Talent & Technology" },
      { property: "og:description", content: "Reach our team via email, LinkedIn or WhatsApp." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const services = [
  "Recruitment & Hiring", "HR Support", "Virtual Assistance",
  "Customer Support", "Data Entry", "Email Marketing",
  "Technical Writing", "Content Writing", "Web Development", "Other",
];

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  service: z.string().min(1, "Please pick a service"),
  message: z.string().trim().min(10, "Please add a short message").max(1000),
});

function ContactPage() {
  const [service, setService] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      company: String(fd.get("company") || ""),
      service,
      message: String(fd.get("message") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message || "Please review the form");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      company: parsed.data.company || null,
      service: parsed.data.service,
      message: parsed.data.message,
    });
    setSubmitting(false);
    if (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
      return;
    }
    toast.success("Thanks! We'll get back to you within 1 business day.");
    form.reset();
    setService("");
  };

  return (
    <div>
      <section className="hero-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <Reveal>
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary">Contact</span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold max-w-3xl">
              Let's talk <span className="text-gradient">talent & technology.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Tell us about your project or hiring needs. Our team will reach out within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.4fr_1fr] gap-8">
          <Reveal>
            <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-card space-y-5">
              <h2 className="text-2xl font-bold">Send us a message</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" name="name" required maxLength={100} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required maxLength={255} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" maxLength={20} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" name="company" maxLength={100} />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Service Required *</Label>
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger><SelectValue placeholder="Choose a service" /></SelectTrigger>
                    <SelectContent>
                      {services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" name="message" rows={5} maxLength={1000} placeholder="A few lines about your goals, team size, timeline..." />
                </div>
              </div>
              <Button type="submit" size="lg" disabled={submitting} className="w-full gradient-primary text-primary-foreground border-0">
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-5">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
                <h3 className="font-display font-semibold text-lg">Contact information</h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-muted-foreground">Email</div>
                      <a href="mailto:dltalenttechnology@gmail.com" className="font-medium hover:text-primary">dltalenttechnology@gmail.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Linkedin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-muted-foreground">LinkedIn</div>
                      <a href="https://www.linkedin.com/company/dl-talent-technology-%E2%AD%90/?viewAsMember=true" target="_blank" rel="noreferrer noopener" className="font-medium hover:text-primary">DL Talent & Technology</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-muted-foreground">WhatsApp</div>
                      <a href="https://wa.me/919073599179" target="_blank" rel="noreferrer noopener" className="font-medium hover:text-primary">Chat with us</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-muted-foreground">Working hours</div>
                      <div className="font-medium">Mon – Sun · 9:00 – 22:00 IST</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-muted-foreground">Serving</div>
                      <div className="font-medium">Clients globally · Remote-first</div>
                    </div>
                  </li>
                </ul>
              </div>

              <a href="https://wa.me/919073599179" target="_blank" rel="noreferrer noopener" className="block rounded-3xl gradient-primary p-6 text-primary-foreground shadow-elegant hover:opacity-95 transition-opacity">
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-6 w-6" />
                  <div className="font-display font-semibold">Chat on WhatsApp</div>
                </div>
                <p className="mt-2 text-sm opacity-90">Quick questions? Get an instant reply on WhatsApp.</p>
              </a>

              <div className="rounded-3xl border border-border overflow-hidden shadow-card">
                <iframe
                  title="Office location"
                  src="https://www.google.com/maps?q=Bangalore&output=embed"
                  className="w-full h-64 border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
