import heroImg from "@/assets/hero-dashboard.jpg";
import { ArrowRight, ShieldCheck, Speaker, Cpu, KeyRound, Lightbulb } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-16 overflow-hidden">
      {/* background image — no negative z-index; content div uses relative to stack above */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Premium car cockpit interior with ambient lighting"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-50"
        />
        {/* Left-side gradient so text stays readable; fades to transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/35 to-transparent" />
        {/* Vertical: section-top hint + bottom fade for section transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-5 lg:px-10 pt-20 pb-28 lg:pt-32 lg:pb-40 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border bg-surface-2/70 backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-ignition" />
            <span className="label-mono">Trusted Since 2013 · Roswell, GA</span>
          </div>

          <h1 className="display-h1 mt-6">
            Custom builds for people
            <br />
            <span className="text-ignition">who love their vehicles.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base lg:text-lg text-muted-foreground leading-relaxed">
            Custom audio, lighting, security, and vehicle integration systems
            designed with precision and installed like they belong there.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact-form"
              className="group h-12 px-6 inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.22em] uppercase font-semibold bg-ignition text-primary-foreground hover:bg-ignition-glow transition ignition-glow"
            >
              Talk About Your Build
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#builds"
              className="h-12 px-6 inline-flex items-center font-mono text-[12px] tracking-[0.22em] uppercase font-semibold border border-border bg-surface-2/60 backdrop-blur-sm hover:border-ignition/60 hover:text-foreground transition"
            >
              View Recent Builds
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 max-w-md gap-6">
            <Stat value="12+" label="Years in Roswell" />
            <Stat value="5,000+" label="Builds Completed" />
            <Stat value="OEM" label="Grade Finish" />
          </div>
        </div>

        {/* Service modules — grounded in real offerings, styled as cockpit panels */}
        <div className="lg:col-span-5 space-y-2.5">
          <ServiceModule
            icon={Speaker}
            label="Custom Audio Systems"
            sub="Speakers · Amplifiers · Subwoofers · DSP"
          />
          <ServiceModule
            icon={Cpu}
            label="OEM Integration"
            sub="CarPlay · Android Auto · Steering Controls"
          />
          <ServiceModule
            icon={KeyRound}
            label="Remote Start & Security"
            sub="Viper · Compustar · SmartStart"
          />
          <ServiceModule
            icon={Lightbulb}
            label="Ambient Lighting"
            sub="Interior Accents · Footwell · Rock Lights"
            accent
          />
        </div>
      </div>

      {/* bottom scan line */}
      <div className="absolute bottom-0 inset-x-0 h-px scan-line" />
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl lg:text-3xl font-extrabold text-ignition">{value}</div>
      <div className="label-mono mt-1">{label}</div>
    </div>
  );
}

function ServiceModule({
  icon: Icon,
  label,
  sub,
  accent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div className="panel panel-line p-4 backdrop-blur-md bg-surface-2/75 flex items-center gap-4">
      <div
        className={`w-9 h-9 shrink-0 grid place-items-center border ${
          accent
            ? "border-ignition/40 bg-ignition/10 text-ignition"
            : "border-border bg-surface-3/60 text-muted-foreground"
        }`}
      >
        <Icon className="w-4 h-4" />
      </div>
      <div className="min-w-0">
        <div className="font-display font-bold uppercase tracking-wide text-sm text-foreground truncate">
          {label}
        </div>
        <div className="label-mono mt-0.5 !text-[10px] !tracking-[0.14em] truncate">{sub}</div>
      </div>
      <div className="ml-auto shrink-0">
        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
      </div>
    </div>
  );
}
