export default function DemoRestaurant() {
  return (
    <main className="container mx-auto px-6 py-12">
      <div className="aspect-[16/6] rounded-2xl bg-gradient-to-r from-amber-600 to-yellow-500 grid place-items-center text-white">
        <div className="text-center">
          <div className="text-6xl">🍽️</div>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold">Restaurant — Montréal</h1>
          <a href="/#contact" className="mt-6 inline-block rounded-xl border px-5 py-3 text-sm">Demander un audit gratuit</a>
        </div>
      </div>
    </main>
  );
}
