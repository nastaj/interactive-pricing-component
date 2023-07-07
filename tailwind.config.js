/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    colors: {
      "cyan-soft": "hsl(174, 77%, 80%)",
      "cyan-strong": "hsl(174, 86%, 45%)",
      "red-light-1": "hsl(14, 92%, 95%)",
      "red-light-2": "hsl(15, 100%, 70%)",
      "blue-pale": "hsl(226, 100%, 87%)",
      white: "hsl(0, 0%, 100%)",
      "blue-pale": "hsl(230, 100%, 99%)",
      "blue-grayish-light-1": "hsl(224, 65%, 95%)",
      "blue-grayish-light-2": "hsl(223, 50%, 87%)",
      "blue-grayish": "hsl(225, 20%, 60%)",
      "blue-dark": "hsl(227, 35%, 25%)",
    },
    fontWeight: {
      "semi-bold": "600",
      "extra-bold": "800",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    boxShadow: {
      lg: "0px 15px 50px 2px",
    },
    extend: {
      fontFamily: {
        manrope: ["Manrope"],
      },
      fontSize: {
        m: ["0.9375rem"],
      },
      backgroundImage: {
        "circle-pattern": "url('images/pattern-circles.svg')",
        "bg-pattern": "url('images/bg-pattern.svg')",
        "thumb-pattern": "url('images/icon-slider.svg')",
      },
    },
  },
  plugins: [],
};
