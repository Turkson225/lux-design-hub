import { Design } from "@/lib/designs";
import { Button } from "@/components/ui/button";

interface DesignCardProps {
  design: Design;
  onSelect: (design: Design) => void;
  onPreview: (design: Design) => void;
}

export function DesignCard({ design, onSelect, onPreview }: DesignCardProps) {
  return (
    <article className="card-surface card-surface-hover overflow-hidden">
      <div
        className="h-[300px] w-full bg-foreground/2 border-b border-border cursor-pointer bg-cover bg-center"
        style={{ backgroundImage: `url(${design.img})` }}
        onClick={() => onPreview(design)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onPreview(design)}
        aria-label={`Preview ${design.name}`}
      />
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-start gap-3">
          <p className="font-extrabold m-0">{design.name}</p>
          <span className="text-xs px-2.5 py-1.5 rounded-full border border-foreground/12 bg-background/25 text-foreground/90 whitespace-nowrap">
            {design.category} • {design.id}
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed m-0 min-h-[44px]">{design.desc}</p>
        <div className="flex gap-2 flex-col sm:flex-row">
          <Button variant="ghost" className="flex-1" onClick={() => onSelect(design)}>
            Select
          </Button>
          <Button variant="ghost" className="flex-1" asChild>
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
    </article>
  );
}
