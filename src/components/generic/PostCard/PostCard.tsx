/** biome-ignore-all lint/a11y/useAriaPropsSupportedByRole: Forçar aria para leitores de tela */

import Image from "next/image";
import { appRoutes } from "@/constants/routes";
import type { PostModel } from "@/models/post";

const PostCard = ({ post }: { post: PostModel }) => {
  const titleId = `post-${post.id}-title`;
  const excerptId = `post-${post.id}-excerpt`;
  const hasImage = Boolean(post.imageUrl);

  return (
    <article
      className="border-[2px] border-primary p-6 rounded-[4px] flex flex-col gap-6 justify-between items-start h-full hover:shadow-[0_4px_44px_0_var(--color-primary-shadow)] transition-shadow duration-300 bg-bg"
      itemScope
      itemType="https://schema.org/BlogPosting"
      aria-labelledby={titleId}
    >
      <div className="flex flex-col gap-6">
        <figure className="relative w-full h-56 overflow-hidden">
          <Image
            src={post.imageUrl || "/images/no-image.png"}
            // Se tiver imagem, usa o título como alt; se for placeholder, vira decorativa
            alt={hasImage ? post.title || "Imagem da postagem" : ""}
            {...(!hasImage ? { "aria-hidden": "true" } : {})}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />

          {post.category?.name ? (
            <span
              className="bg-primary text-bg text-[0.9rem] p-1.5 min-w-32 z-10 absolute bottom-0 right-0 text-center"
              aria-label={`Categoria: ${post.category.name}`}
            >
              {post.category.name}
            </span>
          ) : null}

          <figcaption className="sr-only">
            Categoria: {post.category?.name}
          </figcaption>
        </figure>

        <h4 id={titleId} className="heading text-2xl" itemProp="headline">
          {post.title || "Post sem título"}
        </h4>

        <p
          id={excerptId}
          className="overflow-hidden line-clamp-3"
          itemProp="description"
        >
          {post.content || "Sem descrição"}
        </p>
      </div>

      <a
        href={appRoutes.blog(post.id)}
        className="heading text-primary"
        rel="bookmark"
        aria-describedby={`${titleId} ${excerptId}`}
        aria-label={`Ler mais: ${post.title || "post sem título"}`}
      >
        Ler mais
      </a>
    </article>
  );
};

export default PostCard;
