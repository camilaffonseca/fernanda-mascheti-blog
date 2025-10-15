import useSWR, { type SWRConfiguration } from "swr";

import type { PaginationQueryParams } from "@/models/commonDataTraffic";

import { getPosts } from "@/services/http/posts";

export const usePosts = (
  params?: PaginationQueryParams,
  options: SWRConfiguration = {
    revalidateOnFocus: false,
  }
) => {
  const { data, isLoading, error } = useSWR(
    ["posts", params],
    async () => getPosts(params),
    options
  );

  return {
    data: data?.data,
    isLoading,
    error,
  };
};
