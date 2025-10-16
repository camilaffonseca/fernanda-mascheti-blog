import type { Metadata } from "next";

import Footer from "@/components/templates/Footer";
import Header from "@/components/templates/Header";

import "./globals.css";

import { Chakra_Petch, Inter } from "next/font/google";

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

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="pt-BR">
      <body
        className={`${chakraPetch.variable} ${inter.variable} antialiased px-4 md:px-8 lg:py-10 lg:px-30`}
      >
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
