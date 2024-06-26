/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslateblue: {
          "100": "#072951",
          "200": "rgba(7, 41, 81, 0.65)",
        },
        gray: {
          "100": "#8d8d8d",
          "200": "#031428",
          "300": "rgba(0, 0, 0, 0.5)",
          "400": "rgba(0, 0, 0, 0.75)",
          "500": "rgba(255, 255, 255, 0.75)",
        },
        darkslategray: {
          "100": "#36475c",
          "200": "#324151",
        },
        black: "#000",
        steelblue: {
          "100": "#4393d8",
          "200": "#297abf",
          "300": "#3b5c85",
          "400": "rgba(67, 147, 216, 0.25)",
        },
        orange: "#ff9900",
        dimgray: "#737373",
        gainsboro: "#e6e6e6",
        "dark-blue": "#062c55",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        poppins: "Poppins",
        "space-grotesk": "'Space Grotesk'",
      },
      borderRadius: {
        "31xl": "50px",
        "6xl": "25px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      lg: "18px",
      "53xl": "72px",
      "39xl": "58px",
      "24xl": "43px",
      "5xl": "24px",
      lgi: "19px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      "9xl": "28px",
      "29xl": "48px",
      "19xl": "38px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
