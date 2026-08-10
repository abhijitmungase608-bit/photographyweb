"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { 
  ChevronLeft, ChevronRight, Play, MapPin, Phone, Mail, Menu, X 
} from "lucide-react";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { galleryImages, stories as weddingStories, films as weddingFilms } from "@/lib/data";

// --- Fake Data (Aap actual images/videos yahan daaloge) ---
const navLinks = ["Home", "About Us", "Portfolio", "Stories", "Films", "Book Us", "Contact Us"];
const portfolioHighlights = galleryImages.slice(0, 6);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark selection:bg-brand-brown/20">
      
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur-sm border-b border-brand-brown/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo placeholder - Apna logo yahan daalo */}
            <div className="text-brand-brown font-serif text-2xl font-bold tracking-tight">
              Ritesh <span className="text-brand-gold">Gujrathi</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <Link 
                key={link} 
                href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
                className="hover:text-brand-brown/80 transition-colors relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-brown group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-brand-dark">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-brand-cream border-b border-brand-brown/10 py-4 px-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link} href="#" className="text-base font-medium hover:text-brand-brown transition-colors">
                {link}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-24">
        
        {/* ================= HERO ================= */}
        <section className="relative rounded-2xl overflow-hidden h-[600px] md:h-[700px] flex items-center justify-center text-center border border-brand-brown/10 shadow-sm bg-black/5">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80" 
              alt="Hero" 
              fill 
              className="object-cover brightness-75" 
            />
          </div>
          <div className="relative z-10 max-w-3xl px-4 text-white">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-md">
              Moments That Last Forever
            </h1>
            <p className="text-lg md:text-xl font-light tracking-wide opacity-90 drop-shadow-md mb-8">
              Professional photography that preserves your cherished memories.
            </p>
            <Link 
              href="#stories" 
              className="px-8 py-3 bg-brand-brown/80 hover:bg-brand-brown text-white rounded-full transition-colors font-medium border border-transparent"
            >
              Explore Stories
            </Link>
          </div>
          
          <button className="absolute left-4 p-2 bg-white/20 backdrop-blur rounded-full text-white hover:bg-white/40 transition-colors"><ChevronLeft /></button>
          <button className="absolute right-4 p-2 bg-white/20 backdrop-blur rounded-full text-white hover:bg-white/40 transition-colors"><ChevronRight /></button>
        </section>

        {/* ================= PORTFOLIO ================= */}
        <section id="portfolio" className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-2">Portfolio</h2>
            <div className="w-16 h-0.5 bg-brand-brown mx-auto mb-4" />
            <p className="text-brand-dark/70 font-light text-lg max-w-2xl mx-auto">
              A glimpse of the wedding moments and emotions captured through our lens.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioHighlights.map((item) => (
              <div key={item.id} className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-brand-brown/10 shadow-sm">
                <Image src={item.src} alt={item.alt} fill className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-sm uppercase tracking-[0.25em] text-white">
                  {item.category}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= STORIES ================= */}
        <section id="stories">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-2">Stories</h2>
            <div className="w-16 h-0.5 bg-brand-brown mx-auto mb-4" />
            <p className="text-brand-dark/70 font-light text-lg max-w-2xl mx-auto">
              A Love Story Worth Capturing. A wedding is more than a celebration. It's a beautiful story of love, connection, and new beginnings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weddingStories.map((story) => (
              <div key={story.id} className="bg-white border border-brand-brown/10 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
                <div className="relative h-64 w-full">
                  <Image src={story.img} alt={story.couple} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-2xl font-bold text-brand-dark mb-1">{story.couple}</h3>
                  <p className="text-brand-brown/70 text-sm mb-4">{story.location}</p>
                  <p className="text-brand-dark/60 text-sm leading-relaxed mb-6 line-clamp-3">
                    Shyam and Sneha met during the lockdown. It was love at first sight for Sneha...
                  </p>
                  <Link 
                    href="#" 
                    className="mt-auto inline-block px-6 py-2 border border-brand-brown/30 text-brand-brown rounded-full text-sm hover:bg-brand-brown hover:text-white transition-colors text-center"
                  >
                    View Story
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FILMS ================= */}
        <section id="films">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-2">Timeless Love Captured on Film</h2>
            <div className="w-16 h-0.5 bg-brand-brown mx-auto mb-4" />
            <p className="text-brand-dark/70 font-light text-lg max-w-2xl mx-auto">
              Cinematic love stories that capture the emotion, joy, and beauty of your special day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {weddingFilms.map((film) => (
              <div key={film.id} className="relative group aspect-video rounded-xl overflow-hidden border border-brand-brown/10 shadow-sm cursor-pointer">
                <Image src={film.img} alt={film.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mb-2">
                    <Play className="fill-white ml-1" size={20} />
                  </div>
                  <h3 className="font-serif text-xl font-bold tracking-wider uppercase">{film.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= BOOK US (FORM) ================= */}
        <section id="book-us" className="bg-white/50 rounded-2xl p-8 md:p-12 border border-brand-brown/10 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-brown">Wedding Enquiry Form</h2>
          </div>
          
          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium block mb-1">Groom Name</label>
                <input type="text" className="w-full px-4 py-3 bg-brand-cream border border-brand-brown/20 rounded-lg focus:outline-none focus:border-brand-brown transition-colors" />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Bride Name</label>
                <input type="text" className="w-full px-4 py-3 bg-brand-cream border border-brand-brown/20 rounded-lg focus:outline-none focus:border-brand-brown transition-colors" />
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium block mb-1">Phone Number</label>
              <input type="tel" className="w-full px-4 py-3 bg-brand-cream border border-brand-brown/20 rounded-lg focus:outline-none focus:border-brand-brown transition-colors" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium block mb-1">Event Start Date</label>
                <input type="date" className="w-full px-4 py-3 bg-brand-cream border border-brand-brown/20 rounded-lg focus:outline-none focus:border-brand-brown transition-colors" />
              </div>
              <div>
                <label className="text-sm font-medium block mb-1">Event End Date</label>
                <input type="date" className="w-full px-4 py-3 bg-brand-cream border border-brand-brown/20 rounded-lg focus:outline-none focus:border-brand-brown transition-colors" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium block mb-1">Tell us more about your wedding thoughts</label>
              <textarea rows={4} className="w-full px-4 py-3 bg-brand-cream border border-brand-brown/20 rounded-lg focus:outline-none focus:border-brand-brown transition-colors resize-none" placeholder="Share your vision, preferences, or any special requests..."></textarea>
            </div>

            <button className="w-full py-4 bg-brand-brown text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
              Submit Enquiry
            </button>
          </form>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about-us" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-brand-brown/10 shadow-sm bg-brand-brown/5">
              <Image 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80" 
                alt="Founder" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="font-serif text-xl font-bold text-brand-dark uppercase tracking-wider">Ritesh Gujrathi</h3>
              <p className="text-brand-brown/70 text-sm uppercase tracking-widest">Founder, Ritesh Gujrathi Photography</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center md:text-left">
              <h2 className="font-serif text-4xl font-bold text-brand-dark mb-2">Meet Our Founder</h2>
              <div className="w-16 h-0.5 bg-brand-brown mx-auto md:mx-0" />
            </div>
            
            <p className="text-brand-dark/70 leading-relaxed text-lg">
              At the heart of our venture is Ritesh Gujrathi, a visionary with a keen eye for detail and an unwavering passion for storytelling through the lens. With every click, he aims not just to capture an image, but to freeze a moment in time.
            </p>
            <p className="text-brand-dark/70 leading-relaxed">
              Founded in 2017, our photography journey began with a simple yet powerful vision: to create timeless, artistic memories that last a lifetime.
            </p>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact-us" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-white/50 rounded-2xl p-8 md:p-12 border border-brand-brown/10 shadow-sm">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-brand-dark mb-4">Contact Us</h2>
            <div className="flex gap-4">
              <Mail className="text-brand-brown shrink-0" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-brand-dark/70">info@riteshgujrathi.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="text-brand-brown shrink-0" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-brand-dark/70">+91 9193549062 <br /> +91 9190995340</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="text-brand-brown shrink-0" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-brand-dark/70 text-sm">Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-brand-dark mb-2">Have questions? Get in touch!</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-brand-cream border border-brand-brown/20 rounded-lg focus:outline-none focus:border-brand-brown transition-colors" />
              <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-brand-cream border border-brand-brown/20 rounded-lg focus:outline-none focus:border-brand-brown transition-colors" />
              <input type="tel" placeholder="Phone" className="w-full px-4 py-3 bg-brand-cream border border-brand-brown/20 rounded-lg focus:outline-none focus:border-brand-brown transition-colors" />
              <textarea rows={4} placeholder="Message" className="w-full px-4 py-3 bg-brand-cream border border-brand-brown/20 rounded-lg focus:outline-none focus:border-brand-brown transition-colors resize-none"></textarea>
              <button className="w-full py-3 bg-brand-brown text-white rounded-lg font-medium hover:opacity-90 transition-opacity">Send Message</button>
            </form>
          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-brand-dark/5 border-t border-brand-brown/10 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="text-brand-brown font-serif text-xl font-bold">Ritesh Gujrathi</div>
          </div>
          <div className="flex gap-4 text-brand-dark/60">
            <FaInstagram size={20} className="hover:text-brand-brown cursor-pointer transition-colors" />
            <FaFacebook size={20} className="hover:text-brand-brown cursor-pointer transition-colors" />
            <FaYoutube size={20} className="hover:text-brand-brown cursor-pointer transition-colors" />
            <FaTwitter size={20} className="hover:text-brand-brown cursor-pointer transition-colors" />
          </div>
          <p className="text-sm text-brand-dark/50">Copyright © 2025 Ritesh Gujrathi Photography</p>
        </div>
      </footer>
    </div>
  );
}