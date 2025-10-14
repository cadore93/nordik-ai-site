export const metadata = {
  title: "Nordik AI — Sites web & SEO local propulsés par l’IA",
  description: "Création de sites vitrines, SEO local (Google Business Profile) et automatisations.",
};
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
