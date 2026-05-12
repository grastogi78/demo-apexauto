import { SectionHeader } from "./Services";
import enclosureImg from "@/assets/enclosure-build.jpg";
import carplayInstallImg from "@/assets/carplay-dash.jpg";
import jeepLightingImg from "@/assets/jeep-night.jpg";

type RecentBuild = {
  label: string;
  name: string;
  tags: string[];
  desc: string;
  image?: string;
  alt?: string;
};

const RECENT: RecentBuild[] = [
  {
    label: "Custom Audio",
    name: "Sony CarPlay Integration",
    tags: ["DASH INTEGRATION", "OEM+ FIT"],
    desc: "A clean touchscreen retrofit with factory controls, climate layout, and daily usability preserved.",
    image: carplayInstallImg,
    alt: "Premium touchscreen integration inside a vehicle dash",
  },
  {
    label: "Fabrication",
    name: "Mercedes-AMG G63",
    tags: ["CNC MACHINED", "REF-LEVEL"],
    desc: "Burmester-replacement system with hand-wired passive crossovers and custom machined tweeter pods.",
  },
  {
    label: "Multi-System",
    name: "Jeep Wrangler Lighting",
    tags: ["RIGID LIGHTING", "SHOP BUILD"],
    desc: "Auxiliary lighting planned with clean routing, weatherproof connections, and a finished visual profile.",
    image: jeepLightingImg,
    alt: "Cinematic Jeep lighting build",
  },
];

export function Builds() {
  return (
    <section id="builds" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
        <SectionHeader
          eyebrow="Custom Builds"
          title="Recent builds"
          right="A fictional selection of premium vehicle integration concepts."
        />

        <div className="mt-12 grid lg:grid-cols-12 gap-3">
          {/* Hero build card */}
          <div className="lg:col-span-7 panel panel-line relative overflow-hidden min-h-[480px] group">
            <img
              src={enclosureImg}
              alt="Custom subwoofer enclosure build"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
            <div className="absolute top-5 left-5">
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase bg-background/70 backdrop-blur px-2 py-1 border border-border text-muted-foreground">
                CUSTOM AUDIO · PORSCHE
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <div className="font-mono text-xs text-ignition tracking-widest">911 GT3 · STAGE III</div>
              <h3 className="mt-2 font-display font-bold uppercase tracking-wide text-2xl lg:text-3xl">
                Signature Audio Build
              </h3>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">
                12-channel amplification, custom mid-bass enclosures integrated into the lower door cards,
                and full active DSP with acoustic treatment.
              </p>
              <a href="#contact-form" className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase text-ignition hover:gap-3 transition-all">
                Talk About Your Build →
              </a>
            </div>
          </div>

          {/* Recent build cards */}
          <div className="lg:col-span-5 grid gap-3">
            {RECENT.map((b) => (
              <article
                key={b.name}
                className={`panel group hover:border-border/60 transition relative overflow-hidden ${
                  b.image ? "grid sm:grid-cols-[170px_1fr] min-h-[210px] sm:min-h-0" : "p-5 lg:p-6"
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ignition/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
                {b.image && (
                  <div className="relative min-h-[150px] sm:min-h-full overflow-hidden border-b sm:border-b-0 sm:border-r border-border/60">
                    <img
                      src={b.image}
                      alt={b.alt ?? b.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface/45 via-transparent to-transparent" />
                  </div>
                )}
                <div className={b.image ? "p-5 lg:p-6" : ""}>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-mono text-[11px] tracking-[0.22em] text-muted-foreground uppercase">{b.label}</div>
                      <h4 className="mt-1.5 font-display font-bold uppercase tracking-wide text-base">
                        {b.name}
                      </h4>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {b.tags.map((t) => (
                      <span key={t} className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground border border-border/60 px-2 py-1">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
