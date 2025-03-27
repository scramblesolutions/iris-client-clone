export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "theme-xl": "4px 20px 40px 1px var(--shadow-color)",
      },
      colors: {
        "custom-purple": "#34216c",
        "custom-violet": "#28246b",
        "custom-accent": "#db8216",
      },
      borderColor: {
        custom: "var(--border-color)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#0D75E3",
          secondary: "#62B8FF",
          accent: "#3147A3",
          neutral: "#2a3c5e",
          "base-100": "#1b1c48",
          "base-200": "#030918",
          "base-300": "#121212",
          info: "#3b82f6",
          success: "#10b981",
          warning: "#facc15",
          error: "#ef4444",
          "--shadow-color": "rgba(0, 0, 0, 0.8)",
          "--note-hover-color": "#040a1c",
          "--border-color": "rgba(255, 255, 255, 0.2)",
        },
      },
      {
        light: {
          primary: "#0D75E3",
          secondary: "#62B8FF",
          accent: "#3147A3",
          neutral: "#3d4451",
          "base-100": "#f5f5f5",
          "base-200": "#ffffff",
          "base-300": "#e0e0e0",
          info: "#3b82f6",
          success: "#10b981",
          warning: "#facc15",
          error: "#ef4444",
          "--shadow-color": "none",
          "--note-hover-color": "#e5e7eb",
          "--border-color": "rgba(0, 0, 0, 0.2)",
        },
      },
      {
        iris: {
          primary: "#702ace",
          secondary: "#f87171",
          accent: "rgb(255, 113, 10)",
          neutral: "#2b2b2b",
          "base-100": "#1a1a1a",
          "base-200": "#000000",
          "base-300": "#1c1c1c",
          info: "rgb(172, 136, 255)",
          success: "rgb(30, 203, 225)",
          warning: "#facc15",
          error: "rgb(239, 68, 68)",
          "--shadow-color": "none",
          "--note-hover-color": "#0a0a0a",
          "base-content": "#ffffff",
          "--border-color": "rgba(255, 255, 255, 0.2)",
        },
      },
    ],
  },
  safelist: ["border-custom"],
}
