import { Design } from "@/lib/designs";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface DesignModalProps {
  design: Design | null;
  onClose: () => void;
  onSelect: (design: Design) => void;
}

export function DesignModal({ design, onClose, onSelect }: DesignModalProps) {
  if (!design) return null;

  const handleSelect = () => {
    onSelect(design);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/65 backdrop-blur-md flex items-center justify-center p-4 z-[80]"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Design preview"
    >
      <div className="w-full max-w-[960px] border border-foreground/14 bg-background/92 rounded-[22px] overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-4 py-3 border-b border-foreground/10 bg-secondary/20">
          <p className="font-extrabold tracking-tight m-0">
            {design.name} ({design.id})
          </p>
          <button
            className="w-10 h-10 rounded-xl border border-foreground/14 bg-secondary/18 text-foreground flex items-center justify-center hover:bg-secondary/30 transition-colors"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div
          className="w-full h-[min(72vh,640px)] bg-black/25 bg-cover bg-center"
          style={{ backgroundImage: `url(${design.img})` }}
        />
        <div className="p-4 flex flex-wrap gap-3 border-t border-foreground/10">
          <Button variant="primary" onClick={handleSelect} className="flex-1 sm:flex-none">
            Select this design
          </Button>
          <Button variant="default" asChild className="flex-1 sm:flex-none" onClick={onClose}>
            <a href="#contact">Contact</a>
          </Button>
          <p className="text-muted-foreground text-xs m-0 w-full sm:w-auto sm:ml-auto flex items-center">
            Tip: Select → your WhatsApp message will auto-fill.
          </p>
        </div>
      </div>
    </div>
  );
}
