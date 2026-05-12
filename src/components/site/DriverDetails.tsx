import installBayImg from "@/assets/install-bay.jpg";
import tuningLabImg from "@/assets/tuning-lab.jpg";

const PROOF_CARDS = [
  { label: "Studio Concept", detail: "A fictional brand system for portfolio demonstration" },
  { label: "Clean Wiring", detail: "No hacked harnesses, no shortcuts, no loose ends" },
  { label: "OEM-Grade Fitment", detail: "Installs that look and feel factory" },
  { label: "Built Around You", detail: "Every system is designed for the vehicle and driver" },
];

export function DriverDetails() {
  return (
    <section className="py-20 lg:py-28 border-t border-border">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          <div className="lg:col-span-6 lg:pt-2">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-ignition" />
              <span className="label-mono-ignition">Detail-Led Integration</span>
            </div>

            <h2 className="display-h2 mt-5">
              Built for drivers who<br />
              <span className="text-ignition">notice the details.</span>
            </h2>

            <p className="mt-6 text-muted-foreground text-sm lg:text-base leading-relaxed">
              Apex Auto Sound is a fictional premium studio concept for custom vehicle
              audio, lighting, security, and integration work.
            </p>
            <p className="mt-4 text-muted-foreground text-sm lg:text-base leading-relaxed">
              Every build starts with the vehicle, the driver, and the goal. The result
              is clean integration, careful fitment, and systems built like they belong there.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-px bg-border">
              {PROOF_CARDS.map((c) => (
                <div key={c.label} className="bg-background p-5 lg:p-6">
                  <div className="font-display font-bold uppercase tracking-wide text-sm text-foreground">
                    {c.label}
                  </div>
                  <div className="mt-1.5 text-xs text-muted-foreground leading-snug">
                    {c.detail}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact-form"
              className="group mt-8 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase font-semibold text-muted-foreground hover:text-ignition transition"
            >
              Talk About Your Build
              <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
            </a>
          </div>

          <div className="lg:col-span-6 space-y-3">
            <div className="panel panel-line overflow-hidden relative aspect-[4/3]">
              <img
                src={installBayImg}
                alt="Premium vehicle installation bay"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase bg-background/70 backdrop-blur px-2 py-1 border border-border text-muted-foreground">
                  Premium Studio Workflow
                </span>
              </div>
            </div>

            <div className="panel panel-line overflow-hidden relative aspect-[16/7]">
              <img
                src={tuningLabImg}
                alt="Audio tuning and vehicle integration workspace"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase bg-background/75 backdrop-blur-sm px-2 py-1 border border-border text-muted-foreground">
                  Portfolio demo concept by easini LABS
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
