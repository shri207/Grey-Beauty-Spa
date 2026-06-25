import { motion } from "motion/react";

const images = [
  "https://images.unsplash.com/photo-1521590832167-7bfc17484d20?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600334129128-685054ea4ba3?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2670&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2670&auto=format&fit=crop"
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-matte text-stone">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <h2 className="text-[10px] tracking-[0.2em] text-stone/50 uppercase mb-4">Atmosphere</h2>
            <h3 className="font-serif text-3xl md:text-[40px] font-light">The Space</h3>
          </div>
          <div className="flex gap-4 text-[10px] tracking-[0.1em] uppercase text-stone/70 overflow-x-auto pb-4 hide-scrollbar w-full md:w-auto">
            <button className="text-stone whitespace-nowrap">Interior</button>
            <button className="hover:text-stone transition-colors whitespace-nowrap">Styling</button>
            <button className="hover:text-stone transition-colors whitespace-nowrap">Treatments</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-6">
        {images.map((img, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative overflow-hidden group ${idx === 0 || idx === 3 ? "md:aspect-[4/3]" : "md:aspect-square"} aspect-square`}
          >
            <img 
              src={img} 
              alt="Gallery item"
              className="w-full h-full object-cover grayscale contrast-110 transition-transform duration-[2s] group-hover:scale-105"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
