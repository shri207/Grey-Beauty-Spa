import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col lg:grid lg:grid-cols-2 pt-24 lg:pt-0">
      {/* Left Content */}
      <div className="flex flex-col justify-center px-6 lg:px-[60px] py-16 lg:py-20 bg-stone z-10 lg:border-r lg:border-black/5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <h2 className="text-xs tracking-[0.2em] text-warmgrey uppercase mb-6">
            Grey Beauty Spa
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-[72px] font-serif font-light text-matte leading-[0.9] mb-8">
            Quiet Luxury.<br />
            Beautiful Results.
          </h1>
          <p className="max-w-[400px] text-graphite text-base font-light leading-[1.6] mb-12">
            Discover a calming beauty experience offering hair care, spa treatments, nail services and personalized wellness in a peaceful environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#book"
              className="px-8 py-4 bg-matte text-white text-xs uppercase tracking-[0.1em] text-center transition-all duration-300 hover:opacity-90"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-transparent border border-matte text-matte text-xs uppercase tracking-[0.1em] text-center transition-all duration-300 hover:bg-black/5"
            >
              Discover Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Image */}
      <div className="relative min-h-[60vh] lg:min-h-screen bg-sand overflow-hidden flex items-center justify-center">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2670&auto=format&fit=crop"
            alt="Minimalist Spa Interior"
            className="w-full h-full object-cover grayscale contrast-110"
          />
        </motion.div>

        {/* Floating Info Blocks */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-10 right-10 flex flex-col gap-3"
        >
          <div className="bg-white/90 backdrop-blur-[10px] px-6 py-4 rounded shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <div className="text-[10px] uppercase tracking-[0.1em] text-warmgrey mb-1">Client Rating</div>
            <div className="text-sm font-semibold text-matte">★★★★★ 4.5 (83+ Reviews)</div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-[10px] px-6 py-4 rounded shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <div className="text-[10px] uppercase tracking-[0.1em] text-warmgrey mb-1">Current Status</div>
            <div className="text-sm font-semibold text-matte">Open Until 10 PM</div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-[10px] px-6 py-4 rounded shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <div className="text-[10px] uppercase tracking-[0.1em] text-warmgrey mb-1">Curated For</div>
            <div className="text-sm font-semibold text-matte">Women-Owned Business</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
