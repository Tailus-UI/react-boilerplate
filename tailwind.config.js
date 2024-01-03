import themer from "@tailus/themer";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tailus/themer-**/dist/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    themer({
      components: {
        // Set your component customization here
      },
    }),
  ],
};
