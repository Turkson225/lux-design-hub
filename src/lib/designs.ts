export interface Design {
  id: string;
  name: string;
  category: "Dress" | "Gown";
  img: string;
  desc: string;
}

export const WHATSAPP_NUMBER = "233536856525";

export const DESIGNS: Design[] = [
  { id: "D01", name: "Design 01", category: "Dress", img: "/images/design-01.jpg", desc: "Luxury custom design — made to fit." },
  { id: "D02", name: "Design 02", category: "Gown", img: "/images/design-02.jpg", desc: "Luxury custom design — made to fit." },
  { id: "D03", name: "Design 03", category: "Dress", img: "/images/design-03.jpg", desc: "Luxury custom design — made to fit." },
  { id: "D04", name: "Design 04", category: "Gown", img: "/images/design-04.jpg", desc: "Luxury custom design — made to fit." },
  { id: "D05", name: "Design 05", category: "Gown", img: "/images/design-05.jpg", desc: "Luxury custom design — made to fit." },
  { id: "D06", name: "Design 06", category: "Dress", img: "/images/design-06.jpg", desc: "Luxury custom design — made to fit." },
  { id: "D07", name: "Design 07", category: "Gown", img: "/images/design-07.jpg", desc: "Luxury custom design — made to fit." },
  { id: "D08", name: "Design 08", category: "Dress", img: "/images/design-08.jpg", desc: "Luxury custom design — made to fit." },
  { id: "D09", name: "Design 09", category: "Gown", img: "/images/design-09.jpg", desc: "Luxury custom design — made to fit." },
  { id: "D10", name: "Design 10", category: "Dress", img: "/images/design-10.jpg", desc: "Luxury custom design — made to fit." },
  { id: "D11", name: "Design 11", category: "Gown", img: "/images/design-11.jpg", desc: "Luxury custom design — made to fit." },
];
