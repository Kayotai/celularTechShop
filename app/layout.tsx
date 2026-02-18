import type { Metadata } from "next";
import Script from "next/script";
import "@/styles/globals.css"



export const metadata: Metadata = {
  title: {
    default: "CelularTech | Reviews Sinceras de Celulares",
    template: "%s | celulartech" 
  },
  description: "Descubra qual melhor celular comprar com reviews honestos, prós e contras reais e guias de compra atualizados para 2026.",
  keywords: ["reviews de celulares", "melhores celulares 2026", "celular gamer", "custo benefício", "como escolher celular?", "qual celular comprar em 2026?"],
  authors: [{ name: "Hiago Ribeiro" }],
  creator: "celulartech",
  robots: {
    index: true, 
    follow: true, 
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://celulartech.shop",
  },
};
export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html lang="pt-BR">
      <body>
        {children}

        {/* Google Analytics */}
        <Script 
          src={`https://www.googletagmanager.com/gtag/js?id=G-G2FPWCGMS5`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-G2FPWCGMS5');

          `}
        </Script>
        
      </body>
    </html>
  );
}
