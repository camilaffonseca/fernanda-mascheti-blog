"use client";

import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";

import Code from "@/components/icons/Code";
import { appRoutes } from "@/constants/routes";
import { usePosts } from "@/services/hooks/usePosts";

const Header = () => {
  const router = useRouter();

  const pathname = usePathname();

  const { data } = usePosts();

  const firstPost = useMemo(() => data?.posts?.[0] || null, [data?.posts]);

  return (
    <header className="flex justify-between py-8 text-2xl heading gap-4">
      <button
        type="button"
        className="flex items-center cursor-pointer"
        onClick={() => {
          router.push(appRoutes.home);
        }}
      >
        <div className="flex items-center gap-2 md:gap-5">
          <Code className="w-5 md:w-11" />

          <h1 className="uppercase text-[1rem] md:text-[1.5rem]">
            Fernanda Mascheti
          </h1>
        </div>
      </button>

      <nav aria-label="Menu" className="flex items-center">
        <ul className="flex items-center gap-3 md:gap-8">
          <li className="flex items-center">
            <a
              href={appRoutes.home}
              className={`text-[1rem] md:text-[1.5rem] ${
                pathname === appRoutes.home ? "text-primary" : ""
              }`}
            >
              Início
            </a>
          </li>

          <li className="flex items-center">
            <a
              href={firstPost ? appRoutes.blog(firstPost.id) : "#blog"}
              className={`text-[1rem] md:text-[1.5rem] ${
                pathname.startsWith(appRoutes.blog("")) ? "text-primary" : ""
              }`}
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
