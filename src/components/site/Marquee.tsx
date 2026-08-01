export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-4">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="glass-card rounded-full px-6 py-3 text-sm font-medium text-muted-foreground whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
