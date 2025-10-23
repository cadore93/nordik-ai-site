
import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portfolio" className="container mx-auto px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">Portfolio / Démos</h2>
        <p className="mt-2 text-sm text-neutral-500">
          Captures réalistes des sites démo Nordik AI.
        </p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {/* Électricien */}
        <a href="/demos/electricien" className="rounded-2xl border p-6 hover:shadow transition">
          <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden rounded-xl">
            <Image
              src="/portfolio/electricien-site-demo.jpg"
              alt="Démo site Électricien — Nordik AI"
              fill
              className="object-cover"
              priority={false}
            />
          </div>
          <h3 className="mt-4 font-semibold">Électricien — Laval</h3>
          <p className="text-sm text-neutral-600 mt-1">Landing page rapide + prise de rendez-vous</p>
          <span className="mt-3 inline-block rounded-xl border px-4 py-2 text-sm">Voir la démo</span>
        </a>

        {/* Coiffeur */}
        <a href="/demos/coiffeur" className="rounded-2xl border p-6 hover:shadow transition">
          <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden rounded-xl">
            <Image
              src="/portfolio/coiffeur-site-demo.jpg"
              alt="Démo site Coiffeuse — Nordik AI"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="mt-4 font-semibold">Coiffeuse — Blainville</h3>
          <p className="text-sm text-neutral-600 mt-1">Style chic, vitrine claire + CTA réservation</p>
          <span className="mt-3 inline-block rounded-xl border px-4 py-2 text-sm">Voir la démo</span>
        </a>

        {/* Restaurant */}
        <a href="/demos/restaurant" className="rounded-2xl border p-6 hover:shadow transition">
          <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden rounded-xl">
            <Image
              src="/portfolio/restaurant-site-demo.jpg"
              alt="Démo site Restaurant — Nordik AI"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="mt-4 font-semibold">Restaurant — Montréal</h3>
          <p className="text-sm text-neutral-600 mt-1">Ambiance premium, menu et réservation</p>
          <span className="mt-3 inline-block rounded-xl border px-4 py-2 text-sm">Voir la démo</span>
        </a>
      </div>
    </section>
  );
}
