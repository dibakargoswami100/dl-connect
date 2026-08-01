import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export function GlowButton({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  type = "button",
  disabled,
  onClick,
}: Props) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 will-change-transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:pointer-events-none";

  const inner =
    variant === "primary"
      ? "gradient-primary animate-gradient-pan text-primary-foreground shadow-elegant hover:shadow-[0_20px_60px_-16px_var(--color-primary)]"
      : "glass-card text-foreground hover:border-primary/60 hover:shadow-elegant";

  const content = (
    <>
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-[1.5px] -z-10 rounded-full opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100 gradient-primary animate-gradient-pan"
      />
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </>
  );

  const cls = `${base} ${inner} ${className}`;

  if (to) return <Link to={to} className={cls}>{content}</Link>;
  if (href)
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={cls}>
        {content}
      </a>
    );
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={cls}>
      {content}
    </button>
  );
}
