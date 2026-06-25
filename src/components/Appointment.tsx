import { useState, FormEvent } from "react";
import { motion } from "motion/react";

export function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",
    service: "",
    date: "",
    time: "",
    messageText: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Hello, I would like to book an appointment.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Gender: ${formData.gender}
Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}
Message: ${formData.messageText}

Please confirm my appointment.`;

    window.open(`https://wa.me/96562222807?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="book" className="py-24 lg:py-32 bg-sand">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[10px] tracking-[0.2em] text-warmgrey uppercase mb-4">Reservation</h2>
          <h3 className="font-serif text-3xl md:text-[40px] font-light text-matte">Book Appointment</h3>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-stone p-8 md:p-12 border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.1em] text-graphite">Full Name *</label>
              <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-transparent border-b border-black/10 py-3 text-matte focus:outline-none focus:border-matte transition-colors rounded-none font-light" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.1em] text-graphite">Mobile Number *</label>
              <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-transparent border-b border-black/10 py-3 text-matte focus:outline-none focus:border-matte transition-colors rounded-none font-light" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.1em] text-graphite">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-black/10 py-3 text-matte focus:outline-none focus:border-matte transition-colors rounded-none font-light" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.1em] text-graphite">Gender *</label>
              <select required name="gender" value={formData.gender} onChange={handleChange} className="w-full bg-transparent border-b border-black/10 py-3 text-matte focus:outline-none focus:border-matte transition-colors rounded-none appearance-none font-light">
                <option value="" disabled></option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.1em] text-graphite">Service *</label>
              <select required name="service" value={formData.service} onChange={handleChange} className="w-full bg-transparent border-b border-black/10 py-3 text-matte focus:outline-none focus:border-matte transition-colors rounded-none appearance-none font-light">
                <option value="" disabled></option>
                <option value="Hair Care">Hair Care</option>
                <option value="Nail Studio">Nail Studio</option>
                <option value="Spa Treatment">Spa Treatment</option>
                <option value="Everyday Care Package">Everyday Care Package</option>
                <option value="Grey Signature Package">Grey Signature Package</option>
                <option value="Complete Escape Package">Complete Escape Package</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.1em] text-graphite">Date *</label>
                <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-transparent border-b border-black/10 py-3 text-matte focus:outline-none focus:border-matte transition-colors rounded-none font-light" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.1em] text-graphite">Time *</label>
                <input required type="time" name="time" value={formData.time} onChange={handleChange} className="w-full bg-transparent border-b border-black/10 py-3 text-matte focus:outline-none focus:border-matte transition-colors rounded-none font-light" />
              </div>
            </div>
          </div>
          
          <div className="space-y-2 mb-10">
            <label className="text-[10px] uppercase tracking-[0.1em] text-graphite">Message (Optional)</label>
            <textarea name="messageText" value={formData.messageText} onChange={handleChange} rows={3} className="w-full bg-transparent border-b border-black/10 py-3 text-matte focus:outline-none focus:border-matte transition-colors resize-none rounded-none font-light" />
          </div>

          <button type="submit" className="w-full py-5 bg-matte text-white uppercase tracking-[0.1em] text-xs transition-all duration-300 hover:opacity-90">
            Confirm via WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}
