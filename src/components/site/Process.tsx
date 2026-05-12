import { SectionHeader } from "./Services";
import tuningImg from "@/assets/tuning-lab.jpg";

const STEPS = [
  {
    n: "01",
    t: "Consultation",
    d: "We listen first. Your vehicle, your goals, your daily drive. Every build starts here.",
  },
  {
    n: "02",
    t: "Design",
    d: "Vehicle-specific planning for audio layout, integration points, and component selection.",
  },
  {
    n: "03",
    t: "Fabrication",
    d: "Custom enclosures, brackets, and panels: CNC-cut and hand-finished to fit your exact chassis.",
  },
  {
    n: "04",
    t: "Installation",
    d: "Sound-deadened, OEM-routed wiring. Clean installs with zero rattles and zero compromise.",
  },
  {
    n: "05",
    t: "Tuning & Calibration",
    d: "DSP calibration, system verification, and a listening session to confirm every detail is right.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-20 lg:py-28 border-t border-border">
      <div className="absolute inset-0 -z-10">
        <img src={tuningImg} alt="" loading="lazy" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>
      <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
        <SectionHeader
          eyebrow="Our Process"
          title="From vision to vehicle"
          right="Clean installs, OEM standards. No destructive modifications. Ever."
        />
        <div className="mt-12 grid lg:grid-cols-5 gap-3">
          {STEPS.map((s, i) => (
            <div key={s.n} className="panel relative p-6 group hover:border-border/60 transition">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/60 to-transparent opacity-60 group-hover:via-ignition/50 group-hover:opacity-100 transition" />
              <div className="font-mono text-[11px] tracking-[0.22em] text-ignition">PHASE {s.n}</div>
              <div className="mt-4 font-display font-bold uppercase tracking-wide text-lg">
                {s.t}
              </div>
              <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</div>
              <div className="mt-6 flex items-center gap-2 label-mono">
                <span>STEP</span>
                <span
                  className="flex-1 telemetry-bar"
                  style={
                    {
                      "--p": String(0.2 * (i + 1)),
                      "--ignition": "var(--aluminum)",
                    } as React.CSSProperties
                  }
                />
                <span className="text-foreground font-mono">{(i + 1)}/5</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
