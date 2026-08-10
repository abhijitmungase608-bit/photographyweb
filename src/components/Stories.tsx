import Image from 'next/image';
import { galleryImages } from '@/lib/data';

export default function Stories() {
  const previewImages = galleryImages.slice(0, 8);

  return (
    <section id="stories" className="bg-[#0f0f0f] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-brand-gold">Stories</p>
          <h2 className="text-4xl font-semibold">A gallery of emotions and celebration.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {previewImages.map((item) => (
            <div key={item.id} className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image src={item.src} alt={item.category} fill className="object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-sm uppercase tracking-[0.25em] text-white">
                {item.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
