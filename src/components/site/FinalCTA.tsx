import { MapPin, Phone, Clock } from "lucide-react";
import installImg from "@/assets/install-bay.jpg";
import storeFrontImg from "@/assets/ogimages/SM Store Front.webp";

const SERVICES = [
  "Custom Car Audio",
  "DSP Tuning",
  "Apple CarPlay / Android Auto",
  "Remote Start & Security",
  "Ambient Lighting",
  "Radar Detection",
  "Truck & Jeep Accessories",
  "OEM Integration",
  "Other",
];

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-20 lg:py-28 border-t border-border overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={installImg} alt="" loading="lazy" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      </div>

      <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
        {/* Section header */}
        <div className="mb-10 lg:mb-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-ignition" />
            <span className="label-mono-ignition">Get in Touch</span>
          </div>
          <h2 className="display-h2 mt-4 max-w-xl">
            Ready to transform<br />
            <span className="text-ignition">your vehicle?</span>
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground text-sm lg:text-base">
            Reach out to schedule a consultation. We'll discuss your vehicle, your goals,
            and put together a build plan that fits.
          </p>
        </div>

        {/* Google Map */}
        <div className="mb-8 lg:mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-ignition" />
            <span className="label-mono-ignition">Find Us · Roswell, GA</span>
          </div>
          <div className="panel panel-line overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Sound+Master,+11230+Alpharetta+Hwy,+Suite+118,+Roswell,+GA+30076&output=embed"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sound Master Roswell location map"
              className="w-full h-[300px] lg:h-[360px] block"
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground font-mono">
            <a
              href="https://maps.google.com/?q=11230+Alpharetta+Hwy+Suite+118+Roswell+GA+30076"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ignition transition"
            >
              11230 Alpharetta Hwy, Suite 118, Roswell, GA 30076
            </a>
            <a href="tel:+14709947502" className="hover:text-ignition transition">
              (470) 994-7502
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Store info */}
          <aside className="lg:col-span-4 panel panel-line overflow-hidden backdrop-blur bg-surface-2/80">
            {/* Store front photo */}
            <div className="relative h-40 overflow-hidden">
              <img
                src={storeFrontImg}
                alt="Sound Master storefront in Roswell, GA"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-2/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4">
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted-foreground/80">
                  Our Roswell Shop
                </span>
              </div>
            </div>
            <div className="p-6 lg:p-7">
            <div className="label-mono-ignition">Sound Master · Roswell, GA</div>
            <div className="mt-5 space-y-4">
              <Row
                icon={MapPin}
                label="Address"
                value="11230 Alpharetta Hwy, Suite 118"
                valueLine2="Roswell, GA 30076"
                href="https://maps.google.com/?q=11230+Alpharetta+Hwy+Suite+118+Roswell+GA+30076"
              />
              <Row
                icon={Phone}
                label="Phone"
                value="(470) 994-7502"
                href="tel:+14709947502"
              />
              <Row
                icon={Clock}
                label="Hours"
                value="Mon–Thu: 10 AM – 6 PM"
                valueLine2="Fri: 10 AM – 5 PM · Sat: 10 AM – 4 PM"
                valueLine3="Sunday: Closed"
              />
            </div>
            </div>
          </aside>

          {/* Contact form — powered by FormSubmit */}
          {/* TODO: Replace the FormSubmit action URL below with the verified Sound Master business email before launch. */}
          {/* Example: action="https://formsubmit.co/info@soundmasterroswell.com" */}
          <form
            id="contact-form"
            action="https://formsubmit.co/preview-test@easinilabs.com"
            method="POST"
            className="lg:col-span-8 panel panel-line p-6 lg:p-8 backdrop-blur bg-surface-2/70"
          >
            {/* FormSubmit config */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New inquiry from SoundMasterRoswell.com" />
            <input type="text" name="_honey" className="hidden" aria-hidden="true" />

            <div className="label-mono-ignition mb-6">Send a Message</div>

            <div className="grid sm:grid-cols-2 gap-4">
              <FormField label="Full Name" name="name" placeholder="Your name" required />
              <FormField label="Phone" name="phone" type="tel" placeholder="(470) 000-0000" />
              <FormField label="Email" name="email" type="email" placeholder="you@email.com" required />
              <FormField label="Vehicle" name="vehicle" placeholder="Year · Make · Model" />
            </div>

            <div className="mt-4">
              <label className="block label-mono mb-2">Service Interest</label>
              <select
                name="service"
                className="w-full h-11 px-4 bg-surface-3/60 border border-border text-foreground font-mono text-sm focus:outline-none focus:border-ignition/60 transition appearance-none"
              >
                <option value="">Select a service…</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="mt-4">
              <label className="block label-mono mb-2">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your vehicle and what you're looking to do…"
                className="w-full px-4 py-3 bg-surface-3/60 border border-border text-foreground text-sm font-body leading-relaxed resize-none focus:outline-none focus:border-ignition/60 transition placeholder:text-muted-foreground/60"
              />
            </div>

            <div className="mt-5">
              <button
                type="submit"
                className="group h-12 px-8 inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.22em] uppercase font-semibold bg-ignition text-primary-foreground hover:bg-ignition-glow transition ignition-glow"
              >
                Send Message
              </button>
              <p className="mt-3 text-xs text-muted-foreground/70 font-mono">
                Or call us directly at{" "}
                <a href="tel:+14709947502" className="text-foreground hover:text-ignition transition">
                  (470) 994-7502
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block label-mono mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full h-11 px-4 bg-surface-3/60 border border-border text-foreground font-mono text-sm focus:outline-none focus:border-ignition/60 transition placeholder:text-muted-foreground/60"
      />
    </div>
  );
}

function Row({
  icon: Icon,
  label,
  value,
  valueLine2,
  valueLine3,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  valueLine2?: string;
  valueLine3?: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="label-mono">{label}</div>
      <div className="text-foreground text-sm mt-0.5">{value}</div>
      {valueLine2 && <div className="text-muted-foreground text-xs mt-0.5">{valueLine2}</div>}
      {valueLine3 && <div className="text-muted-foreground text-xs mt-0.5">{valueLine3}</div>}
    </>
  );

  return (
    <div className="flex items-start gap-3 pb-4 border-b border-border last:border-0">
      <div className="w-9 h-9 shrink-0 grid place-items-center border border-border bg-surface-3/60">
        <Icon className="w-4 h-4 text-ignition" />
      </div>
      <div className="min-w-0">
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-ignition transition">
            {content}
          </a>
        ) : (
          content
        )}
      </div>
    </div>
  );
}
