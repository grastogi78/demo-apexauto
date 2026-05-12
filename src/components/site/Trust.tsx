import { Award, Wrench, Shield, Heart } from "lucide-react";

const ITEMS = [
  {
    icon: Award,
    k: "Over a Decade",
    v: "Serving Roswell and metro Atlanta since 2013",
  },
  {
    icon: Wrench,
    k: "Hand-Crafted Installs",
    v: "Every build is measured, fabricated, and tuned in-house",
  },
  {
    icon: Shield,
    k: "Workmanship Warranty",
    v: "We stand behind every installation we complete",
  },
  {
    icon: Heart,
    k: "Enthusiast-Owned",
    v: "We treat your vehicle with the same care we give our own",
  },
];

export function Trust() {
  return (
    <section className="relative border-y border-border bg-surface-2/40">
      <div className="absolute inset-x-0 top-0 h-px scan-line" />
      <div className="mx-auto max-w-[1320px] px-5 lg:px-10 py-10 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-border">
        {ITEMS.map(({ icon: Icon, k, v }) => (
          <div key={k} className="flex items-start gap-3 lg:px-8 first:lg:pl-0 last:lg:pr-0">
            <div className="w-9 h-9 shrink-0 grid place-items-center border border-border bg-surface-3/60">
              <Icon className="w-4 h-4 text-ignition" />
            </div>
            <div>
              <div className="font-display font-bold text-sm tracking-wide text-foreground uppercase">
                {k}
              </div>
              <div className="text-xs text-muted-foreground mt-1 leading-snug">{v}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
