import { motion } from "motion/react";

export function About() {
  const stats = [
    { label: "Happy Clients", value: "5000+" },
    { label: "Beauty Professionals", value: "12+" },
    { label: "Years Experience", value: "8+" },
    { label: "Customer Rating", value: "4.5★" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-stone relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Block */}
          <div className="relative h-[600px] w-full overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop"
                alt="Spa details"
                className="w-full h-full object-cover grayscale contrast-110"
              />
            </motion.div>
          </div>

          {/* Text Block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif text-3xl md:text-[40px] font-light text-matte leading-[1.2] mb-8">
              A thoughtfully designed space where beauty and relaxation come together.
            </h2>
            <p className="text-graphite text-base font-light leading-[1.6] mb-16 max-w-[400px]">
              From hair care to nail treatments, every experience at Grey Beauty Spa is focused on comfort, precision, and meticulous attention to detail.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-black/5">
              {stats.map((stat, i) => (
                <div key={i} className={`flex flex-col justify-center items-center py-8 ${i !== stats.length - 1 ? 'lg:border-r border-black/5' : ''} ${i % 2 === 0 ? 'border-r border-black/5' : ''} ${i < 2 ? 'border-b lg:border-b-0 border-black/5' : ''}`}>
                  <p className="font-serif text-[24px] text-matte mb-1">{stat.value}</p>
                  <p className="text-[10px] tracking-[0.1em] uppercase text-warmgrey text-center">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
