import type { CategoryTypes } from "./category";

export type Metadata = {
  generatedAt: string;
  seed: string;
  category?: CategoryTypes;
};

export type Pagination = {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};
