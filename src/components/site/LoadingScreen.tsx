import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(8);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let value = 8;
    const id = window.setInterval(() => {
      value = Math.min(100, value + Math.random() * 22);
      setProgress(value);
      if (value >= 100) {
        window.clearInterval(id);
        window.setTimeout(() => setDone(true), 420);
      }
    }, 160);
    return () => window.clearInterval(id);
  }, []);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-500 ${
        progress >= 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative grid h-20 w-20 place-items-center">
          <div className="absolute inset-0 rounded-2xl gradient-primary blur-xl opacity-70 animate-float" />
          <div className="relative grid h-20 w-20 place-items-center rounded-2xl glass-card">
            <span className="font-display text-2xl font-bold text-gradient">DL</span>
          </div>
        </div>
        <div className="h-[3px] w-56 overflow-hidden rounded-full bg-border">
          <div
            className="h-full gradient-primary transition-[width] duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">Talent · Technology · Growth</p>
      </div>
    </div>
  );
}
