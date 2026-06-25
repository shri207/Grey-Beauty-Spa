import { Instagram, Facebook, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section className="py-0 flex flex-col md:flex-row min-h-[60vh] bg-stone border-t border-black/5">
      <div className="flex-1 p-12 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-black/5">
        <h2 className="font-serif text-3xl md:text-[40px] font-light text-matte mb-12">Visit Grey</h2>
        
        <div className="space-y-10">
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-warmgrey mb-3">Location</h4>
            <p className="text-base font-light text-graphite leading-[1.6]">154 Street<br />Kuwait City, Kuwait</p>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-warmgrey mb-3">Contact</h4>
            <p className="text-base font-light text-graphite leading-[1.6]">Phone: +965 6222 2807</p>
            <p className="text-base font-light text-graphite leading-[1.6]">WhatsApp: +965 6222 2807</p>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-warmgrey mb-3">Hours</h4>
            <p className="text-base font-light text-graphite leading-[1.6]">Daily: 10:00 AM – 10:00 PM</p>
          </div>

          <div className="pt-8 flex gap-6">
            <a href="#" className="text-graphite hover:text-matte transition-colors"><Instagram size={20} strokeWidth={1.5} /></a>
            <a href="#" className="text-graphite hover:text-matte transition-colors"><Facebook size={20} strokeWidth={1.5} /></a>
            <a href="https://wa.me/96562222807" target="_blank" rel="noreferrer" className="text-graphite hover:text-matte transition-colors"><MessageCircle size={20} strokeWidth={1.5} /></a>
          </div>
        </div>
      </div>
      
      <div className="flex-1 relative min-h-[400px]">
        {/* Placeholder for map, using a styled image that looks like a clean architectural map or abstract representation to maintain aesthetic */}
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" 
          alt="Location context" 
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-110 opacity-80"
        />
        <div className="absolute inset-0 bg-stone/10" />
      </div>
    </section>
  );
}
