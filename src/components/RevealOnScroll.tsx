import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function RevealOnScroll({ children, className, delay = 0 }: RevealOnScrollProps) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={cn("reveal", isVisible && "in", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
