import { RevealOnScroll } from "@/components/RevealOnScroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Select a design, then go to Contact and send your request on WhatsApp. We confirm size, color, and price before production.",
  },
  {
    question: "Do you do custom designs?",
    answer:
      "Yes. Send a reference photo or describe what you want. We'll guide you on fabric and finishing for the best result.",
  },
  {
    question: "How long does it take?",
    answer:
      "Timeline depends on the design and workload. For urgent events, tell us your date and we'll confirm if we can meet it.",
  },
  {
    question: "Do you deliver?",
    answer:
      "Yes. We deliver within Ghana and can arrange international delivery depending on the location.",
  },
  {
    question: "What if my size is not correct?",
    answer:
      "We confirm measurements carefully before production. If you're unsure, we'll guide you on how to measure accurately.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-14">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5 mb-5">
          <RevealOnScroll>
            <h2 className="text-xl tracking-[0.08em] uppercase text-foreground/92 font-bold m-0">FAQ</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <p className="text-muted-foreground text-sm max-w-[80ch] leading-relaxed m-0">
              These answers build trust (important for online orders).
            </p>
          </RevealOnScroll>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <RevealOnScroll key={i} delay={i * 50}>
              <AccordionItem
                value={`item-${i}`}
                className="border border-border bg-secondary/18 rounded-2xl px-4 py-1 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="font-bold tracking-tight hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </RevealOnScroll>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
