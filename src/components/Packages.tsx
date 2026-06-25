import { motion } from "motion/react";

const packages = [
  {
    name: "Everyday Care",
    price: "15",
    items: ["Hair Wash", "Blow Dry", "Basic Manicure"],
    highlight: false
  },
  {
    name: "Grey Signature",
    price: "25",
    items: ["Natural Hair Treatment", "Pedicure", "Head Massage"],
    highlight: true
  },
  {
    name: "Complete Escape",
    price: "45",
    items: ["Hair Treatment", "Spa Therapy", "Manicure", "Pedicure", "Luxury Styling"],
    highlight: false
  }
];

export function Packages() {
  return (
    <section id="packages" className="py-24 lg:py-32 bg-stone">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[10px] tracking-[0.2em] text-warmgrey uppercase mb-4">Curated Experiences</h2>
          <h3 className="font-serif text-3xl md:text-[40px] font-light text-matte">Treatment Packages</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={`p-10 border ${
                pkg.highlight 
                  ? "bg-matte text-stone border-matte py-14 shadow-2xl" 
                  : "bg-white/50 backdrop-blur-md text-matte border-black/5"
              }`}
            >
              <h4 className="font-serif text-[24px] font-light mb-2">{pkg.name}</h4>
              <p className={`font-serif text-3xl md:text-[40px] font-light mb-8 ${pkg.highlight ? "text-stone" : "text-matte"}`}>
                KD {pkg.price}
              </p>
              
              <ul className="space-y-4 mb-10">
                {pkg.items.map((item, i) => (
                  <li key={i} className={`text-[13px] tracking-[0.05em] uppercase flex items-center gap-3 ${pkg.highlight ? "text-stone/80" : "text-graphite"}`}>
                    <span className="w-1 h-1 rounded-full bg-current opacity-50" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className={`block text-center w-full py-4 text-[10px] uppercase tracking-[0.1em] transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-stone text-matte hover:bg-sand hover:opacity-90"
                    : "bg-matte text-stone hover:bg-graphite"
                }`}
              >
                Book Package
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
