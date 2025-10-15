export type TagTypes =
  | "tecnologia"
  | "programacao"
  | "web"
  | "mobile"
  | "design"
  | "negocios"
  | "startup"
  | "inovacao"
  | "frontend"
  | "backend"
  | "devops"
  | "data-science";

export type TagModel = {
  slug: TagTypes[];
  name: string;
};
