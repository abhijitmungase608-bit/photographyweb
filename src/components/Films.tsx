import { films } from '@/lib/data';

export default function Films() {
  return (
    <section id="films" className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-brand-gold">Films</p>
          <h2 className="text-4xl font-semibold">Cinematic short films and highlights.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {films.map((video) => (
            <div key={video.id} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <video controls className="h-64 w-full object-cover">
                <source src={video.img} type="video/mp4" />
              </video>
              <div className="p-4 text-center text-sm uppercase tracking-[0.25em] text-gray-300">
                {video.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
