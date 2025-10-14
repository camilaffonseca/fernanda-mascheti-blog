import type { Metadata } from "next";
import { Chakra_Petch, Inter } from "next/font/google";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Fernanda Mascheti",
  description:
    "Case técnico proposto pela Alura para a função de Desenvolvedor Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="py-10 px-30">
      <body className={`${chakraPetch.variable} ${inter.variable} antialiased`}>
        <header className="flex justify-between font-heading py-8 text-2xl font-bold">
          <p className="uppercase">Fernanda Mascheti</p>
          <div className="flex gap-8">
            <button type="button">Início</button>
            <button type="button">Blog</button>
          </div>
        </header>

        <main>{children}</main>

        <footer>
          <div className="flex justify-between">
            <div>
              <p className="heading">Vamos conversar?</p>
              <p>Entre em contato</p>
            </div>
            <div>
              <p>fernandamascheti@gmail.com</p>
              <p>/Fernanda Mascheti</p>
              <p>/fernandamascheti</p>
            </div>
          </div>
          <p className="w-full text-center">
            © Copyright 2025. Produzido por Fernanda Mascheti
          </p>
        </footer>
      </body>
    </html>
  );
}
