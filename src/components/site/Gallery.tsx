import { SectionHeader } from "./Services";
import enclosureImg from "@/assets/enclosure-build.jpg";
import jeepImg from "@/assets/jeep-night.jpg";
import carplayImg from "@/assets/carplay-dash.jpg";
import speakerImg from "@/assets/speaker-closeup.jpg";
import truckImg from "@/assets/truck-amp.jpg";

const SHOTS = [
  { src: enclosureImg, label: "Custom Enclosure", tag: "TRUNK BUILD" },
  { src: speakerImg, label: "Door Components", tag: "ACOUSTIC" },
  { src: jeepImg, label: "Jeep Wrangler", tag: "AMBIENT LED" },
  { src: truckImg, label: "Amplifier Layout", tag: "POWER" },
  { src: carplayImg, label: "CarPlay Retrofit", tag: "CARPLAY" },
  { src: enclosureImg, label: "Fabrication Detail", tag: "DETAIL WORK" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
        <SectionHeader
          eyebrow="Gallery"
          title="Craftsmanship in detail"
          right="A cinematic look at premium installation and integration details."
        />

        <div className="mt-12 grid grid-cols-12 gap-3 auto-rows-[160px] lg:auto-rows-[200px]">
          {SHOTS.map((s, i) => {
            const layout = [
              "col-span-12 sm:col-span-6 lg:col-span-5 row-span-2",
              "col-span-6 lg:col-span-4 row-span-1",
              "col-span-6 lg:col-span-3 row-span-2",
              "col-span-6 lg:col-span-4 row-span-1",
              "col-span-6 lg:col-span-3 row-span-1",
              "col-span-12 lg:col-span-9 row-span-1",
            ][i];
            return (
              <figure
                key={i}
                className={`relative panel overflow-hidden group ${layout}`}
              >
                <img
                  src={s.src}
                  alt={s.label}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase bg-background/70 backdrop-blur px-2 py-1 border border-border text-ignition">
                    {s.tag}
                  </span>
                </div>
                <figcaption className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="font-display font-bold uppercase tracking-wide text-sm text-foreground">{s.label}</span>
                  <span className="label-mono">{String(i + 1).padStart(2, "0")}</span>
                </figcaption>
                <div className="absolute bottom-0 left-0 right-0 h-px scan-line opacity-0 group-hover:opacity-100 transition" />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
