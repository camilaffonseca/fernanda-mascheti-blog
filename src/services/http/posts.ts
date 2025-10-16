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

export const getPosts = async (params?: PaginationQueryParams) =>
  api.get<PostsResponse>("/posts", {
    params,
  });
