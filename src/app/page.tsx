"use client";

import Image from "next/image";
import { usePosts } from "@/services/usePosts";

const Home = () => {
  const { data } = usePosts();

  return (
    <main className="flex flex-col justify-center items-center">
      <section className="w-full flex flex-col gap-6 items-center mt-16 relative">
        {/* Gradiente do background */}
        <div className="absolute top-30 left-40 w-xl h-full rounded-full bg-pink/30 blur-[150px] z-0" />
        <div className="absolute bottom-20 right-10 w-xl h-80 rounded-full bg-primary/20 blur-[200px] z-0" />

        <div className="relative w-56 h-56 rounded-full overflow-hidden border-[2px] border-primary z-10">
          <Image
            aria-hidden
            src="/images/author-image.webp"
            alt="Imagem da autora do blog, Fernanda Mascheti"
            priority
            fill
          />
        </div>

        <p className="w-full text-center heading text-primary z-10">
          Olá, meu nome é Fernanda_
        </p>

        <p className="w-full text-center heading text-6xl z-10">
          Eu ensino{" "}
          <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Programação
          </span>
        </p>

        <p className="w-full text-center max-w-xl z-10">
          Sou Engenheira de Computação e Pedagoga. Ensino pensamento
          computacional para estudantes do Ensino Fundamental e Médio. Ensino
          sobre pensamento computacional usando HTML, CSS e JavaScript. Veja os
          projetos que já desenvolvi!
        </p>
      </section>

      <section>
        {data?.map((post) => (
          <p key={post.id}>{post.author}</p>
        ))}
      </section>

      <section className="flex w-full justify-between mt-32">
        <div className="flex-col gap-3">
          <p className="heading text-primary">Vamos conversar?</p>
          <p className="heading text-6xl">Entre em contato</p>
        </div>
        <div className="flex-col gap-3">
          <p>fernandamascheti@gmail.com</p>
          <p>/Fernanda Mascheti</p>
          <p>/fernandamascheti</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
