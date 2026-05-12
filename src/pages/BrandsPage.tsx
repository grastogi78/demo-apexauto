import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const BRAND_CATEGORIES = [
  {
    category: "Audio & Sound Systems",
    description:
      "The right audio component depends on your vehicle, how you listen, and how loud you want to go. We commonly work with these brands across a range of builds: daily drivers focused on clarity, trucks built for output, and custom installs where DSP tuning makes every seat sound intentional. Head units, amplifiers, component speakers, subwoofers, and signal processors all need to work together. We design the system first, then choose the gear.",
    fit: [
      "Daily listening and clarity upgrades",
      "Bass-forward builds with amplifier and subwoofer integration",
      "DSP-tuned multi-channel systems",
      "Head unit replacements with CarPlay or Android Auto",
    ],
    brands: [
      "Alpine",
      "JL Audio",
      "Hertz Car Audio",
      "Kicker",
      "Focal",
      "Polk Audio",
      "MMATS Pro Audio",
      "MTX",
      "Jensen",
      "Pioneer",
      "Kenwood",
      "JVC",
    ],
  },
  {
    category: "Vehicle Integration & Interfaces",
    description:
      "OEM-grade integration means the upgrade looks and works like it came from the factory. Steering wheel controls stay active. Vehicle data like speed and door chimes stays intact. Backup cameras and factory displays keep working. These brands make that possible across hundreds of vehicle makes and models. If you want CarPlay or Android Auto without losing what your vehicle already does, this is how we get there.",
    fit: [
      "CarPlay and Android Auto retrofits",
      "Steering wheel control retention",
      "Factory display and amp integration",
      "Vehicle data and chime preservation",
    ],
    brands: [
      "Alpine Restyle",
      "Pioneer AppRadio",
      "Android Auto",
      "iDatalink",
    ],
  },
  {
    category: "Security & Remote Start",
    description:
      "Remote start and security installs are only as good as the vehicle-specific integration behind them. Generic wiring shortcuts cause problems. We install using bypass modules and vehicle-specific harnesses so remote start works correctly with your car's factory immobilizer and keyless system. Smart control via smartphone is standard on most builds.",
    fit: [
      "Remote start with factory key fob integration",
      "Security systems with smartphone notification",
      "Vehicle-specific bypass for push-button start vehicles",
      "Two-way confirmation and GPS-ready platforms",
    ],
    brands: [
      "Viper",
      "Python",
      "Clifford",
      "Flashlogic",
    ],
  },
  {
    category: "Lighting & Accessories",
    description:
      "For trucks, Jeeps, and off-road builds where visibility and utility matter. Driving lights, rock lights, and light bars require proper mounting, weatherproofing, and wiring integration to work reliably. We recommend Rigid Industries for builds where quality and durability come first.",
    fit: [
      "Off-road and trail lighting for Jeeps and trucks",
      "Rock light and underbody LED integration",
      "Driving lights and light bar wiring",
      "Weatherproof harness builds",
    ],
    brands: [
      "Rigid Industries",
    ],
  },
];

export function BrandsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32 pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-10">

          {/* Page header */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-ignition" />
              <span className="label-mono-ignition">The Gear Behind the Build</span>
            </div>
            <h1 className="display-h1 mt-5">
              Great builds start<br />
              <span className="text-ignition">with the right gear.</span>
            </h1>
            <p className="mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Great builds are not just about the logo on the box. They are about choosing
              the right components, integrating them cleanly, and tuning the system around
              the vehicle and the driver.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xl">
              Below are brands we commonly install and recommend. Every suggestion is based
              on your vehicle, your goals, and your budget. Not inventory pressure.
            </p>
          </div>

          {/* Category sections */}
          <div className="mt-16 lg:mt-20 space-y-16">
            {BRAND_CATEGORIES.map((cat, ci) => (
              <div
                key={cat.category}
                className="border-t border-border pt-10"
              >
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
                  {/* Category label + advisory copy */}
                  <div className="lg:col-span-5">
                    <div className="font-mono text-[11px] tracking-[0.22em] text-ignition uppercase mb-2">
                      {String(ci + 1).padStart(2, "0")}
                    </div>
                    <h2 className="font-display font-bold uppercase tracking-wide text-xl lg:text-2xl">
                      {cat.category}
                    </h2>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Fit list */}
                    <div className="mt-5 space-y-1.5">
                      {cat.fit.map((f) => (
                        <div key={f} className="flex items-start gap-2.5">
                          <span className="mt-1 w-1 h-1 rounded-full bg-ignition shrink-0" />
                          <span className="text-xs text-muted-foreground leading-snug">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Brand grid */}
                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border">
                      {cat.brands.map((brand) => (
                        <div
                          key={brand}
                          className="bg-surface-2 hover:bg-surface-3 transition-colors duration-200 px-5 py-4 group relative overflow-hidden"
                        >
                          <span className="font-display font-extrabold uppercase tracking-[0.05em] text-sm text-foreground/70 group-hover:text-ignition transition-colors duration-200 leading-tight">
                            {brand}
                          </span>
                          <div className="absolute bottom-0 left-0 right-0 h-px bg-ignition/0 group-hover:bg-ignition/40 transition-colors duration-200" />
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground/60 font-mono tracking-wide">
                      Brands we commonly work with. Not an official dealer or partner roster.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-16 pt-10 border-t border-border flex flex-wrap gap-3">
            <a
              href="/#contact-form"
              className="group h-12 px-6 inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.22em] uppercase font-semibold bg-ignition text-primary-foreground hover:bg-ignition-glow transition ignition-glow"
            >
              Talk About Your Build
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/#builds"
              className="h-12 px-6 inline-flex items-center font-mono text-[12px] tracking-[0.22em] uppercase font-semibold border border-border hover:border-border/80 hover:text-foreground transition"
            >
              View Recent Builds
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
