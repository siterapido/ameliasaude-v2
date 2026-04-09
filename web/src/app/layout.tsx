import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amélia Saúde — Planos que cuidam de você de verdade",
  description:
    "Conectamos você aos melhores médicos, clínicas, centros médicos e laboratórios no Rio de Janeiro, sem burocracias. Planos para você, família e empresa.",
  keywords: [
    "planos de saúde",
    "Rio de Janeiro",
    "telemedicina",
    "rede credenciada",
    "plano familiar",
    "plano empresarial",
    "PME",
    "coletivos por adesão",
  ],
  openGraph: {
    title: "Amélia Saúde — Planos que cuidam de você de verdade",
    description:
      "Conectamos você aos melhores médicos, clínicas e laboratórios no Rio de Janeiro, sem burocracias.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${instrumentSerif.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
