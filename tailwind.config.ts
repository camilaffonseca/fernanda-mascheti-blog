import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    // *INFO: mesmos valores, mas coloquei aqui pra ficar mais explícito durante o desenvolvimento

    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    colors: {
      bg: "var(--color-background)",
      primary: "var(--color-primary)",
      heading: "var(--color-text-heading)",
      paragraph: "var(--color-text-paragraph)",
    },
  },
};

export default config;
