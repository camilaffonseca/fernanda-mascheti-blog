import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <section className="w-full flex flex-col gap-6 items-center mt-16 ">
        <div className="relative w-56 h-56 rounded-full overflow-hidden border-[2px] border-primary">
          <Image
            aria-hidden
            src="/images/author-image.webp"
            alt="Imagem da autora do blog, Fernanda Mascheti"
            priority
            fill
          />
        </div>

        <p className="w-full text-center heading text-primary">
          Olá, meu nome é Fernanda_
        </p>
        <p className="w-full text-center heading text-6xl">
          Eu ensino{" "}
          <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Programação
          </span>
        </p>
        <p className="w-full text-center max-w-xl">
          Sou Engenheira de Computação e Pedagoga. Ensino pensamento
          computacional para estudantes do Ensino Fundamental e Médio. Ensino
          sobre pensamento computacional usando HTML, CSS e JavaScript. Veja os
          projetos que já desenvolvi!
        </p>
      </section>

      <div className="flex w-full justify-between mt-32">
        <div className="flex-col gap-3">
          <p className="heading text-primary">Vamos conversar?</p>
          <p className="heading text-6xl">Entre em contato</p>
        </div>
        <div className="flex-col gap-3">
          <p>fernandamascheti@gmail.com</p>
          <p>/Fernanda Mascheti</p>
          <p>/fernandamascheti</p>
        </div>
      </div>
    </main>
  );
}
