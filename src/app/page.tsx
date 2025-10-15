"use client";

import Image from "next/image";
import { usePosts } from "@/services/hooks/usePosts";

const Home = () => {
  const { data } = usePosts();

  return (
    <>
      <section
        aria-labelledby="section-heading"
        className="relative w-full flex flex-col items-center gap-6 mt-16"
        itemScope
        itemType="https://schema.org/Person"
      >
        {/* Gradientes */}
        <div
          aria-hidden
          role="presentation"
          className="absolute top-30 left-40 w-xl h-full rounded-full bg-pink/30 blur-[150px] z-0 pointer-events-none"
        />
        <div
          aria-hidden
          role="presentation"
          className="absolute bottom-20 right-10 w-xl h-80 rounded-full bg-primary/20 blur-[200px] z-0 pointer-events-none"
        />

        <figure className="z-10 text-center flex flex-col items-center">
          <div
            className="relative overflow-hidden rounded-full border-2 border-primary
             w-[clamp(128px,20vw,224px)] aspect-square z-10"
          >
            <Image
              src="/images/author-image.webp"
              alt="Retrato de Fernanda Mascheti"
              fill
              priority
              sizes="(max-width: 640px) 128px, (max-width: 1024px) 20vw, 224px"
              className="object-cover"
            />
          </div>

          <figcaption className="heading text-primary mt-6">
            Olá, meu nome é Fernanda_
          </figcaption>
        </figure>

        <h2 id="section-heading" className="heading text-6xl text-center z-10">
          Eu ensino{" "}
          <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Programação
          </span>
        </h2>

        <p className="w-full text-center max-w-xl z-10" itemProp="description">
          Sou Engenheira de Computação e Pedagoga. Ensino pensamento
          computacional para estudantes do Ensino Fundamental e Médio. Ensino
          sobre pensamento computacional usando HTML, CSS e JavaScript. Veja os
          projetos que já desenvolvi!
        </p>
      </section>

      <section className="flex justify-center">
        <div className="grid grid-cols-3 w-full gap-6 max-w-7xl">
          {data?.posts?.map((post) => (
            <div
              key={post.id}
              className="border-[2px] border-primary p-6 rounded-[4px] flex flex-col gap-6 justify-between items-start"
            >
              <div className="flex flex-col gap-6">
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    aria-hidden
                    src={post.imageUrl || "/images/no-image.png"}
                    alt="Imagem da autora do blog, Fernanda Mascheti"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {post.category?.name ? (
                    <p className="bg-primary text-bg text-[0.9rem] py-1.5 min-w-32 z-10 absolute bottom-0 right-0 text-center">
                      {post.category?.name}
                    </p>
                  ) : null}
                </div>

                <p className="heading text-2xl">
                  {post.title || "Post sem título"}
                </p>

                <p className="overflow-hidden line-clamp-3">
                  {post.content || "Sem descrição"}
                </p>
              </div>

              <button type="button" className="heading text-primary">
                Ler mais
              </button>
            </div>
          ))}
        </div>
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
    </>
  );
};

export default Home;
