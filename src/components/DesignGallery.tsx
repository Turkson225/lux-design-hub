import { useState, useMemo } from "react";
import { DESIGNS, Design } from "@/lib/designs";
import { DesignCard } from "@/components/DesignCard";
import { DesignModal } from "@/components/DesignModal";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Button } from "@/components/ui/button";

interface DesignGalleryProps {
  categoryFilter: string;
  onCategoryChange: (category: string) => void;
  onSelectDesign: (design: Design) => void;
}

export function DesignGallery({ categoryFilter, onCategoryChange, onSelectDesign }: DesignGalleryProps) {
  const [search, setSearch] = useState("");
  const [previewDesign, setPreviewDesign] = useState<Design | null>(null);

  const filteredDesigns = useMemo(() => {
    return DESIGNS.filter((d) => {
      const text = `${d.name} ${d.desc} ${d.category} ${d.id}`.toLowerCase();
      const matchesSearch = !search || text.includes(search.toLowerCase());
      const matchesCategory = categoryFilter === "All" || d.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [search, categoryFilter]);

  const handleClearFilters = () => {
    setSearch("");
    onCategoryChange("All");
  };

  const handleSelect = (design: Design) => {
    onSelectDesign(design);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="designs" className="py-14">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5 mb-5">
          <RevealOnScroll>
            <h2 className="text-xl tracking-[0.08em] uppercase text-foreground/92 font-bold m-0">Design Gallery</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <p className="text-muted-foreground text-sm max-w-[80ch] leading-relaxed m-0">
              Search, filter, preview, then select your design. We'll finalize size, color, price & delivery on WhatsApp.
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 items-stretch sm:items-center justify-between my-4">
            <input
              type="text"
              className="w-full sm:w-auto sm:min-w-[210px] px-4 py-3 rounded-2xl border border-input bg-secondary/18 text-foreground placeholder:text-muted-foreground outline-none focus:border-primary/50 transition-colors"
              placeholder="Search designs (e.g., satin, gown, drape)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="w-full sm:w-auto px-4 py-3 rounded-2xl border border-input bg-secondary/18 text-foreground outline-none focus:border-primary/50 transition-colors cursor-pointer"
              value={categoryFilter}
              onChange={(e) => onCategoryChange(e.target.value)}
            >
              <option value="All">Category: All</option>
              <option value="Gown">Gown</option>
              <option value="Dress">Dress</option>
            </select>
            <Button variant="default" onClick={handleClearFilters} className="w-full sm:w-auto">
              Clear
            </Button>
          </div>
        </RevealOnScroll>

        {filteredDesigns.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDesigns.map((design, i) => (
              <RevealOnScroll key={design.id} delay={i * 50}>
                <DesignCard
                  design={design}
                  onSelect={handleSelect}
                  onPreview={setPreviewDesign}
                />
              </RevealOnScroll>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground mt-4">No designs found. Try a different search.</p>
        )}
      </div>

      <DesignModal
        design={previewDesign}
        onClose={() => setPreviewDesign(null)}
        onSelect={handleSelect}
      />
    </section>
  );
}
