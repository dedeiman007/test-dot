/** @type {import('tailwindcss').Config} */
/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orangePrimary: "#F5333F",
        grayThin: "#C5C7D0",
        graySemiThin: "#808080",
        grayTag: "#F1F1F1",
        grayPrimary: "#999999",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
