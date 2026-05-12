import speakerImg from "@/assets/speaker-closeup.jpg";
import enclosureImg from "@/assets/enclosure-build.jpg";
import carplayImg from "@/assets/carplay-dash.jpg";
import {
  Speaker,
  Sliders,
  Smartphone,
  KeyRound,
  Lightbulb,
  Radar,
  Truck,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
        <SectionHeader
          eyebrow="What We Build"
          title="Integrated vehicle enhancement systems"
          right="Engineered as one cohesive system. Never bolted-on parts."
        />

        {/* Asymmetric grid */}
        <div className="mt-12 grid grid-cols-12 gap-3 lg:gap-4">
          {/* Featured large */}
          <FeatureCard
            className="col-span-12 lg:col-span-7 lg:row-span-2 min-h-[420px] lg:min-h-[560px]"
            image={enclosureImg}
            tag="Signature Build"
            title="Custom Enclosures & Subwoofer Systems"
            body="Hand-fabricated fiberglass and CNC enclosures tuned to your chassis. Hidden, sealed, or ported for output without compromising trunk space."
            icon={Speaker}
          />

          {/* Two stacked right */}
          <FeatureCard
            className="col-span-12 sm:col-span-6 lg:col-span-5 min-h-[200px] lg:min-h-[272px]"
            image={speakerImg}
            tag="Acoustic"
            title="Component Speaker Systems"
            body="Hertz, JL Audio, Focal: installed with custom mounts, sound-deadening, and OEM-grade integration."
            icon={Speaker}
          />
          <FeatureCard
            className="col-span-12 sm:col-span-6 lg:col-span-5 min-h-[200px] lg:min-h-[272px]"
            image={carplayImg}
            tag="Connected"
            title="Apple CarPlay & Android Auto"
            body="Wireless retrofits and head unit upgrades that look and feel factory."
            icon={Smartphone}
          />

          {/* Service mini-cards row */}
          <ServiceMini
            className="col-span-6 lg:col-span-3"
            icon={Sliders}
            title="DSP Tuning"
            body="64-bit FIR processing with phase-aligned calibration."
          />
          <ServiceMini
            className="col-span-6 lg:col-span-3"
            icon={Lightbulb}
            title="Ambient Lighting"
            body="16M-color interior accents and footwell systems."
          />
          <ServiceMini
            className="col-span-6 lg:col-span-3"
            icon={KeyRound}
            title="Remote Start"
            body="Viper, Compustar. Secure, smartphone-ready."
          />
          <ServiceMini
            className="col-span-6 lg:col-span-3"
            icon={Radar}
            title="Radar Detection"
            body="Stealth-installed Escort & K40 systems."
          />
          <ServiceMini
            className="col-span-6 lg:col-span-3"
            icon={Truck}
            title="Truck & Jeep Accessories"
            body="Lighting, audio bars, integrated electronics."
          />
          <ServiceMini
            className="col-span-6 lg:col-span-3"
            icon={Cpu}
            title="OEM Integration"
            body="Factory display, steering, and amp integration."
          />
          <ServiceMini
            className="col-span-12 lg:col-span-6"
            icon={ArrowUpRight}
            title="Performance Customization"
            body="Aux electronics, dash cams, backup cameras, and security: fully integrated and installed to factory standards."
            wide
          />
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  right,
}: {
  eyebrow: string;
  title: string;
  right?: string;
}) {
  return (
    <div className="grid lg:grid-cols-12 gap-6 items-end">
      <div className="lg:col-span-8">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-ignition" />
          <span className="label-mono-ignition">{eyebrow}</span>
        </div>
        <h2 className="display-h2 mt-4 max-w-2xl">{title}</h2>
      </div>
      {right && (
        <div className="lg:col-span-4">
          <p className="text-sm text-muted-foreground border-l border-border pl-4">{right}</p>
        </div>
      )}
    </div>
  );
}

function FeatureCard({
  className = "",
  image,
  tag,
  title,
  body,
  icon: Icon,
}: {
  className?: string;
  image: string;
  tag: string;
  title: string;
  body: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <article
      className={`panel panel-line group relative overflow-hidden flex ${className}`}
    >
      <img
        src={image}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-surface/10" />
      <div className="absolute top-0 left-0 right-0 h-px scan-line opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10 p-6 lg:p-8 flex flex-col justify-end w-full">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-2 py-1 font-mono text-[10px] tracking-[0.22em] uppercase font-semibold bg-ignition/15 text-ignition border border-ignition/30">
            {tag}
          </span>
          <Icon className="w-4 h-4 text-ignition" />
        </div>
        <h3 className="font-display font-bold uppercase tracking-wide text-xl lg:text-2xl">
          {title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground max-w-md">{body}</p>
      </div>
    </article>
  );
}

function ServiceMini({
  className = "",
  icon: Icon,
  title,
  body,
  wide,
}: {
  className?: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`panel panel-line p-5 lg:p-6 group hover:border-border/80 transition relative overflow-hidden ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="w-10 h-10 grid place-items-center border border-border bg-surface-3/60 group-hover:border-ignition/50 group-hover:text-ignition transition">
          <Icon className="w-4 h-4" />
        </div>
        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-ignition group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
      </div>
      <h4 className={`mt-4 font-display font-bold uppercase tracking-wide ${wide ? "text-lg" : "text-base"}`}>
        {title}
      </h4>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
      <div className="mt-5 telemetry-bar opacity-40 group-hover:opacity-70 transition" style={{ "--p": "0.4", "--ignition": "var(--aluminum)" } as React.CSSProperties} />
    </div>
  );
}
