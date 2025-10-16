import useSWR, { type SWRConfiguration } from "swr";

import { getPostById } from "@/services/http/posts";

export const usePostById = (
  postId: string,
  options: SWRConfiguration = {
    revalidateOnFocus: false,
  },
) => {
  const { data, isLoading, error } = useSWR(
    ["postById", postId],
    async () => getPostById({ postId }),
    options,
  );

  return {
    data: data?.data,
    isLoading,
    error,
  };
};
