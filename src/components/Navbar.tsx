import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#collections", label: "Collections" },
  { href: "#designs", label: "Designs" },
  { href: "#process", label: "Process" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 glass">
        <div className="container flex items-center justify-between py-4 gap-3">
          <a
            href="#top"
            className="flex items-center gap-3 uppercase tracking-[0.18em] font-extrabold text-xs whitespace-nowrap"
          >
            <span className="w-[34px] h-[34px] rounded-xl border border-foreground/16 bg-gradient-to-br from-primary/22 via-foreground/4 to-black/20 shadow-lg flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
                <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M6 8c2-2 10-2 12 0" stroke="hsl(64 82% 55%)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M6 16c2 2 10 2 12 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
              </svg>
            </span>
            <span>Jedi's Clothing</span>
          </a>

          {/* Mobile menu button */}
          <Button
            variant="default"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobileMenu"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            Menu
          </Button>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-2 text-sm text-muted-foreground" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-full transition-colors hover:bg-foreground/6 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2 items-center">
            <Button variant="whatsapp" size="sm" asChild>
              <a href="#contact">WhatsApp Order</a>
            </Button>
            <Button variant="primary" size="sm" asChild>
              <a href="#designs">View Designs</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div id="mobileMenu" className="md:hidden">
          <div className="container py-3">
            <div className="card-surface p-3 space-y-2">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="default"
                  className="w-full justify-start"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <a href={link.href}>{link.label}</a>
                </Button>
              ))}
              <div className="flex gap-2 pt-2">
                <Button variant="whatsapp" className="flex-1" asChild onClick={() => setIsOpen(false)}>
                  <a href="#contact">WhatsApp</a>
                </Button>
                <Button variant="primary" className="flex-1" asChild onClick={() => setIsOpen(false)}>
                  <a href="#designs">Designs</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
