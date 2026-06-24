import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Info, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Reveal } from "@/components/site/Reveal";
import { toast } from "sonner";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — DL Talent & Technology" },
      { name: "description", content: "Join our talent network. We'll keep your profile on file for future opportunities." },
      { property: "og:title", content: "Careers — DL Talent & Technology" },
      { property: "og:description", content: "Submit your profile for upcoming opportunities at DL." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const positions = [
  "HR Recruiter", "Talent Acquisition Associate", "Virtual Assistant",
  "Customer Support Executive", "Data Entry Specialist", "Content Writer",
  "Technical Writer", "Web Developer", "Administrative Assistant",
  "Executive Assistant", "Other",
];

const schema = z.object({
  fullName: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(6, "Phone is required").max(20),
  location: z.string().trim().min(2, "Location is required").max(100),
  qualification: z.string().trim().min(2, "Qualification is required").max(100),
  experience: z.string().trim().min(1, "Required").max(20),
  position: z.string().min(1, "Select a position"),
  linkedin: z.string().trim().max(255).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

function CareersPage() {
  const [position, setPosition] = useState("");
  const [resumeName, setResumeName] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      fullName: String(fd.get("fullName") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      location: String(fd.get("location") || ""),
      qualification: String(fd.get("qualification") || ""),
      experience: String(fd.get("experience") || ""),
      position,
      linkedin: String(fd.get("linkedin") || ""),
      message: String(fd.get("message") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message || "Please review the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Profile submitted! We'll be in touch for future opportunities.");
      (e.target as HTMLFormElement).reset();
      setPosition("");
      setResumeName("");
    }, 800);
  };

  return (
    <div>
      {/* Hero */}
      <section className="hero-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <Reveal>
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary">Careers</span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold max-w-3xl">
              Join Our <span className="text-gradient">Talent Network</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              We're always meeting great people. Even when hiring is closed, your profile helps us
              reach out the moment the right opportunity opens up.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Notice + Form */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-start gap-3 rounded-2xl border border-primary/30 bg-primary/5 p-5">
              <Info className="h-5 w-5 mt-0.5 text-primary shrink-0" />
              <div>
                <div className="font-display font-semibold">Hiring is currently closed</div>
                <p className="text-sm text-muted-foreground mt-1">
                  We encourage interested candidates to submit their profiles for future opportunities.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={onSubmit} className="mt-8 rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-card space-y-6">
              <h2 className="text-2xl font-bold">Candidate Registration</h2>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input id="fullName" name="fullName" required maxLength={100} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" name="email" type="email" required maxLength={255} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" name="phone" type="tel" required maxLength={20} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Current Location *</Label>
                  <Input id="location" name="location" required maxLength={100} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="qualification">Highest Qualification *</Label>
                  <Input id="qualification" name="qualification" required maxLength={100} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience *</Label>
                  <Input id="experience" name="experience" required maxLength={20} placeholder="e.g. 3 years" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Desired Position *</Label>
                  <Select value={position} onValueChange={setPosition}>
                    <SelectTrigger><SelectValue placeholder="Select a role" /></SelectTrigger>
                    <SelectContent>
                      {positions.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="resume">Resume Upload</Label>
                  <label htmlFor="resume" className="flex items-center gap-3 rounded-md border border-dashed border-border bg-secondary/40 px-4 py-3 cursor-pointer hover:bg-secondary transition-colors">
                    <Upload className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {resumeName || "Click to upload PDF, DOC or DOCX"}
                    </span>
                    <input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="sr-only"
                      onChange={(e) => setResumeName(e.target.files?.[0]?.name || "")}
                    />
                  </label>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <Input id="linkedin" name="linkedin" type="url" maxLength={255} placeholder="https://linkedin.com/in/..." />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message">Cover Message</Label>
                  <Textarea id="message" name="message" maxLength={1000} rows={5} placeholder="Tell us briefly why you'd be a great fit." />
                </div>
              </div>

              <Button type="submit" size="lg" disabled={submitting} className="w-full gradient-primary text-primary-foreground border-0">
                {submitting ? "Submitting..." : "Submit Your Profile"}
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
