/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        "primary-light": "var(--primary-light)",
        secondary: "var(--secondary)",
        "secondary-dark": "var(--secondary-dark)",
        "secondary-light": "var(--secondary-light)",

        accent: "var(--accent)",
        muted: "var(--muted)",

        "text-black": "var(--text-black)",
        "text-white": "var(--text-white)",
        "text-gray": "var(--text-gray)",

        green: "var(--green)",
        red: "var(--red)",
        blue: "var(--blue)",
        yellow: "var(--yellow)",
        cyan: "var(--cyan)",
        magenta: "var(--magenta)",
        white: "var(--white)",
        black: "var(--black)",
      },

      transitionTimingFunction: {
        divine: "var(--transition-divine)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
