import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Nordik AI — sites web & SEO local propulsés par l’IA",
  description:
    "Création de sites vitrines, SEO local (Google Business Profile) et automatisations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7K34KWYD8K"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7K34KWYD8K', { anonymize_ip: true });
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
