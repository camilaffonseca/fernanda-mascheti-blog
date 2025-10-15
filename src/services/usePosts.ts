import { useEffect, useState } from "react";
import type { Metadata, Pagination } from "@/models/commonDataTraffic";
import type { PostModel } from "@/models/post";
import { api } from "@/services/api";

type PostsResponse = {
  posts: PostModel[];
  pagination: Pagination;
  meta: Metadata;
};

export const usePosts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<PostsResponse | null | undefined>(
    null
  );

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const { data } = await api.get<PostsResponse>("/posts");
        setResponse(data);
      } catch (err) {
        // TODO: tratamento do erro
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return {
    isLoading,
    data: response?.posts,
    pagination: response?.pagination || null,
  };
};
