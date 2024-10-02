/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        OpenSansExtraBold: ["OpenSans-ExtraBold"],
        OpenSansBold: ["OpenSans-Bold"],
        OpenSansMedium: ["OpenSansMedium"],
        OpenSansRegular: ["OpenSansRegular"],
        OpenSansSemiBold: ["OpenSansSemiBold"],
      },
    },
  },
  plugins: [],
};
