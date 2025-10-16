
"use client";
import { Phone, Mail, MapPin, Star, Zap, Rocket, Sparkles, Check } from "lucide-react";
// 'use client'   // seulement si tu l’as déjà
import Image from "next/image";


export default function Page() {
  const features = [
    { icon: <Zap className="h-5 w-5" />, title: "SEO local AI", text: "Contenu & balises générés intelligemment pour apparaître sur Google Maps." },
    { icon: <Rocket className="h-5 w-5" />, title: "Site ultra‑rapide", text: "Temps de chargement optimisé = meilleur taux de conversion." },
    { icon: <Sparkles className="h-5 w-5" />, title: "Automations", text: "Avis, posts, e‑mails : gagnez des heures chaque semaine." },
  ];
  const services = [
    { title: "Site vitrine AI‑optimisé", text: "1 page claire qui convertit (sections & CTA — boutons d’action — pensés pour la vente).", price: "À partir de 399$" },
    { title: "SEO local & Google Business Profile", text: "Optimisation fiche, mots‑clés locaux, photos, posts & suivi mensuel.", price: "Forfaits dès 249$/mois" },
    { title: "Automations IA", text: "Flux pour générer des avis, publier des posts, répondre aux leads et e‑mails.", price: "Sur devis" },
  ];
  const testimonials = [
    { name: "Alex P.", text: "Site livré en 72h, +38% d’appels depuis Google.", stars: 5 },
    { name: "Mélissa R.", text: "On est passés du bas de page à top 3 sur nos mots‑clés locaux.", stars: 5 },
    { name: "Gabriel B.", text: "Super service à la clientèle et toujours livré dans les temps.", stars: 5 },
  ];
  const plans = [
    { name: "Starter", price: "399$", items: ["Site vitrine 1 page", "Intégration Google Maps/Contact", "Livraison 72h"]},
    { name: "Pro", price: "899$", items: ["3 pages (Accueil, Services, À propos)", "SEO local + Google Business Profile", "Intégration prise de RDV"]},
    { name: "Sur-mesure", price: "Sur devis", items: [
  "Charte (logo, couleurs, typos) & copywriting (textes de vente)", "Automations IA (avis, posts)", "Suivi 30 jours"]},

  ];
// --- données FAQ (au-dessus du return) ---
// --- FAQ (à placer AU-DESSUS du return, avec services/plans) ---
const faqs = [
  {
    q: "Combien de temps pour livrer un site ?",
    a: "Généralement 3–5 jours ouvrables pour une page vitrine complète (texte + design)."
  },
  {
    q: "Quand verrai-je des résultats SEO ?",
    a: "Les signaux locaux (clics, appels) peuvent bouger en 2–4 semaines ; le positionnement s’améliore sur 1–3 mois selon la concurrence."
  },
  {
    q: "Proposez-vous la maintenance ?",
    a: "Oui : mises à jour, posts Google, suivi des mots-clés et rapports mensuels selon le forfait choisi."
  },
  {
    q: "Qu’est-ce que le SEO (référencement) ?",
    a: "Le SEO, c’est l’optimisation de votre site et de votre fiche Google pour apparaître plus haut dans les résultats (et sur Google Maps) afin de générer plus d’appels et de demandes de devis."
  },
  {
    q: "C’est quoi un test A/B ?",
    a: "On compare 2 versions d’un élément (titre, bouton, section) sur de vrais visiteurs pour voir laquelle convertit le mieux ; on garde la version gagnante."
  },
  {
    q: "Qu’est-ce qu’un CTA ?",
    a: "CTA = “Call To Action” : un bouton ou lien d’action (ex. “Obtenir un devis”, “Appeler”). Bien placé et bien rédigé, il augmente les conversions."
  }
];




  return (
    <div className="min-h-screen">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-slate-200">
        <div className="container py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-xl bg-slate-900 text-white grid place-items-center font-bold">N</span>
            <span className="font-semibold tracking-tight">Nordik AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#tarifs" className="hover:text-slate-900">Tarifs</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </nav>
          <a href="#contact" className="hidden md:block btn btn-primary">Obtenir un devis</a>
        </div>
      </header>



{/* HERO */}
<div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
  <Image
    src="/hero.png"      // tu as bien hero.png dans /public
    alt="Aperçu site Nordik AI sur laptop et mobile — sites web AI-optimisés"
    width={1600}
    height={900}
    priority
    className="w-full h-full object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>



      {/* FEATURES */}
      <section className="container pb-8 grid md:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <div key={i} className="card p-5">
            <div className="h-10 w-10 rounded-xl bg-slate-100 grid place-items-center">{f.icon}</div>
            <h3 className="mt-2 text-lg font-semibold">{f.title}</h3>
            <p className="text-slate-600 mt-1">{f.text}</p>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section id="services" className="container py-10">
        <h2 className="text-2xl md:text-3xl font-bold">Services</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {services.map((s, i) => (
            <div key={i} className="card p-5">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-slate-600 mt-2">{s.text}</p>
              <div className="mt-4 flex items-center gap-2 text-sm"><Check className="h-4 w-4" /> {s.price}</div>
              <div className="mt-4"><a className="btn btn-primary w-full text-center" href="#contact">Demander un devis</a></div>
            </div>
          ))}
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs" className="container py-10">
        <h2 className="text-2xl md:text-3xl font-bold">Tarifs</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {plans.map((p, i) => (
            <div key={i} className="card p-5">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{p.name}</span>
                <span className="text-xl font-extrabold">{p.price}</span>
              </div>
              <ul className="space-y-2 text-slate-700 mt-4">
                {p.items.map((it, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4" /> {it}</li>
                ))}
              </ul>
              <div className="mt-4"><a className="btn btn-primary w-full text-center" href="#contact">Choisir</a></div>
            </div>
          ))}
        </div>
      </section>

      {/* AVIS */}
      <section className="container py-10">
        <h2 className="text-2xl md:text-3xl font-bold">Avis clients</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card p-5">
              <div className="flex items-center gap-2 mb-2">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700">“{t.text}”</p>
              <p className="mt-2 text-sm text-slate-500">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

{/* FAQ */}
<section id="faq" className="container py-10">
  <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>

  <div className="grid md:grid-cols-3 gap-4 mt-6">
    {faqs.map((item, i) => (
      <div key={i} className="card p-6">
        <h3 className="text-lg font-semibold">{item.q}</h3>
        <p className="text-slate-600 mt-2">{item.a}</p>
      </div>
    ))}
  </div>
</section>



      {/* CONTACT */}
      <section id="contact" className="container py-12">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Parlons de votre projet</h2>
            <p className="text-slate-600 mt-2">Remplis le formulaire — réponse sous 24h.</p>
            <div className="mt-6 space-y-3 text-slate-600">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4"/> (514) 555‑9021</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4"/> contact@nordikai.com</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Montréal, QC</div>
            </div>
          </div>
          {/* Formspree example endpoint - replace with your own */}
          <form className="card p-6 space-y-4" action="https://formspree.io/f/meorvqbz" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-sm">Nom</label>
                <input name="name" placeholder="Ton nom" required className="border rounded-xl px-3 py-2" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm">Courriel</label>
                <input type="email" name="email" placeholder="ton@email.com" required className="border rounded-xl px-3 py-2" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm">Message</label>
              <textarea name="message" placeholder="Parle‑moi de ton besoin…" rows={4} required className="border rounded-xl px-3 py-2" />
            </div>
            <button type="submit" className="btn btn-primary w-full">Envoyer</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 py-8">
        <div className="container text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Nordik AI — Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-800">Mentions légales</a>
            <a href="#" className="hover:text-slate-800">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
