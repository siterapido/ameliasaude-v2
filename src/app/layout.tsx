import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amélia Saúde — Cuidado Integral com Excelência",
  description:
    "Medicina de precisão, cuidado humanizado e resultados que transformam vidas. Conheça a Amélia Saúde.",
  keywords: ["saúde", "medicina", "clínica", "bem-estar", "cuidado integral"],
  openGraph: {
    title: "Amélia Saúde",
    description: "Cuidado Integral com Excelência",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${cormorant.variable}`}>
      <body className="noise">{children}</body>
    </html>
  );
}
