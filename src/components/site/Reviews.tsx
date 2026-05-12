import { ArrowRight, Star } from "lucide-react";
import { SectionHeader } from "./Services";

/*
 * TODO: Replace this placeholder with a Trustindex or verified Google Reviews widget before launch.
 * Trustindex embed: https://www.trustindex.io
 * Google Reviews embed: use your verified Google Business Profile widget code.
 */

export function Reviews() {
  return (
    <section className="py-20 lg:py-28 border-t border-border bg-surface-2/30">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
        <SectionHeader
          eyebrow="Customer Reviews"
          title="Trusted by local drivers"
          right="Serving Roswell and North Atlanta since 2013."
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
              Trusted by enthusiasts, families, and daily drivers across Roswell
              and North Atlanta. Our customers return because the work lasts and
              the installs look like they came from the factory.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              See what local customers say about their builds, our process, and
              what it's like to work with a shop that takes your vehicle seriously.
            </p>
            <a
              href="https://www.google.com/maps/search/Sound+Master+Roswell+GA"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-2 h-11 px-6 font-mono text-[11px] tracking-[0.22em] uppercase font-semibold border border-border hover:border-ignition/60 hover:text-ignition transition"
            >
              Read Google Reviews
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right — review widget placeholder */}
          <div className="lg:col-span-7">
            {/*
             * TODO: Replace this placeholder block with a Trustindex or Google Reviews widget.
             * The widget should be embedded here and will display live verified reviews.
             */}
            <div className="panel panel-line p-8 lg:p-10 flex flex-col items-center justify-center text-center min-h-[260px] relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ignition/30 to-transparent" />
              <div className="flex items-center gap-1 text-ignition/50 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                Live Google Reviews will appear here once the widget is connected
                before launch. Customers will see real, verified feedback directly
                from our Google Business Profile.
              </p>
              <a
                href="https://www.google.com/maps/search/Sound+Master+Roswell+GA"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 label-mono-ignition hover:opacity-80 transition inline-flex items-center gap-1.5"
              >
                View reviews on Google
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
