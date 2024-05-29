import type { Metadata } from "next";
import { Poppins, Playfair } from "next/font/google";
import "./globals.css";

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
      <body className={playfair.className + " " + poppins.className + " antialiased"}>{children}</body>
    </html>
  );
}
