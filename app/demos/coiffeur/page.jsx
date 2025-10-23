import Image from "next/image";

export default function Page() {
  return (
    <main className="container mx-auto px-6 py-10 space-y-10">
      {/* Mockup sans crop */}
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border bg-neutral-100">
        <Image
          src="/portfolio/coiffeur-site-demo.jpg"
          alt="Mockup site Coiffeuse — Nordik AI"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* En-tête simple, sans CTA */}
      <section
        className="rounded-2xl p-10 text-center text-white"
        style={{ background: "linear-gradient(90deg, #7c3aed 0%, #ec4899 100%)" }}
      >
        <h1 className="text-4xl font-semibold">Coiffeuse — Blainville</h1>
        <p className="mt-2 opacity-90">Vitrine chic, réservation claire et rapide.</p>
      </section>
    </main>
  );
}
