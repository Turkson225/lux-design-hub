import { RevealOnScroll } from "@/components/RevealOnScroll";

interface CollectionsProps {
  onFilterChange: (filter: string) => void;
}

const collections = [
  {
    filter: "All",
    name: "All Designs",
    desc: "Browse every design in one place.",
    badge: "All",
  },
  {
    filter: "Gown",
    name: "Gowns",
    desc: "Formal silhouettes & evening wear.",
    badge: "Gown",
  },
  {
    filter: "Dress",
    name: "Dresses",
    desc: "Dinner, birthdays, classy outings.",
    badge: "Dress",
  },
];

export function Collections({ onFilterChange }: CollectionsProps) {
  const handleClick = (filter: string) => {
    onFilterChange(filter);
    document.getElementById("designs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="collections" className="py-14">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5 mb-5">
          <RevealOnScroll>
            <h2 className="text-xl tracking-[0.08em] uppercase text-foreground/92 font-bold m-0">Collections</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <p className="text-muted-foreground text-sm max-w-[80ch] leading-relaxed m-0">
              Tap a collection to filter designs below.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {collections.map((col, i) => (
            <RevealOnScroll key={col.filter} delay={i * 100}>
              <div
                className="card-surface card-surface-hover p-5 cursor-pointer"
                onClick={() => handleClick(col.filter)}
              >
                <p className="font-extrabold m-0">{col.name}</p>
                <p className="text-muted-foreground text-sm mt-2 mb-0">{col.desc}</p>
                <span className="inline-flex mt-3 text-xs px-2.5 py-1.5 rounded-full border border-foreground/12 bg-background/25 text-foreground/90">
                  {col.badge}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
