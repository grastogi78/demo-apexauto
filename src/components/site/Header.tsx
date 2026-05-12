import { useEffect, useState } from "react";

const NAV = [
  { label: "Custom Builds", href: "/#builds" },
  { label: "What We Build", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Brands", href: "/brands" },
  { label: "Gallery", href: "/#gallery" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1320px] px-5 lg:px-10 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <span className="pulse-dot" aria-hidden />
          <span className="font-display font-extrabold tracking-[0.18em] text-sm text-foreground">
            APEX<span className="text-ignition">·</span>AUTO<span className="text-ignition">·</span>SOUND
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="label-mono hover:text-foreground transition-colors relative group"
            >
              {n.label}
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-ignition origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+15550142087" className="label-mono hover:text-foreground transition-colors">
            (555) 014-2087
          </a>
          <a
            href="/#contact-form"
            className="px-4 h-10 inline-flex items-center font-mono text-[11px] tracking-[0.22em] uppercase font-semibold bg-ignition text-primary-foreground hover:bg-ignition-glow transition-colors ignition-glow"
          >
            Talk About Your Build
          </a>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-10 h-10 grid place-items-center border border-border"
        >
          <div className="space-y-1.5">
            <span className="block w-5 h-px bg-foreground" />
            <span className="block w-5 h-px bg-foreground" />
            <span className="block w-3 h-px bg-ignition ml-auto" />
          </div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-5 py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="label-mono text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href="/#contact-form"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 h-11 inline-flex items-center justify-center font-mono text-[11px] tracking-[0.22em] uppercase font-semibold bg-ignition text-primary-foreground"
            >
              Talk About Your Build
            </a>
            <a
              href="tel:+15550142087"
              className="flex items-center justify-center gap-2 h-11 border border-border font-mono text-[11px] tracking-[0.18em] uppercase text-muted-foreground hover:text-foreground hover:border-border/80 transition"
            >
              <span className="text-ignition">↗</span>
              Call Now · (555) 014-2087
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
