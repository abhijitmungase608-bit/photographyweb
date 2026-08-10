import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
      <Image
        src="/images/ritesh-profile.jpg"
        alt="Ritesh Gujrathi"
        fill
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
      <div className="relative z-10 max-w-3xl px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-brand-gold">Cinematic storytelling</p>
        <h1 className="mb-6 text-5xl font-semibold leading-tight sm:text-7xl">
          Timeless frames for the love you live.
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-200">
          Weddings, pre-weddings, events, and drone visuals shaped into elegant cinematic stories.
        </p>
      </div>
    </section>
  );
}
