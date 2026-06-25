import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Do I need an appointment?", a: "While we highly recommend booking in advance to secure your preferred time and specialist, we do accommodate walk-ins subject to availability." },
  { q: "Do you provide natural hair treatments?", a: "Yes, we specialize in a variety of natural hair therapies designed to restore, nourish, and strengthen your hair." },
  { q: "What spa services are available?", a: "Our spa treatments include head massages, shoulder massages, relaxation therapy, and luxurious hair wash experiences." },
  { q: "Are walk-ins accepted?", a: "Yes, walk-ins are welcome, though appointments are prioritized. We will do our best to accommodate you." },
  { q: "What are your business hours?", a: "We are open daily from 10 AM to 10 PM." },
  { q: "Which payment methods are accepted?", a: "We accept Cash, K-Net, Visa, and Mastercard." }
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-stone">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[10px] tracking-[0.2em] text-warmgrey uppercase mb-4">Information</h2>
          <h3 className="font-serif text-3xl md:text-[40px] font-light text-matte">Common Questions</h3>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="border-b border-black/5">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between py-6 text-left transition-colors hover:bg-black/5 px-4 -mx-4 rounded"
                >
                  <span className="font-serif text-[20px] text-matte font-light pr-8">{faq.q}</span>
                  <span className="text-warmgrey flex-shrink-0">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden px-4 -mx-4"
                    >
                      <p className="pb-6 text-graphite text-base font-light leading-[1.6]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
