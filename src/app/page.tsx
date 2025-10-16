/** biome-ignore-all lint/a11y/useSemanticElements: Acessibilidade melhor forçando isso dessa forma */
/** biome-ignore-all lint/a11y/useAriaPropsSupportedByRole: Acessibilidade melhor forçando isso dessa forma */
"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";

import Badge from "@/components/generic/Badge";
import PaginationButton from "@/components/generic/PaginationButton";
import PostCard from "@/components/generic/PostCard";
import Divider1 from "@/components/icons/Divider1";
import Divider2 from "@/components/icons/Divider2";
import Email from "@/components/icons/Email";
import Github from "@/components/icons/Github";
import Linkedin from "@/components/icons/Linkedin";
import Search from "@/components/icons/Search";
import { categories } from "@/constants/categories";
import { useDebounce } from "@/hooks/useDebounce";
import type { CategoryTypes } from "@/models/category";
import { usePosts } from "@/services/hooks/usePosts";

type SearchForm = {
  search: string;
};

const Home = () => {
  const [category, setCategory] = useState<CategoryTypes | null>(null);
  const [page, setPage] = useState<number>(1);

  const { register, control } = useForm<SearchForm>({
    defaultValues: {
      search: "",
    },
  });

  const search = useWatch({
    control,
    name: "search",
  });

  const debouncedSearch = useDebounce(search);

  const { data: postsResponse, isLoading } = usePosts({
    limit: 6,
    page,
    category,

    // TODO? Não funciona pois não existe documentação da api para enviar a pesquisa
    search: debouncedSearch,
  });

  const paginationItems = useMemo(
    () =>
      Array.from({
        length: postsResponse?.pagination?.totalPages || 1,
      }),
    [postsResponse?.pagination?.totalPages],
  );

  useEffect(() => {
    if (!debouncedSearch) {
      return;
    }

    toast.info(
      "Pesquisa não funcional: Não existe documentação de como mandar ela para o backend",
    );
  }, [debouncedSearch]);

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
          className="absolute top-10 left-90 w-1/2 h-full rounded-full bg-pink/24 blur-[150px] z-0 pointer-events-none"
        />
        <div
          aria-hidden
          role="presentation"
          className="absolute bottom-20 right-0 w-1/2 h-80 rounded-full bg-primary/19 blur-[200px] z-0 pointer-events-none"
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

      <section
        className="flex flex-col items-center gap-8"
        aria-labelledby="posts-heading"
      >
        <div
          className="flex justify-between w-full md:max-w-[34rem] lg:max-w-[42rem] mt-[7rem] mb-[5rem]"
          aria-hidden="true"
        >
          <Divider2 className="w-[1.75rem] rotate-270" />
          <Divider1 className="w-[1.75rem]" />
          <Divider2 className="w-[1.75rem]" />
        </div>

        {/* heading semântico escondido p/ nomear a região; mantém o <p> visual */}
        <h3 id="posts-heading" className="sr-only">
          Minhas postagens
        </h3>

        <div className="flex gap-8 w-full justify-between flex-wrap">
          <div
            className="flex items-center gap-8 flex-wrap lg:flex-nowrap"
            role="search"
          >
            <p className="heading text-2xl text-nowrap" aria-hidden="true">
              Minhas postagens
            </p>

            <div className="flex flex-nowrap outline-2 outline-primary py-1 px-3.5 rounded-[4px] w-full max-w-80 gap-2">
              <input
                type="search"
                placeholder="Buscar..."
                aria-label="Buscar postagens"
                className="outline-0 w-full"
                {...register("search")}
              />

              <Search width="1.5rem" />
            </div>
          </div>

          <div
            className="flex items-center gap-4 flex-wrap"
            aria-labelledby="cats-label"
          >
            <p id="cats-label" className="font-bold">
              Categorias:
            </p>

            <ul className="flex items-center gap-1 lg:gap-4 flex-wrap">
              {Object.entries(categories).map(([key, label]) => {
                const isActive = category === key;

                return (
                  <li key={key}>
                    <Badge
                      isActive={isActive}
                      label={label}
                      aria-label={`Filtrar por categoria ${label}`}
                      onClick={() => {
                        setPage(1);
                        setCategory(isActive ? null : (key as CategoryTypes));
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {!postsResponse?.posts?.length && isLoading ? (
          <ul
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-6 max-w-7xl"
            aria-live="polite"
            aria-busy={isLoading ? "true" : "false"}
          >
            <Skeleton height="30rem" />
            <Skeleton height="30rem" />
            <Skeleton height="30rem" />
            <Skeleton height="30rem" />
            <Skeleton height="30rem" />
            <Skeleton height="30rem" />
          </ul>
        ) : null}

        {postsResponse?.posts?.length && !isLoading ? (
          <ul
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-6 max-w-7xl"
            aria-live="polite"
            aria-busy={isLoading ? "true" : "false"}
          >
            {postsResponse.posts.map((post) => (
              <li key={post.id} className="h-full">
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        ) : null}

        {!postsResponse?.posts?.length && !isLoading ? (
          <p role="status" aria-live="polite" className="text-sm opacity-80">
            Nenhuma postagem encontrada para os filtros atuais.
          </p>
        ) : null}

        {postsResponse?.posts?.length && !isLoading ? (
          <nav
            className="flex items-center justify-center gap-4 max-w-[48rem]"
            aria-label="Paginação de postagens"
          >
            <ul className="flex items-center gap-2 justify-center flex-wrap">
              {paginationItems.map((_, pageIndex) => {
                const pageNumber = pageIndex + 1;

                const isActive = pageNumber === page;

                return (
                  <li key={`page-${pageNumber}`}>
                    <PaginationButton
                      isActive={isActive}
                      pageNumber={pageNumber}
                      onClick={() => {
                        setPage(pageNumber);
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </section>

      <section
        className="flex w-full justify-between mt-32 flex-wrap max-w-full gap-3"
        aria-labelledby="contact-title"
      >
        <header className="flex flex-col gap-3">
          <p
            className="heading text-primary sm:text-[0.8rem]"
            id="contact-kicker"
          >
            Vamos conversar?
          </p>
          <p
            className="heading lg:text-6xl text-2xl"
            id="contact-title"
            role="heading"
            aria-level={3}
          >
            Entre em contato
          </p>
        </header>

        <div className="flex flex-col gap-3">
          <address className="not-italic">
            <ul className="list-none m-0 p-0 flex flex-col gap-3">
              <li>
                <a
                  href="mailto:fernandamascheti@gmail.com"
                  className="flex gap-1.5 items-center"
                  aria-label="Enviar email para fernandamascheti@gmail.com"
                >
                  <Email width="1.2rem" aria-hidden="true" focusable="false" />
                  <span>fernandamascheti@gmail.com</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/fernandamascheti"
                  className="flex gap-1.5 items-center"
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label="Abrir o LinkedIn de Fernanda Mascheti"
                >
                  <Linkedin
                    width="1.2rem"
                    aria-hidden="true"
                    focusable="false"
                  />
                  <span className="underline">/Fernanda Mascheti</span>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/fernandamascheti"
                  className="flex gap-1.5 items-center"
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label="Abrir o GitHub de fernandamascheti"
                >
                  <Github width="1.2rem" aria-hidden="true" focusable="false" />
                  <span className="underline">/fernandamascheti</span>
                </a>
              </li>
            </ul>
          </address>
        </div>
      </section>
    </>
  );
};

export default Home;
