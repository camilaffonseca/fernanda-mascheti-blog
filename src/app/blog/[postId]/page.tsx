"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import Badge from "@/components/generic/Badge";
import PostCard from "@/components/generic/PostCard";
import { appRoutes } from "@/constants/routes";
import { usePostById } from "@/services/hooks/usePostById";
import { usePosts } from "@/services/hooks/usePosts";

const Post = () => {
  const params = useParams();
  const router = useRouter();

  const postId = useMemo(() => params?.postId as string, [params]);

  const { data: postResponse, isLoading } = usePostById(postId, {
    isPaused() {
      return !postId;
    },
  });

  const { data: relatedPosts, isLoading: isLoadingRelatedPosts } = usePosts({
    category: postResponse?.post?.category?.slug,
    limit: 3,
  });

  useEffect(() => {
    if (!postId) {
      router.replace(appRoutes.home);
    }
  }, [postId, router]);

  if (!postId) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 xl:grid-cols-2 auto-cols-fr gap-6 w-full mt-20">
        <SkeletonTheme baseColor="#6e90b5" highlightColor="#7ba0c7">
          <Skeleton height="30rem" />
          <Skeleton height="30rem" />
        </SkeletonTheme>
      </div>
    );
  }

  return (
    <>
      <section className="relative">
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

        <div className="grid grid-cols-1 xl:grid-cols-2 auto-cols-fr gap-6 w-full mt-20">
          <div className="flex flex-col gap-6 order-2 xl:order-1">
            <h2 className="heading text-3xl lg:text-5xl max-w-10/12">
              {postResponse?.post.title}
            </h2>

            {postResponse?.post.category?.name ? (
              <div className="flex flex-col gap-5">
                <p className="font-bold">Categoria:</p>

                <Badge
                  label={
                    postResponse.post.category?.name ||
                    postResponse.post.category.slug
                  }
                  isActive
                  aria-label={`Categoria ${
                    postResponse.post.category?.name ||
                    postResponse.post.category.slug
                  }`}
                />
              </div>
            ) : null}

            {postResponse?.post.tags?.length ? (
              <div className="flex flex-col gap-5">
                <p className="font-bold">Tags:</p>

                <div className="flex gap-3.5">
                  {postResponse.post.tags.map((tag) => (
                    <Badge
                      key={tag.slug}
                      label={tag?.name || tag.slug}
                      isActive={false}
                      aria-label={`Tag ${tag?.name || tag.slug}`}
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className="flex xl:justify-end w-full h-full order-1 xl:order-2">
            <div
              className={`relative w-full h-full min-h-80 2xl:min-h-100 xl:max-w-2xl overflow-hidden ${
                !postResponse?.post.imageUrl ? "border-2 border-primary" : ""
              }`}
            >
              <Image
                src={postResponse?.post.imageUrl || "/images/no-image.png"}
                alt="Imagem representativa do post do blog"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <p className="mt-16">{postResponse?.post.content}</p>
      </section>

      {relatedPosts?.posts?.length && !isLoadingRelatedPosts ? (
        <section className="relative">
          {/* Gradientes */}
          <div
            aria-hidden
            role="presentation"
            className="absolute top-30 left-40 w-1/2 h-full rounded-full bg-pink/10 blur-[150px] z-0 pointer-events-none"
          />
          <div
            aria-hidden
            role="presentation"
            className="absolute bottom-20 right-10 w-1/2 h-80 rounded-full bg-primary/20 blur-[200px] z-0 pointer-events-none"
          />
          <p className="heading text-2xl my-10">Postagens relacionadas</p>

          <div className="relative w-full flex justify-center">
            <ul
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-6 max-w-7xl"
              aria-live="polite"
            >
              {relatedPosts.posts.map((post) => (
                <li key={post.id} className="h-full">
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Post;
