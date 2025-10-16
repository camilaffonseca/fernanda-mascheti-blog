import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import useSWR, { type SWRConfiguration } from "swr";

import { appRoutes } from "@/constants/routes";
import { getPostById } from "@/services/http/posts";

export const usePostById = (postId: string, options: SWRConfiguration = {}) => {
  const router = useRouter();

  const { data, isLoading, error } = useSWR(
    ["postById", postId],
    async () => getPostById({ postId }),

    {
      revalidateOnFocus: false,
      onError() {
        toast.error(`Houve um erro ao tentar obter o post. Tente novamente.`, {
          closeButton: false,
        });

        router.replace(appRoutes.home);
      },

      ...options,
    },
  );

  return {
    data: data?.data,
    isLoading,
    error,
  };
};
