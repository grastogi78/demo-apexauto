const NAV_LINKS = [
  { label: "Custom Builds", href: "/#builds" },
  { label: "What We Build", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Brands", href: "/brands" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact-form" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-2/40">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-10 py-14 flex flex-col lg:flex-row gap-10 lg:gap-16">

        {/* Left — brand + contact */}
        <div className="lg:flex-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-ignition" />
            <span className="font-display font-extrabold tracking-[0.18em] text-sm">
              APEX<span className="text-ignition">·</span>AUTO<span className="text-ignition">·</span>SOUND
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Premium automotive audio, integration, and vehicle customization.
            Portfolio demo concept by easini LABS.
          </p>
          <div className="mt-5 space-y-1.5">
            <a
              href="tel:+15550142087"
              className="block text-sm text-muted-foreground hover:text-ignition transition font-mono"
            >
              (555) 014-2087
            </a>
            <div className="block text-xs text-muted-foreground/70">
              1200 Innovation Drive, Suite 100 · Atlanta, GA 30301
            </div>
          </div>
          <div className="mt-6 label-mono">© 2026 Apex Auto Sound · Portfolio Demo</div>
        </div>

        {/* Right — compact nav */}
        <div className="shrink-0">
          <div className="label-mono-ignition mb-4">Navigation</div>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-3">
          <div className="label-mono">Portfolio demo concept by easini LABS</div>
          <a
            href="https://easinilabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground/50 hover:text-ignition transition-colors duration-200"
          >
            Designed by easini LABS
          </a>
        </div>
      </div>
    </footer>
  );
}
