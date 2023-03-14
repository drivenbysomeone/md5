/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "991px",
        xl: "1280px",

        /* NOTE 2nd div in footer uses 1200px, 992px, 768px and 576px as queries*/
        tall: { raw: "(min-width: 800px)" },
      },
    },

    extend: {},
  },
  plugins: [],
};
/* the new plugin @tailwind/jit doesn't work to make it load faster.. mode and purge needs to be set as well --> help with purgehttps://v2.tailwindcss.com/docs/just-in-time-mode */
