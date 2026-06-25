import { motion } from "motion/react";
import { Check } from "lucide-react";

const features = [
  "Women-Owned Business",
  "Experienced Professionals",
  "Relaxing Environment",
  "Premium Products",
  "Personalized Care",
  "Extended Business Hours"
];

export function Features() {
  return (
    <section className="py-24 bg-matte text-stone">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[10px] tracking-[0.2em] text-stone/50 uppercase mb-4">Why Choose Grey</h2>
            <h3 className="font-serif text-3xl md:text-[40px] font-light mb-8">A Higher Standard of Beauty Care</h3>
            <p className="text-stone/70 font-light text-base leading-[1.6] mb-12 max-w-[400px]">
              Every detail of Grey Beauty Spa has been meticulously crafted to provide a sanctuary for our guests. We believe in delivering exceptional results without compromising on the serenity of your experience.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 p-6 border border-stone/10 bg-transparent transition-all duration-300 hover:bg-stone/5"
              >
                <div className="w-8 h-8 rounded-full bg-stone flex items-center justify-center flex-shrink-0 text-matte">
                  <Check size={16} strokeWidth={2.5} />
                </div>
                <p className="font-light tracking-[0.05em] text-[13px] uppercase">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
