/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "991px",
        xl: "1280px",
        /* NOTE 2nd div in footer uses 1200px, 992px, 768px and 576px as queries*/
      },
    },

    extend: {},
  },
  plugins: {},

  //the new plugin @tailwind/jit doesn't work to make it load faster
};
