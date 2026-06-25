import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const steps = [
  { id: "01", title: "Arrival", desc: "Step into our serene, architectural space and leave the city behind." },
  { id: "02", title: "Consultation", desc: "Personalized discussion to understand your unique beauty needs." },
  { id: "03", title: "Treatment", desc: "Expert care using premium products in a relaxed environment." },
  { id: "04", title: "Relaxation", desc: "Unwind with our signature touches during and after service." },
  { id: "05", title: "Final Styling", desc: "Emerge refreshed, styled, and beautifully confident." },
];

export function ExperienceFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xOffset = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section id="experience" className="py-24 lg:py-32 bg-stone overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
        <h2 className="text-[10px] tracking-[0.2em] text-warmgrey uppercase mb-4">The Journey</h2>
        <h3 className="font-serif text-3xl md:text-[40px] font-light text-matte">Experience Flow</h3>
      </div>

      <div className="pl-6 md:pl-[max(1.5rem,calc((100%-80rem)/2))]">
        <motion.div 
          style={{ x: xOffset }}
          className="flex gap-8 md:gap-16 w-max pb-12"
        >
          {steps.map((step, idx) => (
            <div key={idx} className="w-[280px] md:w-[400px] flex-shrink-0 relative">
              <div className="h-[1px] w-full bg-black/5 absolute top-6 left-0 -z-10" />
              <div className="w-12 h-12 rounded-full bg-stone flex items-center justify-center border border-black/10 text-xs text-matte font-serif mb-8 shadow-sm">
                {step.id}
              </div>
              <h4 className="font-serif text-[24px] font-light text-matte mb-4">{step.title}</h4>
              <p className="text-base text-graphite font-light leading-[1.6] pr-8">{step.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
