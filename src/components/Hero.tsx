import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function Hero() {
  return (
    <section id="top" className="py-14 md:py-14">
      <div className="container">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-4 items-stretch">
          {/* Main hero card */}
          <RevealOnScroll>
            <div className="card-surface p-6 md:p-8 relative overflow-hidden h-full">
              <div className="absolute inset-[-2px] gradient-overlay-primary pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2.5 px-3 py-2 border border-primary/45 bg-primary/12 rounded-full text-xs tracking-[0.08em] uppercase text-foreground/92">
                  <span className="w-2 h-2 rounded-full bg-accent glow-accent animate-pulse-glow" />
                  Luxury Designs • Custom Orders
                </span>
                <h1 className="mt-4 mb-3 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
                  Luxury wear, made to your taste.
                </h1>
                <p className="text-muted-foreground text-base leading-relaxed max-w-[70ch]">
                  Jedi's Clothing creates refined dresses and gowns with a bold, modern finish.
                  Browse the gallery, select your design, then send your request on WhatsApp.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <Button variant="primary" asChild>
                    <a href="#designs">Browse Designs</a>
                  </Button>
                  <Button variant="default" asChild>
                    <a href="#collections">Explore Collections</a>
                  </Button>
                  <Button variant="whatsapp" asChild>
                    <a href="#contact">Order on WhatsApp</a>
                  </Button>
                </div>
                <p className="text-muted-foreground text-xs mt-4">
                  WhatsApp: 0536856525 • Ghana & international orders
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Side cards */}
          <div className="grid gap-4">
            <RevealOnScroll delay={100}>
              <div className="card-surface p-5 relative overflow-hidden h-full">
                <div className="absolute inset-[-1px] gradient-overlay-accent pointer-events-none" />
                <div className="relative z-10">
                  <div className="text-xs tracking-[0.12em] uppercase text-foreground/88 mb-2">What We Offer</div>
                  <p className="text-muted-foreground text-sm leading-relaxed m-0">
                    Luxury dresses, gowns & event wear. Choose a design or request a custom style.
                  </p>
                  <span className="inline-flex mt-3 text-xs px-2.5 py-1.5 rounded-full border border-foreground/12 bg-background/25 text-foreground/90">
                    Custom sizes available
                  </span>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="card-surface p-5 relative overflow-hidden h-full">
                <div className="absolute inset-[-1px] gradient-overlay-accent pointer-events-none" />
                <div className="relative z-10">
                  <div className="text-xs tracking-[0.12em] uppercase text-foreground/88 mb-2">Made For Events</div>
                  <p className="text-muted-foreground text-sm leading-relaxed m-0">
                    Weddings, birthdays, dinners, red carpet, photoshoots — elevated every time.
                  </p>
                  <span className="inline-flex mt-3 text-xs px-2.5 py-1.5 rounded-full border border-foreground/12 bg-background/25 text-foreground/90">
                    Fast consultation
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
