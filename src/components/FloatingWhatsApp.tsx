import { Button } from "@/components/ui/button";

export function FloatingWhatsApp() {
  return (
    <div className="fixed right-4 bottom-4 z-[70] shadow-xl">
      <Button variant="primary" asChild>
        <a href="#contact" aria-label="Order on WhatsApp">
          WhatsApp Order
        </a>
      </Button>
    </div>
  );
}
