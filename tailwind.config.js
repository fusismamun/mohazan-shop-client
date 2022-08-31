module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",
          secondary: "#FF6347",
          accent: "#e94560",
          neutral: "#0f3460",
          "base-100": "#ffffff",
        },
      },
      "white",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
