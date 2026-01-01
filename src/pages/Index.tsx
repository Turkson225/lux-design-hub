import { useState } from "react";
import { Design } from "@/lib/designs";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Collections } from "@/components/Collections";
import { DesignGallery } from "@/components/DesignGallery";
import { Process } from "@/components/Process";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);

  const handleSelectDesign = (design: Design) => {
    setSelectedDesign(design);
  };

  const handleClearSelection = () => {
    setSelectedDesign(null);
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Collections onFilterChange={setCategoryFilter} />
        <DesignGallery
          categoryFilter={categoryFilter}
          onCategoryChange={setCategoryFilter}
          onSelectDesign={handleSelectDesign}
        />
        <Process />
        <Reviews />
        <FAQ />
        <Contact selectedDesign={selectedDesign} onClearSelection={handleClearSelection} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Index;
