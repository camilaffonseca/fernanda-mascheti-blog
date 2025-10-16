"use client";

import Image from "next/image";

import Badge from "@/components/generic/Badge";
import PostCard from "@/components/generic/PostCard";
import Divider1 from "@/components/icons/Divider1";
import Divider2 from "@/components/icons/Divider2";
import { categories } from "@/constants/categories";
import { usePosts } from "@/services/hooks/usePosts";

const Home = () => {
  const { data } = usePosts();

  //TODO: tratamentos de erro e loading
  if (!data) {
    return null;
  }

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
          className="absolute top-30 left-40 w-1/2 h-full rounded-full bg-pink/30 blur-[150px] z-0 pointer-events-none"
        />
        <div
          aria-hidden
          role="presentation"
          className="absolute bottom-20 right-10 w-1/2 h-80 rounded-full bg-primary/20 blur-[200px] z-0 pointer-events-none"
        />

        <figure className="z-10 text-center flex flex-col items-center">
          <div
            className="relative overflow-hidden rounded-full border-2 border-primary
             w-[clamp(160px,20vw,224px)] aspect-square z-10"
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

        <h2
          id="section-heading"
          className="heading text-4xl md:text-5xl lg:text-6xl text-center z-10"
        >
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

      <section className="flex flex-col items-center gap-8">
        <div className="flex justify-between w-full md:max-w-[34rem] lg:max-w-[42rem] mt-[7rem] mb-[5rem]">
          <Divider2 className="w-[1.75rem] rotate-270" />
          <Divider1 className="w-[1.75rem]" />
          <Divider2 className="w-[1.75rem]" />
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-8">
            <p className="heading text-2xl text-nowrap">Minhas postagens</p>
            <input
              type="text"
              placeholder="Buscar..."
              className="outline-2 outline-primary py-1 px-3.5 rounded-[4px] w-full max-w-80"
            ></input>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-bold">Categorias:</p>

            {Object.entries(categories).map((category) => (
              <Badge key={category[0]} badgeText={category[1]} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-6 max-w-7xl">
          {data?.posts?.map((post) => (
            <PostCard post={post} key={post.id} />
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
