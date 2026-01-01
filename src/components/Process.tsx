import { RevealOnScroll } from "@/components/RevealOnScroll";

const steps = [
  {
    step: "1) Select",
    desc: "Choose a design from the gallery (or request a custom style).",
    badge: "Pick your favorite",
  },
  {
    step: "2) Confirm",
    desc: "We confirm size, fabric, color, delivery location, and pricing on WhatsApp.",
    badge: "Clear pricing",
  },
  {
    step: "3) Create",
    desc: "Your outfit is produced with a luxury finish and quality control checks.",
    badge: "Crafted with care",
  },
];

export function Process() {
  return (
    <section id="process" className="py-14">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5 mb-5">
          <RevealOnScroll>
            <h2 className="text-xl tracking-[0.08em] uppercase text-foreground/92 font-bold m-0">Process</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <p className="text-muted-foreground text-sm max-w-[80ch] leading-relaxed m-0">
              Simple, professional, and clear — from selection to delivery.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <RevealOnScroll key={step.step} delay={i * 100}>
              <div className="card-surface p-5 h-full">
                <div className="text-xs tracking-[0.12em] uppercase text-foreground/88 mb-2">{step.step}</div>
                <p className="text-muted-foreground text-sm leading-relaxed m-0">{step.desc}</p>
                <span className="inline-flex mt-3 text-xs px-2.5 py-1.5 rounded-full border border-foreground/12 bg-background/25 text-foreground/90">
                  {step.badge}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
