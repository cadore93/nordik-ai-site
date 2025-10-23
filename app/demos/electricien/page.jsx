import Image from "next/image";

export default function Page() {
  return (
    <main className="container mx-auto px-6 py-10 space-y-10">
      {/* Mockup du site (image) */}
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border">
        <Image
          src="/portfolio/electricien-site-demo.jpg"
          alt="Mockup site Électricien — Nordik AI"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Héros / texte déjà présent ? Tu peux laisser le tien si tu veux */}
      <section className="rounded-2xl p-10 text-center text-white"
        style={{ background: "linear-gradient(90deg, #0f172a 0%, #1d4ed8 100%)" }}>
        <h1 className="text-4xl font-semibold">Électricien — Laval</h1>
        <p className="mt-2 opacity-90">Site rapide + SEO local → + d’appels en 30 jours.</p>
        <a href="#contact" className="inline-block mt-6 rounded-xl border px-5 py-3">Demander un audit gratuit</a>
      </section>
    </main>
  );
}
