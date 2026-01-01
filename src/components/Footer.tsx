import { RevealOnScroll } from "@/components/RevealOnScroll";

const footerLinks = [
  { href: "#collections", label: "Collections" },
  { href: "#designs", label: "Designs" },
  { href: "#process", label: "Process" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
  { href: "#top", label: "Top" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 md:py-14 border-t border-border bg-background/45">
      <div className="container">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6">
          <RevealOnScroll>
            <div className="flex items-center gap-3 uppercase tracking-[0.18em] font-extrabold text-xs mb-3">
              <span className="w-[34px] h-[34px] rounded-xl border border-foreground/16 bg-gradient-to-br from-primary/22 via-foreground/4 to-black/20 shadow-lg" />
              <span>Jedi's Clothing</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed m-0">
              Luxury designs • Custom orders • WhatsApp consultations
              <br />
              Premium finishing with quiet confidence.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="flex flex-wrap gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm rounded-full border border-foreground/10 bg-secondary/18 text-muted-foreground hover:bg-primary/10 hover:border-primary/30 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-muted-foreground text-xs mt-4 m-0">
              © {year} Jedi's Clothing. All rights reserved.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </footer>
  );
}
