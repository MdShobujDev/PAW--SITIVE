import localFont from "next/font/local";

export const EBGaramond = localFont({
  src: [
    {
      path: "../app/fonts/EB_Garamond/static/EBGaramond-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/fonts/EB_Garamond/static/EBGaramond-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../app/fonts/EB_Garamond/static/EBGaramond-Medium.ttf",
      weight: "500",
      style: "medium",
    },

    {
      path: "../app/fonts/EB_Garamond/static/EBGaramond-SemiBold.ttf",
      weight: "600",
      style: "semiBold",
    },

    {
      path: "../app/fonts/EB_Garamond/static/EBGaramond-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-EB-Garamond",
});
