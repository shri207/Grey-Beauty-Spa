import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-matte text-stone pt-24 pb-12 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-[24px] font-light tracking-[0.1em] uppercase mb-6">Grey Beauty Spa</h2>
            <p className="text-stone/60 text-sm font-light max-w-sm mb-8 leading-[1.6]">
              Quiet Luxury. Beautiful Results. A premium beauty spa experience in Kuwait City.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-stone/40 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-[13px] tracking-[0.05em] uppercase text-stone/80 hover:text-stone transition-colors font-light">Services</a></li>
              <li><a href="#packages" className="text-[13px] tracking-[0.05em] uppercase text-stone/80 hover:text-stone transition-colors font-light">Packages</a></li>
              <li><a href="#gallery" className="text-[13px] tracking-[0.05em] uppercase text-stone/80 hover:text-stone transition-colors font-light">Gallery</a></li>
              <li><a href="#book" className="text-[13px] tracking-[0.05em] uppercase text-stone/80 hover:text-stone transition-colors font-light">Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-stone/40 mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[13px] tracking-[0.05em] uppercase text-stone/80 hover:text-stone transition-colors font-light">Instagram</a></li>
              <li><a href="#" className="text-[13px] tracking-[0.05em] uppercase text-stone/80 hover:text-stone transition-colors font-light">Facebook</a></li>
              <li><a href="https://wa.me/96562222807" className="text-[13px] tracking-[0.05em] uppercase text-stone/80 hover:text-stone transition-colors font-light">WhatsApp</a></li>
            </ul>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-stone/10 gap-6">
          <p className="text-stone/40 text-[10px] uppercase tracking-[0.1em]">
            © {new Date().getFullYear()} Grey Beauty Spa. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.1em] text-stone/60 hover:text-stone transition-colors"
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
