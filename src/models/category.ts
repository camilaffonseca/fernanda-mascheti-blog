export type CategoryTypes =
  | "mobile"
  | "programacao"
  | "frontend"
  | "devops"
  | "ux-design"
  | "data-science"
  | "inovacao-gestao";

export type CategoryModel = {
  slug: CategoryTypes[];
  name: string;
  description: string;
};
