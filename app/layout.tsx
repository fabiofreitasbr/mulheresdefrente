import type { Metadata } from "next";
import { Poppins, Playfair } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const playfair = Playfair({ subsets: ["latin"], weight: ["300", "500", "600", "700", "900"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "500", "700", "900"] });

export const metadata: Metadata = {
  title: "Mulheres de Frente",
  description: "Caminhada pela igualdade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfair.className + " " + poppins.className + " antialiased"}>
        
                <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-GCSBGG19DD');
                `}
                </Script>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-GCSBGG19DD" />
        {children}
        </body>
    </html>
  );
}
