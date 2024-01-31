/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "off-white": "#f7f6f4",
        white: "#fff",
        "light-orange": "#fff7e8",
        "dark-orange": "#734a00",
        antiquewhite: "#e6decf",
        black: "#131313",
        red: "#eb5050",
        "dark-gray": "#454545",
        "mid-gray": "#7d7d7d",
        orange: "#ffa500",
        "light-gray": "#f1f1f1",
        "dark-red": "#b01212",
        "mid-orange": "#ffcd71",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        archivo: "Archivo",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      sm: "14px",
      xl: "20px",
      base: "16px",
      "3xs": "10px",
      xs: "12px",
      "5xl": "24px",
      lgi: "19px",
      "13xl": "32px",
      "7xl": "26px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "2xl-9": "21.9px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
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
