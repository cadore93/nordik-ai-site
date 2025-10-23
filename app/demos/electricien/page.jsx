import Image from "next/image";

export default function Page() {
  return (
    <main className="container mx-auto px-6 py-10 space-y-10">
      {/* Mockup sans crop */}
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border bg-neutral-100">
        <Image
          src="/portfolio/electricien-site-demo.jpg"
          alt="Mockup site Électricien — Nordik AI"
          fill
          className="object-contain"     // <-- pas de découpe
          priority
        />
      </div>

      {/* En-tête simple, sans CTA */}
      <section className="rounded-2xl p-10 text-center text-white"
        style={{ background: "linear-gradient(90deg, #0f172a 0%, #1d4ed8 100%)" }}>
        <h1 className="text-4xl font-semibold">Électricien — Laval</h1>
        <p className="mt-2 opacity-90">Site rapide + SEO local → + d’appels en 30 jours.</p>
        {/* CTA retiré */}
      </section>
    </main>
  );
}
