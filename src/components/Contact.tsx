import { useState } from "react";
import { Design, WHATSAPP_NUMBER } from "@/lib/designs";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { useToast } from "@/hooks/use-toast";

interface ContactProps {
  selectedDesign: Design | null;
  onClearSelection: () => void;
}

export function Contact({ selectedDesign, onClearSelection }: ContactProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    size: "",
    color: "",
    qty: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in your name, phone number, and message.",
        variant: "destructive",
      });
      return;
    }

    const designName = selectedDesign ? `${selectedDesign.name} (${selectedDesign.id})` : "None";

    const text = `Jedi's Clothing Order Request
Name: ${formData.name.trim()}
Customer Phone: ${formData.phone.trim()}
Selected Design: ${designName}
Size: ${formData.size || "-"}
Color: ${formData.color || "-"}
Quantity: ${formData.qty || "-"}
Message: ${formData.message.trim()}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    toast({
      title: "Opening WhatsApp",
      description: "If nothing opens, allow pop-ups and try again.",
    });
  };

  return (
    <section id="contact" className="py-14">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5 mb-5">
          <RevealOnScroll>
            <h2 className="text-xl tracking-[0.08em] uppercase text-foreground/92 font-bold m-0">Contact & Order</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <p className="text-muted-foreground text-sm max-w-[80ch] leading-relaxed m-0">
              Fill this form and it will open WhatsApp with your message ready to send.
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll>
          <div className="card-surface p-6 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 gradient-overlay-primary pointer-events-none" />
            <div className="relative z-10 space-y-4">
              {/* Selected design display */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl border border-accent/18 bg-accent/6">
                <div>
                  <strong className="text-xs tracking-[0.08em] uppercase">Selected Design</strong>
                  <div className="text-muted-foreground mt-1">
                    {selectedDesign ? `${selectedDesign.name} (${selectedDesign.id})` : "None selected yet."}
                  </div>
                </div>
                <Button variant="default" size="sm" onClick={onClearSelection}>
                  Clear
                </Button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3 mt-2">
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 rounded-2xl border border-input bg-secondary/18 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-3 rounded-2xl border border-input bg-secondary/18 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <select
                  name="size"
                  className="w-full px-4 py-3 rounded-2xl border border-input bg-secondary/18 text-foreground outline-none focus:border-primary/50 transition-colors cursor-pointer"
                  value={formData.size}
                  onChange={handleChange}
                >
                  <option value="">Preferred size (optional)</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                </select>
                <input
                  type="text"
                  name="color"
                  className="w-full px-4 py-3 rounded-2xl border border-input bg-secondary/18 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors"
                  placeholder="Preferred color (optional)"
                  value={formData.color}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="qty"
                  min="1"
                  className="w-full px-4 py-3 rounded-2xl border border-input bg-secondary/18 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors"
                  placeholder="Quantity (optional)"
                  value={formData.qty}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  className="w-full px-4 py-3 rounded-2xl border border-input bg-secondary/18 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors min-h-[130px] resize-y"
                  placeholder="Extra details (delivery location, date needed, fabric preference, etc.)"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button variant="primary" type="submit" className="w-full">
                  Send on WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
