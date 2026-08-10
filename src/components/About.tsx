import Image from 'next/image';
import { profileImage } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className="bg-[#0b0b0b] px-6 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto h-[480px] w-full max-w-md overflow-hidden rounded-[2rem]">
          <Image src={profileImage} alt="Ritesh Gujrathi" fill className="object-cover" />
        </div>
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-brand-gold">About</p>
          <h2 className="mb-6 text-4xl font-semibold">Ritesh Gujrathi</h2>
          <p className="mb-4 text-lg text-gray-300">
            A storyteller behind the lens, blending emotional depth, cinematic composition, and timeless editing to document life’s most meaningful moments.
          </p>
          <p className="text-gray-400">
            From intimate weddings to large-scale celebrations, every frame is crafted with care and authenticity.
          </p>
        </div>
      </div>
    </section>
  );
}
