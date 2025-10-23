import Image from "next/image";

export default function Page() {
  return (
    <main className="container mx-auto px-6 py-10 space-y-10">
      {/* Mockup sans crop */}
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border bg-neutral-100">
        <Image
          src="/portfolio/restaurant-site-demo.jpg"
          alt="Mockup site Restaurant — Nordik AI"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* En-tête simple, sans CTA */}
      <section
        className="rounded-2xl p-10 text-center text-white"
        style={{ background: "linear-gradient(90deg, #111827 0%, #b45309 100%)" }}
      >
        <h1 className="text-4xl font-semibold">Restaurant — Montréal</h1>
        <p className="mt-2 opacity-90">Ambiance premium, menu clair, réservation en un clic.</p>
      </section>
    </main>
  );
}
