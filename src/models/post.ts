import type { CategoryModel } from "./category";
import type { TagModel } from "./tag";

export type PostModel = {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  likes: number;
  category: CategoryModel;
  tags: TagModel[];
  imageUrl: string;
};
