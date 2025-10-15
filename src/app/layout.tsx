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

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="pt-BR">
      <body
        className={`${chakraPetch.variable} ${inter.variable} antialiased py-2 px-6 sm:py-10 sm:px-30`}
      >
        <header className="flex justify-between py-8 text-2xl heading">
          <h1 className="uppercase">Fernanda Mascheti</h1>

          <nav aria-label="Menu">
            <ul className="flex gap-8">
              <li>
                <a href="/">Início</a>
              </li>

              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p className="w-full text-center paragraph mt-16">
            © Copyright 2025. Produzido por Fernanda Mascheti
          </p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
