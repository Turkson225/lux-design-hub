import { RevealOnScroll } from "@/components/RevealOnScroll";

const reviews = [
  {
    quote: '"The finishing is clean and the fit is perfect. I felt expensive."',
    who: "Verified customer",
  },
  {
    quote: '"Exactly what I wanted. Communication was fast and professional."',
    who: "Verified customer",
  },
  {
    quote: '"Luxury look. People kept asking where I got it from."',
    who: "Verified customer",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-14">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5 mb-5">
          <RevealOnScroll>
            <h2 className="text-xl tracking-[0.08em] uppercase text-foreground/92 font-bold m-0">Reviews</h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <p className="text-muted-foreground text-sm max-w-[80ch] leading-relaxed m-0">
              Replace these with real customer reviews anytime.
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, i) => (
            <RevealOnScroll key={i} delay={i * 100}>
              <div className="card-surface p-5 relative overflow-hidden h-full">
                <div className="absolute inset-[-1px] gradient-overlay-primary pointer-events-none" />
                <div className="relative z-10">
                  <p className="text-foreground/90 leading-relaxed m-0">{review.quote}</p>
                  <div className="text-xs text-muted-foreground tracking-[0.08em] uppercase mt-3">
                    {review.who}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
