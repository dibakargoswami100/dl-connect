export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      {/* animated aurora blobs */}
      <div className="absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full bg-primary/25 blur-[120px] animate-aurora" />
      <div
        className="absolute top-1/4 -right-40 h-[34rem] w-[34rem] rounded-full bg-purple/25 blur-[130px] animate-aurora"
        style={{ animationDelay: "-7s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-cyan/15 blur-[120px] animate-aurora"
        style={{ animationDelay: "-14s" }}
      />

      {/* grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* noise */}
      <div
        className="absolute inset-0 opacity-[0.16] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
