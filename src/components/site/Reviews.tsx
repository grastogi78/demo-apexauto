import { Star } from "lucide-react";
import { SectionHeader } from "./Services";

export function Reviews() {
  return (
    <section className="py-20 lg:py-28 border-t border-border bg-surface-2/30">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
        <SectionHeader
          eyebrow="Demo Feedback"
          title="Trusted by detail-driven drivers"
          right="Portfolio demo concept by easini LABS."
        />

        <div className="mt-10 grid lg:grid-cols-12 gap-6 items-center">
          {/* Left — trust statement */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-1 text-ignition mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-base lg:text-lg text-foreground/90 leading-relaxed">
              Built as a fictional premium shop experience for enthusiasts,
              families, and daily drivers who care about clean integration.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              This section models the review and trust language a real custom
              automotive studio could use once verified customer feedback is available.
            </p>
          </div>

          {/* Right review cards */}
          <div className="lg:col-span-7">
            <div className="panel panel-line p-8 lg:p-10 min-h-[260px] relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ignition/30 to-transparent" />
              <div className="flex items-center gap-1 text-ignition/60 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-base text-foreground/90 leading-relaxed">
                “The cabin feels factory, but the soundstage is completely transformed.
                The controls are simple, the lighting is tasteful, and nothing feels added on.”
              </p>
              <div className="mt-6 label-mono-ignition">Sample portfolio testimonial</div>
              <p className="mt-4 text-xs text-muted-foreground max-w-lg leading-relaxed">
                Portfolio demo concept by easini LABS. Names, testimonials, and
                studio details are fictional for presentation purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
