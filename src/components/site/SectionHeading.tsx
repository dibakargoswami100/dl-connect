import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">{title}</h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}
