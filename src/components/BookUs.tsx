export default function BookUs() {
  return (
    <section className="bg-[#111111] px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-3xl border border-brand-gold/20 bg-brand-cream p-10 text-black">
        <p className="mb-3 text-sm uppercase tracking-[0.4em] text-brand-gold">Book us</p>
        <h2 className="mb-6 text-3xl font-semibold">Let’s create something unforgettable.</h2>
        <form className="grid gap-4 md:grid-cols-2">
          <input className="rounded-lg border border-gray-300 p-3" placeholder="Your name" />
          <input className="rounded-lg border border-gray-300 p-3" placeholder="Email" />
          <input className="rounded-lg border border-gray-300 p-3 md:col-span-2" placeholder="Wedding date / event" />
          <textarea className="rounded-lg border border-gray-300 p-3 md:col-span-2" rows={5} placeholder="Tell us about your story" />
          <button className="rounded-lg bg-black px-6 py-3 font-medium text-white md:col-span-2">Send enquiry</button>
        </form>
      </div>
    </section>
  );
}
