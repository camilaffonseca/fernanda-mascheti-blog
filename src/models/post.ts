import type { CategoryModel } from "./category";
import type { TagModel } from "./tag";

export type PostModel = {
  id: string;
  title: string | null;
  content: string | null;
  author: string | null;
  createdAt: string;
  likes: number | null;
  category: CategoryModel | null;
  tags: TagModel[] | null;
  imageUrl: string | null;
};
