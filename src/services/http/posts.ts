import type { CategoryTypes } from "@/models/category";
import type {
  Metadata,
  Pagination,
  PaginationQueryParams,
} from "@/models/commonDataTraffic";
import type { PostModel } from "@/models/post";

import { api } from "@/services/fetchers/api";

type PostsResponse = {
  posts?: PostModel[];
  pagination?: Pagination;
  meta?: Metadata;
};

type PostByIdResponse = {
  post: PostModel;
  meta: Omit<Metadata, "category">;
};

export const getPosts = async (
  params?: PaginationQueryParams & {
    // TODO? Não funciona pois não existe documentação da api para enviar a pesquisa
    search?: string;
  }
) =>
  api.get<PostsResponse>("/posts", {
    params,
  });

export const getPostById = async ({ postId }: { postId: string }) =>
  api.get<PostByIdResponse>(`/posts/id/${postId}`);

export const getPostsByCategory = async ({
  category,
  params,
  search,
}: {
  category?: CategoryTypes | null;
  params?: PaginationQueryParams;

  // TODO? Não funciona pois não existe documentação da api para enviar a pesquisa
  search?: string;
}) =>
  api.get<PostsResponse>(`/posts/category/${category}`, {
    params: { ...params, search },
  });
