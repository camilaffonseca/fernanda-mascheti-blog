import Image from "next/image";

import { appRoutes } from "@/constants/routes";
import type { PostModel } from "@/models/post";

const PostCard = ({ post }: { post: PostModel }) => {
  return (
    <div className="border-[2px] border-primary p-6 rounded-[4px] flex flex-col gap-6 justify-between items-start">
      <div className="flex flex-col gap-6">
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            aria-hidden
            src={post.imageUrl || "/images/no-image.png"}
            alt="Imagem representativa do post do blog"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          {post.category?.name ? (
            <p className="bg-primary text-bg text-[0.9rem] p-1.5 min-w-32 z-10 absolute bottom-0 right-0 text-center">
              {post.category?.name}
            </p>
          ) : null}
        </div>

        <p className="heading text-2xl">{post.title || "Post sem título"}</p>

        <p className="overflow-hidden line-clamp-3">
          {post.content || "Sem descrição"}
        </p>
      </div>

      <a href={appRoutes.blog(post.id)} className="heading text-primary">
        Ler mais
      </a>
    </div>
  );
};

export default PostCard;
