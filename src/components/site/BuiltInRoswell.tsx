import jeepOutsideStore from "@/assets/ogimages/Jeep outside store.webp";
import decalOnJeep from "@/assets/ogimages/SoundMaster Decal on Jeep.webp";

const PROOF_CARDS = [
  { label: "Roswell Since 2013", detail: "Over a decade serving North Atlanta drivers" },
  { label: "Clean Wiring", detail: "No hacked harnesses, no shortcuts, no comebacks" },
  { label: "OEM-Grade Fitment", detail: "Installs that look and feel factory" },
  { label: "Built Around You", detail: "Every system is designed for your vehicle and goals" },
];

export function BuiltInRoswell() {
  return (
    <section className="py-20 lg:py-28 border-t border-border">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Content */}
          <div className="lg:col-span-6 lg:pt-2">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-ignition" />
              <span className="label-mono-ignition">Roswell, GA · Est. 2013</span>
            </div>

            <h2 className="display-h2 mt-5">
              Built in Roswell.<br />
              <span className="text-ignition">Built Right.</span>
            </h2>

            <p className="mt-6 text-muted-foreground text-sm lg:text-base leading-relaxed">
              For more than a decade, Sound Master has helped Roswell and North Atlanta
              drivers upgrade the way their vehicles sound, feel, and function.
            </p>
            <p className="mt-4 text-muted-foreground text-sm lg:text-base leading-relaxed">
              Every build starts with the vehicle, the driver, and the goal. No hacked
              wiring. No destructive installs. No shortcuts. Just clean integration,
              careful fitment, and systems built like they belong there.
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

          {/* Imagery */}
          <div className="lg:col-span-6 space-y-3">
            {/* Main photo — Jeep outside the store */}
            <div className="panel panel-line overflow-hidden relative aspect-[4/3]">
              <img
                src={jeepOutsideStore}
                alt="Jeep parked outside Sound Master in Roswell, GA"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase bg-background/70 backdrop-blur px-2 py-1 border border-border text-muted-foreground">
                  Sound Master · Roswell, GA
                </span>
              </div>
            </div>

            {/* Secondary photo — decal */}
            <div className="panel panel-line overflow-hidden relative aspect-[16/7]">
              <img
                src={decalOnJeep}
                alt="Sound Master decal on a Jeep build"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase bg-background/75 backdrop-blur-sm px-2 py-1 border border-border text-muted-foreground">
                  Trusted by Roswell, Alpharetta &amp; North Atlanta drivers
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
