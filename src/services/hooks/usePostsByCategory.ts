import useSWR, { type SWRConfiguration } from "swr";

import type { PaginationQueryParams } from "@/models/commonDataTraffic";

import { getPostsByCategory } from "@/services/http/posts";

export const usePostsByCategory = (
  category: string,
  params?: PaginationQueryParams,
  options: SWRConfiguration = {
    revalidateOnFocus: false,
  }
) => {
  const { data, isLoading, error } = useSWR(
    ["postsByCategory", params],
    async () => getPostsByCategory({ category, params }),
    options
  );

  return {
    data: data?.data,
    isLoading,
    error,
  };
};
