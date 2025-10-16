"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

import Badge from "@/components/generic/Badge";
import PostCard from "@/components/generic/PostCard";
import { usePostById } from "@/services/hooks/usePostById";
import { usePosts } from "@/services/hooks/usePosts";

const Page = () => {
  const params = useParams();

  const id = params?.postId as string;

  const { data } = usePostById(id);

  const relatedPosts = usePosts();

  const post = data?.post;

  //TODO: tratamentos de erro e loading
  if (!post) {
    return null;
  }

  return (
    <>
      <section>
        <div className="grid grid-cols-1 xl:grid-cols-2 auto-cols-fr gap-6 w-full mt-20">
          <div className="flex flex-col gap-6">
            <p className="heading text-5xl max-w-10/12">{post.title}</p>

            {post.category?.name ? (
              <div className="flex flex-col gap-5">
                <p className="font-bold">Categoria:</p>
                <Badge badgeText={post.category?.name || post.category.slug} />
              </div>
            ) : null}

            {post.tags ? (
              <div className="flex flex-col gap-5">
                <p className="font-bold">Tags:</p>
                <div className="flex gap-3.5">
                  {post.tags?.map((tag) => (
                    <Badge
                      key={tag.slug}
                      badgeText={tag?.name || tag.slug}
                      variant="outlined"
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          <div
            className={`relative w-full h-full overflow-hidden ${!post.imageUrl ? "border-2 border-primary" : ""}`}
          >
            <Image
              src={post.imageUrl || "/images/no-image.png"}
              alt="Imagem representativa do post do blog"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>

        <p className="mt-16">{post.content}</p>
      </section>
      <section>
        <p className="heading text-2xl my-10">Postagens relacionadas</p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-6 max-w-7xl">
          {relatedPosts.data?.posts?.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
