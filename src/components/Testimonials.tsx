import { motion } from "motion/react";

const testimonials = [
  {
    name: "نوال البدر",
    text: "The atmosphere and beautiful views make every visit relaxing. The staff are always friendly and welcoming.",
    rating: 5
  },
  {
    name: "Taif Alshammari",
    text: "Wonderful experience from beginning to end. Everyone was kind, professional and attentive.",
    rating: 5
  },
  {
    name: "Farah A",
    text: "Great promotional package and excellent service. A relaxing experience with quality treatments.",
    rating: 5
  },
  {
    name: "Sarah M.",
    text: "The interior alone puts you at ease. The pedicure and head massage were exactly what I needed after a long week.",
    rating: 5
  },
  {
    name: "Laila K.",
    text: "I booked the Complete Escape and it truly lived up to its name. Phenomenal attention to detail.",
    rating: 5
  },
  {
    name: "Reem Al-Sabah",
    text: "My go-to spot in Kuwait City for hair treatments. The natural therapies have transformed my hair.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
        <h2 className="text-[10px] tracking-[0.2em] text-warmgrey uppercase mb-4">Client Stories</h2>
        <h3 className="font-serif text-3xl md:text-[40px] font-light text-matte">Words from our Guests</h3>
      </div>

      <div className="flex overflow-x-auto hide-scrollbar pl-6 md:pl-[max(1.5rem,calc((100%-80rem)/2))] pb-12 gap-6 md:gap-8">
        {testimonials.map((test, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="min-w-[300px] md:min-w-[400px] bg-white/50 backdrop-blur-md p-8 md:p-12 border border-black/5 flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex gap-1 text-matte mb-8 text-sm">
                {[...Array(test.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="font-serif text-xl md:text-2xl font-light text-matte leading-[1.6] mb-8">
                "{test.text}"
              </p>
            </div>
            <p className="text-[10px] tracking-[0.1em] uppercase text-warmgrey">{test.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
