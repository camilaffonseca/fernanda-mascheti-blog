import axios from "axios";

export const api = axios.create({
  baseURL: "https://nextjs-alura-teste.vercel.app/api",
  timeout: 4000,
  headers: { "Content-Type": "application/json" },
});
