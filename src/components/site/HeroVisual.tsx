import { ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const TechOrb = lazy(() => import("@/components/site/TechOrb"));

function OrbFallback() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="h-52 w-52 rounded-full gradient-primary opacity-25 blur-3xl animate-float" />
    </div>
  );
}

export function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[36rem] mx-auto">
      <div className="pointer-events-none absolute inset-8 rounded-full gradient-primary opacity-20 blur-[90px]" />
      <ClientOnly fallback={<OrbFallback />}>
        <Suspense fallback={<OrbFallback />}>
          <TechOrb />
        </Suspense>
      </ClientOnly>
    </div>
  );
}
