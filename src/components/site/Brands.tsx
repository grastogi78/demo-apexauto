import { ArrowRight } from "lucide-react";

const ECOSYSTEM = [
  {
    category: "Audio & Sound",
    descriptor:
      "From daily clarity to high-output bass, we help choose the right speakers, amplifiers, subs, and tuning path.",
    brands: ["Alpine", "JL Audio", "Hertz", "Kicker", "Polk Audio", "MMATS", "MTX"],
  },
  {
    category: "Vehicle Integration",
    descriptor:
      "Factory-style upgrades, CarPlay, Android Auto, steering controls, and clean OEM-style integration.",
    brands: ["Pioneer", "Kenwood", "JVC", "Alpine Restyle", "Android Auto", "iDatalink"],
  },
  {
    category: "Security & Remote Start",
    descriptor:
      "Remote start, alarm systems, smart control, and vehicle-specific security integration.",
    brands: ["Viper", "Python", "Clifford", "Flashlogic"],
  },
  {
    category: "Lighting & Accessories",
    descriptor:
      "Lighting and utility upgrades for Jeeps, trucks, and drivers who need visibility and function.",
    brands: ["Rigid Industries"],
  },
];

const MARQUEE_BRANDS = [
  "Alpine", "JL Audio", "Hertz", "Focal", "Kicker", "Polk Audio",
  "Pioneer", "Kenwood", "JVC", "Viper", "Python", "Clifford",
  "MMATS", "MTX", "Rigid Industries", "iDatalink", "Flashlogic", "Jensen",
];

export function Brands() {
  return (
    <section id="brands" className="py-20 lg:py-24 border-t border-border bg-surface-2/30 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px scan-line" />
      <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-start">

          {/* Left — heading + copy + CTA */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-ignition" />
              <span className="label-mono-ignition">Brands We Work With</span>
            </div>
            <h2 className="display-h2 mt-4">The Gear Behind<br />the Build</h2>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-sm">
              We work with trusted names in car audio, security, lighting, and vehicle
              integration, then recommend the right fit based on your vehicle, goals,
              and budget.
            </p>
            <a
              href="/brands"
              className="group mt-7 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase font-semibold text-muted-foreground hover:text-ignition transition"
            >
              Explore The Gear
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right — compact ecosystem cards */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
            {ECOSYSTEM.map((cat) => (
              <div
                key={cat.category}
                className="panel relative p-5 group hover:border-border/60 transition overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-ignition/0 group-hover:bg-ignition/40 transition" />
                <div className="label-mono !text-[10px] !tracking-[0.2em]">{cat.category}</div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {cat.descriptor}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cat.brands.map((b) => (
                    <span
                      key={b}
                      className="font-mono text-[10px] tracking-[0.1em] uppercase px-2 py-0.5 bg-surface-3/80 border border-border/60 text-muted-foreground/80 transition-all duration-200 hover:text-ignition hover:border-ignition/25 hover:-translate-y-px cursor-default"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Marquee — brands turn orange on individual hover */}
        <div className="mt-10 relative overflow-hidden border-t border-border/40 pt-5">
          <div className="flex gap-10 marquee-track whitespace-nowrap" aria-hidden>
            {[...MARQUEE_BRANDS, ...MARQUEE_BRANDS].map((b, i) => (
              <span
                key={i}
                className="font-display font-extrabold uppercase tracking-[0.1em] text-sm text-foreground/20 shrink-0 hover:text-ignition/80 transition-colors duration-200 cursor-default"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
