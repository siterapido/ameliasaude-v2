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
  title: "Amélia Saúde — Planos de saúde por adesão",
  description:
    "Operadora de planos de saúde com contratação em coletivo por adesão no Rio de Janeiro. Acesso via sindicatos, conselhos e associações profissionais.",
  keywords: [
    "planos de saúde",
    "Rio de Janeiro",
    "telemedicina",
    "rede credenciada",
    "coletivo por adesão",
    "operadora de planos",
    "sindicato",
    "conselho de classe",
  ],
  openGraph: {
    title: "Amélia Saúde — Planos de saúde por adesão",
    description:
      "Coletivo por adesão no Rio de Janeiro: rede credenciada e atendimento sem burocracia, com contratação via entidades de classe.",
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
