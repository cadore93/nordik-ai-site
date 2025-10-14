# Nordik AI — Site vitrine (Next.js + Tailwind)

Site 1‑page pour vendre des services **Sites web + SEO local propulsés par l’IA**.

## Déploiement rapide (Vercel)

1. Importez ce repo sur **Vercel** (Start Deploying → Import depuis GitHub).
2. Laissez la configuration par défaut (Next.js est détecté automatiquement).
3. Le site sera disponible à une URL `https://…vercel.app`.

## Formulaire de contact

Le formulaire utilise **Formspree**. Remplacez l’attribut `action` dans `app/page.jsx` :
```html
<form action="https://formspree.io/f/your-endpoint" method="POST">
```
Créez votre endpoint gratuit ici : https://formspree.io

## Scripts

- `npm run dev` — développement
- `npm run build` — build de production
- `npm start` — lancer le serveur de prod

## Personnalisation

- Couleurs & styles : `app/globals.css`
- Contenus : `app/page.jsx` (features, services, tarifs, FAQ, coordonnées)
- Métadonnées (titre/description) : `app/layout.jsx`
