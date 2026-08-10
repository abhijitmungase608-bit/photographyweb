import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-4 md:px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
        
        {/* ========== LEFT SIDE: Info ========== */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-brand-brown text-sm font-medium uppercase tracking-[0.15em]">
              Contact
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-dark leading-tight">
              Let’s talk about your <br /> next celebration.
            </h2>
          </div>
          
          <p className="text-brand-dark/70 text-base md:text-lg leading-relaxed max-w-md">
            Reach out for availability, packages, or a custom cinematic experience. We respond within 24 hours.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4">
              <Mail className="text-brand-brown shrink-0" size={20} />
              <span className="text-brand-dark/80 text-sm md:text-base">riteshgujarathi7@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-brand-brown shrink-0" size={20} />
              <span className="text-brand-dark/80 text-sm md:text-base">+91 93702 43133</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-brand-brown shrink-0" size={20} />
              <span className="text-brand-dark/80 text-sm md:text-base">Ahilyanagar, Pune, India</span>
            </div>
          </div>
        </div>

        {/* ========== RIGHT SIDE: Form ========== */}
        <div className="bg-white/50 border border-brand-brown/10 rounded-2xl p-6 md:p-8 shadow-sm">
          <form className="grid gap-4">
            <div>
              <label className="text-sm font-medium text-brand-dark/70 mb-1 block">Name</label>
              <input 
                type="text" 
                placeholder="Your full name" 
                className="w-full px-4 py-3 bg-brand-cream border border-brand-brown/20 rounded-lg focus:outline-none focus:border-brand-brown transition-colors text-brand-dark placeholder:text-brand-dark/30"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-brand-dark/70 mb-1 block">Email</label>
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="w-full px-4 py-3 bg-brand-cream border border-brand-brown/20 rounded-lg focus:outline-none focus:border-brand-brown transition-colors text-brand-dark placeholder:text-brand-dark/30"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-brand-dark/70 mb-1 block">Message</label>
              <textarea 
                rows={4} 
                placeholder="Tell us about your vision, event, or any questions..." 
                className="w-full px-4 py-3 bg-brand-cream border border-brand-brown/20 rounded-lg focus:outline-none focus:border-brand-brown transition-colors text-brand-dark placeholder:text-brand-dark/30 resize-none"
              />
            </div>
            <button 
              type="submit"
              className="w-full py-3 bg-brand-brown text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-sm"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}