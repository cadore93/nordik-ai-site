import Image from "next/image";

export default function Page() {
  return (
    <main className="container mx-auto px-6 py-10 space-y-10">
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border">
        <Image
          src="/portfolio/coiffeur-site-demo.jpg"
          alt="Mockup site Coiffeuse — Nordik AI"
          fill
          className="object-cover"
        />
      </div>

      {/* ton contenu existant ici */}
    </main>
  );
}
