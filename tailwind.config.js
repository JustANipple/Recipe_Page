/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Outfit: ["Outfit", "sans-serif"],
      Youngserif: ["YoungSerif", "serif"],
    },
    fontWeight: {
      YoungSerifRegular: 400,
      OutfitRegular: 400,
      OutfitSemiBold: 600,
      OutfitBold: 700,
    },
    colors: {
      Nutmeg: "hsl(14, 45%, 36%)",
      DarkRaspberry: "hsl(332, 51%, 32%)",
      White: "hsl(0, 0%, 100%)",
      RoseWhite: "hsl(330, 100%, 98%)",
      Eggshell: "hsl(30, 54%, 90%)",
      LightGrey: "hsl(30, 18%, 87%)",
      WengeBrown: "hsl(30, 10%, 34%)",
      DarkCharcoal: "hsl(24, 5%, 18%)",
    },
    maxWidth: {
      desktop: "46rem",
    },
  },
};
