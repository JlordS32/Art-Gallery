/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontSize: {
            "2xl": [
               "clamp(70px, 5vw, 96px)",
               {
                  lineHeight: "80px",
               },
            ],
            xl: [
               "70px",
               {
                  lineHeight: "70px",
               },
            ],
            lg: ["60px", { lineHeight: "50px" }],
            md: ["36px", { lineHeight: "36px" }],
            base: ["22px", { lineHeight: "32px" }],
            sm: ["18px", { lineHeight: "28px" }],
         },
         colors: {
            gold: "#D5966C",
            black: "#151515",
            grey: "#444",
            white: "#FFF",
         },
         fontFamily: {
            sans: ["Outfit", "sans-serif"],
            heading: ["Big Shoulders Display", "serif"],
         },
         screens: {
            sm: "320px",
            md: "768px",
            lg: "1024px",
            xl: "1440px",
         },
      },
   },
   plugins: [],
};
