import { toast } from "react-toastify";
import useSWR, { type SWRConfiguration } from "swr";

import type { CategoryTypes } from "@/models/category";
import type { PaginationQueryParams } from "@/models/commonDataTraffic";

import { getPosts, getPostsByCategory } from "@/services/http/posts";

export const usePosts = (
  params?: PaginationQueryParams & {
    category?: CategoryTypes | null;

    // TODO? Não funciona pois não existe documentação da api para enviar a pesquisa
    search?: string;
  },
  options: SWRConfiguration = {}
) => {
  const { data, isLoading, error } = useSWR(
    ["posts", JSON.stringify(params)],
    () => {
      const { category, search, ...paramsRest } = params ?? {};

      if (category) {
        return getPostsByCategory({ category, params: paramsRest, search });
      }

      return getPosts({ ...paramsRest, search });
    },
    {
      revalidateOnFocus: false,
      onError() {
        toast.error(
          `Houve um erro ao tentar obter os posts. Tente novamente.`,
          { closeButton: false }
        );
      },

      ...options,
    }
  );

  return {
    data: data?.data,
    isLoading,
    error,
  };
};
