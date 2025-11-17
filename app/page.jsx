"use client";

import { motion } from "framer-motion";
import { Zap, Rocket, Sparkles, ShieldCheck, Clock3, Lock } from "lucide-react";
import NextImage from "next/image";
import Portfolio from "./components/Portfolio.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
const cardClass =
  "rounded-3xl border border-neutral-200/80 bg-white/80 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-sm p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]";

export default function Page() {
  const features = [
    { icon: <Zap className="h-5 w-5" />, title: "SEO local AI", text: "Contenu & balises générés intelligemment pour apparaître sur Google Maps." },
    { icon: <Rocket className="h-5 w-5" />, title: "Site ultra-rapide", text: "Temps de chargement optimisé = meilleur taux de conversion." },
    { icon: <Sparkles className="h-5 w-5" />, title: "Automations", text: "Avis, posts, e-mails : gagnez des heures chaque semaine." },
  ];

  const testimonials = [
    { name: "Alex P.", text: "Site livré en 72h, +38% d’appels depuis Google.", stars: 5 },
    { name: "Mélissa R.", text: "On est passés du bas de page à top 3 sur nos mots-clés locaux.", stars: 5 },
    { name: "Gabriel B.", text: "Super service à la clientèle et toujours livré dans les temps.", stars: 5 },
  ];

  const faqs = [
    { q: "Combien de temps pour livrer un site ?", a: "Généralement 3–5 jours ouvrables pour une page vitrine complète (texte + design)." },
    { q: "Quand verrai-je des résultats SEO ?", a: "Les signaux locaux (clics, appels) peuvent bouger en 2–4 semaines ; le positionnement s’améliore en 1–3 mois." },
    { q: "Proposez-vous la maintenance ?", a: "Oui : mises à jour, posts Google, suivi des mots-clés et rapports mensuels." },
    { q: "Qu’est-ce que le SEO ?", a: "Optimisation pour remonter sur Google et Google Maps et attirer plus d’appels." },
    { q: "C’est quoi un test A/B ?", a: "On teste deux versions d’un élément pour garder celle qui convertit le mieux." },
    { q: "Qu’est-ce qu’un CTA ?", a: "Call To Action : bouton ou lien qui pousse à l’action (appel, devis)." }
  ];

  return (
  <div className="min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50">


      {/* NAVBAR */}
      <motion.header
        className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-slate-200"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-xl bg-slate-900 text-white grid place-items-center font-bold">N</span>
            <span className="font-semibold tracking-tight">Nordik AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#tarifs" className="hover:text-slate-900">Tarifs</a>
            <a href="#portfolio" className="hover:text-slate-900">Portfolio</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </nav>
          <a href="#contact" className="hidden md:block btn btn-primary">Obtenir un devis</a>
        </div>
      </motion.header>

      {/* HERO FULL SCREEN */}
<motion.section
  className="relative h-[85vh] md:h-screen w-full"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
  {/* IMAGE DE FOND */}
  <NextImage
    src="/hero.png"
    alt="Hero Nordik AI"
    fill
    priority
    className="object-cover"
  />

  {/* OVERLAY GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/45 to-transparent" />

  {/* CONTENU CENTRÉ */}
  <div className="relative z-10 h-full">
    <div className="container mx-auto h-full px-6 flex flex-col items-center justify-center text-center">
      <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-neutral-300 mb-3">
        Nordik AI • SEO local & sites web
      </p>

      <h1
        className="
          text-white 
          text-xl md:text-3xl lg:text-4xl 
          font-semibold 
          leading-tight 
          whitespace-normal md:whitespace-nowrap
        "
      >
        Plus visible. Plus crédible. Plus rentable.
      </h1>

      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-xl bg-white text-neutral-900 px-5 py-2.5 text-sm font-semibold shadow-lg shadow-black/30 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_rgba(56,189,248,0.45)] transition"
        >
          Demander un audit gratuit
        </a>
        <span className="text-[11px] md:text-xs text-neutral-200">
          Audit SEO local 10 min • 3 actions concrètes
        </span>
      </div>
    </div>
  </div>
</motion.section>



{/* PROMESSE PRINCIPALE SOUS LE HERO */}
<motion.section
  className="container mx-auto max-w-4xl px-6 py-12 text-center"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
    + d’appels en 30 jours grâce à un site rapide et optimisé localement.
  </h2>
  <p className="mt-4 text-lg text-neutral-600 md:text-xl">
    Nordikai aide les entreprises locales à se démarquer sur Google Maps et attirer plus d’appels.
  </p>
  <div className="mt-8 flex justify-center">
    <a
      href="#contact"
      className="rounded-xl border border-neutral-900 px-6 py-3 text-sm font-medium transition hover:bg-neutral-900 hover:text-white md:text-base"
    >
      Demander un audit gratuit
    </a>
  </div>
  <div className="mt-2 text-sm text-neutral-500">
    Audit SEO local gratuit (10 min) + 3 actions concrètes.
  </div>
    {/* Badges de confiance */}
  <div className="mt-4 flex flex-col items-center gap-2 text-xs text-neutral-500 md:flex-row md:justify-center md:gap-6">
    <div className="flex items-center gap-2">
      <ShieldCheck className="h-4 w-4" />
      <span>Pas d’engagement long terme</span>
    </div>
    <div className="flex items-center gap-2">
      <Clock3 className="h-4 w-4" />
      <span>Réponse sous 24h</span>
    </div>
    <div className="flex items-center gap-2">
      <Lock className="h-4 w-4" />
      <span>Données et accès 100% sécurisés</span>
    </div>
  </div>

</motion.section>


      {/* FEATURES */}
      <motion.section
        id="services"
        className="container pb-10 grid md:grid-cols-3 gap-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {features.map((f, i) => (
          <motion.div
            key={i}
            className={cardClass}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="h-10 w-10 rounded-xl bg-slate-100 grid place-items-center">{f.icon}</div>
            <h3 className="mt-2 text-lg font-semibold">{f.title}</h3>
            <p className="text-slate-600 mt-1">{f.text}</p>
          </motion.div>
        ))}
      </motion.section>

{/* POURQUOI NOUS FAIRE CONFIANCE */}
<motion.section
  className="container mx-auto px-6 pb-16"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-2xl md:text-3xl font-bold text-center">
    Pourquoi nous faire confiance ?
  </h2>

  <div className="mt-8 grid gap-6 md:grid-cols-3">
    {/* Point 1 */}
    <div className="rounded-2xl border border-neutral-200 bg-white/90 p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-5 w-5 text-neutral-900" />
        <h3 className="text-base font-semibold">Focalisés sur les résultats</h3>
      </div>
      <p className="mt-3 text-sm text-neutral-600">
        On ne vend pas juste un “beau site”. On se concentre sur ce qui compte
        vraiment pour vous : les appels, les demandes de devis et les clients réels.
      </p>
    </div>

    {/* Point 2 */}
    <div className="rounded-2xl border border-neutral-200 bg-white/90 p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <Clock3 className="h-5 w-5 text-neutral-900" />
        <h3 className="text-base font-semibold">Processus simple et rapide</h3>
      </div>
      <p className="mt-3 text-sm text-neutral-600">
        Vous êtes déjà occupé avec votre business. On s’occupe de la technique,
        vous validez les étapes et on avance sans perte de temps.
      </p>
    </div>

    {/* Point 3 */}
    <div className="rounded-2xl border border-neutral-200 bg-white/90 p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <Lock className="h-5 w-5 text-neutral-900" />
        <h3 className="text-base font-semibold">Transparence & propriété totale</h3>
      </div>
      <p className="mt-3 text-sm text-neutral-600">
        Le site, les accès, les comptes Google : tout est à votre nom.
        Pas de dépendance cachée, pas de mauvaises surprises, tout est clair dès le départ.
      </p>
    </div>
  </div>
</motion.section>

      {/* PROCESSUS */}
<motion.section
  className="relative container mx-auto px-6 py-16 
             before:content-[''] before:absolute before:inset-y-4 
             before:left-1/2 before:w-px before:bg-neutral-200/40 
             before:pointer-events-none"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-2xl md:text-3xl font-bold text-center">
    Comment ça fonctionne ?
  </h2>
  <p className="mt-3 text-neutral-600 text-center max-w-2xl mx-auto text-sm md:text-base">
    Un processus simple, clair et orienté résultats. Vous savez toujours
    où on en est et ce qui se passe pour votre business.
  </p>

  <div className="mt-10 grid gap-6 md:grid-cols-3">
    {/* Étape 1 */}
    <div className="rounded-2xl border border-neutral-200 bg-white/90 p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="h-8 w-8 rounded-full bg-neutral-900 text-white grid place-items-center text-sm font-semibold">
          1
        </span>
        <h3 className="text-base font-semibold">Audit & appel découverte</h3>
      </div>
      <p className="mt-3 text-sm text-neutral-600">
        On analyse votre site actuel et votre fiche Google. On identifie les
        opportunités rapides pour générer plus d’appels et de demandes de devis.
      </p>
    </div>

    {/* Étape 2 */}
    <div className="rounded-2xl border border-neutral-200 bg-white/90 p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="h-8 w-8 rounded-full bg-neutral-900 text-white grid place-items-center text-sm font-semibold">
          2
        </span>
        <h3 className="text-base font-semibold">Création & optimisation</h3>
      </div>
      <p className="mt-3 text-sm text-neutral-600">
        On conçoit votre site rapide, on optimise le SEO local et votre Google
        Business Profile. Tout est configuré pour transformer les visites en appels.
      </p>
    </div>

    {/* Étape 3 */}
    <div className="rounded-2xl border border-neutral-200 bg-white/90 p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="h-8 w-8 rounded-full bg-neutral-900 text-white grid place-items-center text-sm font-semibold">
          3
        </span>
        <h3 className="text-base font-semibold">Mise en ligne & suivi</h3>
      </div>
      <p className="mt-3 text-sm text-neutral-600">
        On met le site en ligne, on suit les performances et on ajuste si
        nécessaire. Vous recevez des rapports simples et compréhensibles.
      </p>
    </div>
  </div>
</motion.section>



      {/* TARIFS */}
<motion.section
  id="tarifs"
  className="container mx-auto px-6 py-20 text-center"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-3xl font-semibold md:text-4xl">Nos forfaits</h2>

  <div className="mt-8 grid gap-6 md:grid-cols-3">

    {/* Starter (gauche) */}
    <motion.div
      className={`${cardClass} flex flex-col items-stretch`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0 }}
    >
      <h3 className="text-xl font-semibold">Starter</h3>
      <p className="mt-2 text-4xl font-bold">$650</p>

      <ul className="mt-4 space-y-2 text-sm text-neutral-600 flex-1 text-left">
        <li>• Landing page 1 page moderne</li>
        <li>• Optimisation Google Business Profile</li>
        <li>• Base SEO local + formulaire + analytics</li>
        <li>• Livraison : 3 à 5 jours</li>
        <li>• 30 jours de support</li>
      </ul>

      <a
        href="#contact"
        className="
          mt-6 inline-flex w-full items-center justify-center
          rounded-xl border border-white/10
          bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600
          px-5 py-3 text-sm font-semibold text-white
          shadow-lg shadow-slate-900/30
          transition
          hover:-translate-y-0.5
          hover:shadow-xl hover:shadow-sky-500/40
        "
      >
        Nous contacter
      </a>
    </motion.div>

    {/* Pro (centre) */}
    <motion.div
      className={`${cardClass} flex flex-col items-stretch relative`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <div className="absolute right-4 -top-3 rounded-full bg-neutral-900 px-2 py-1 text-xs font-medium text-white">
        Populaire 💡
      </div>

      <h3 className="mt-3 text-xl font-semibold">Pro</h3>
      <p className="mt-2 text-4xl font-bold">$999</p>

      <ul className="mt-4 space-y-2 text-sm text-neutral-600 flex-1 text-left">
        <li>• Site 3–5 pages (Accueil / Services / Contact…)</li>
        <li>• SEO local complet</li>
        <li>• Optimisation Google Business Profile</li>
        <li>• Livraison : 7 à 10 jours</li>
        <li>• 30 jours de support</li>
      </ul>

      <a
        href="#contact"
        className="
          mt-6 inline-flex w-full items-center justify-center
          rounded-xl border border-white/10
          bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600
          px-5 py-3 text-sm font-semibold text-white
          shadow-lg shadow-slate-900/30
          transition
          hover:-translate-y-0.5
          hover:shadow-xl hover:shadow-sky-500/40
        "
      >
        Nous contacter
      </a>
    </motion.div>

    {/* SEO mensuel (droite) */}
    <motion.div
      className={`${cardClass} flex flex-col items-stretch`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h3 className="text-xl font-semibold">Domination Locale</h3>
      <p className="mt-2 text-4xl font-bold">$400/mois</p>

      <ul className="mt-4 space-y-2 text-sm text-neutral-600 flex-1 text-left">
        <li>• Optimisation continue Google Business Profile</li>
        <li>• Mises à jour mensuelles du site</li>
        <li>• Suivi de la visibilité locale & performances</li>
        <li>• Support & correctifs inclus, résiliation à tout moment</li>
        <li>• SEO local optimisé a chaeu mois</li>
      </ul>

      <a
        href="#contact"
        className="
          mt-6 inline-flex w-full items-center justify-center
          rounded-xl border border-white/10
          bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600
          px-5 py-3 text-sm font-semibold text-white
          shadow-lg shadow-slate-900/30
          transition
          hover:-translate-y-0.5
          hover:shadow-xl hover:shadow-sky-500/40
        "
      >
        Nous contacter
      </a>
    </motion.div>
  </div>

  <p className="mt-6 text-xs text-neutral-500">
    Prix de lancement limités. Paiement final à la mise en ligne — zéro risque.
    Offre valable pour 3 entreprises locales.
  </p>
</motion.section>




      {/* PORTFOLIO */}
      <section id="portfolio">
  <Portfolio />
</section>


      {/* AVIS */}
      <motion.section
        id="avis"
        className="container mx-auto px-6 py-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold">Avis clients</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="rounded-xl border border-neutral-200 p-5 bg-white/80 shadow-sm hover:shadow-md transition-transform duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-2">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <svg key={s} className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09L5.82 12.18.94 7.91l6.09-.89L10 1l2.97 6.02 6.09.89-4.88 4.27 1.7 5.91z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-700">{t.text}</p>
              <p className="mt-2 text-sm text-neutral-500">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        id="faq"
        className="container py-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
      >
        <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              className="card p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <h3 className="text-lg font-semibold">{item.q}</h3>
              <p className="text-slate-600 mt-2">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
      
      
      {/* CONTACT */}
      <motion.section
        id="contact"
        className="container py-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold">Parlons de votre projet</h2>
        <p className="text-slate-600 mt-2">Remplissez le formulaire — réponse sous 24h.</p>

        <div className="mt-6 rounded-2xl border overflow-hidden shadow-sm">
          <iframe
            src="https://forms.zohopublic.ca/contactnord1/form/ContactNordikAI/formperma/-1Nxb-Lc51zEX3sE9LptI-oFaXuGlTbYQXwQ8c85XZQ"
            width="100%"
            height="720"
            frameBorder="0"
            allowFullScreen
            title="Formulaire de contact Nordik AI"
          ></iframe>
        </div>

        <div className="mt-6 space-y-2 text-slate-600 text-sm">
          <div>📧 <a className="underline" href="mailto:contact@nordikai.ca">contact@nordikai.ca</a></div>
          <div>📍 Montréal, QC</div>
        </div>
      </motion.section>


      {/* FOOTER */}
      <footer className="border-t border-slate-200 py-8 bg-white">
        <div className="container text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Nordik AI — Tous droits réservés.</p>
        </div>
      </footer>

    </div>
  );
}
