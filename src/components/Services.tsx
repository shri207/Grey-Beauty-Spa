import { motion } from "motion/react";

const services = [
  {
    category: "Hair Care",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop",
    items: ["Haircut", "Hair Styling", "Hair Coloring", "Hair Treatments", "Natural Hair Therapy"],
    startingPrice: "8"
  },
  {
    category: "Nail Studio",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop",
    items: ["Manicure", "Pedicure", "Gel Polish", "Nail Care"],
    startingPrice: "6"
  },
  {
    category: "Spa Treatments",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670&auto=format&fit=crop",
    items: ["Head Massage", "Shoulder Massage", "Relaxation Therapy", "Hair Wash"],
    startingPrice: "7"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-sand">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-[10px] tracking-[0.2em] text-warmgrey uppercase mb-4">Our Offering</h2>
            <h3 className="font-serif text-3xl md:text-[40px] font-light text-matte">Curated Services</h3>
          </div>
          <a href="#book" className="text-[10px] tracking-[0.1em] uppercase text-graphite hover:text-matte border-b border-graphite pb-1 transition-colors">
            View Full Menu
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="bg-stone group cursor-pointer border border-black/5 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.category}
                  className="w-full h-full object-cover grayscale contrast-110 transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />
              </div>
              <div className="p-8">
                <h4 className="font-serif text-[24px] font-light text-matte mb-6">{service.category}</h4>
                <ul className="space-y-3 mb-8">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-[13px] text-graphite tracking-[0.05em] uppercase">{item}</li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-6 border-t border-black/5">
                  <p className="text-[10px] tracking-[0.1em] uppercase text-warmgrey">Starting KD {service.startingPrice}</p>
                  <span className="text-xl text-matte font-light transition-transform duration-300 group-hover:translate-x-2">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
