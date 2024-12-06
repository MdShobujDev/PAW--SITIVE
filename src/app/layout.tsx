import { EBGaramond } from "@/utils/customFonts";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Welcome to Paw Sitive",
  description: "Welcome to Paw Sitive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${EBGaramond.variable} font-EBGaramond antialiased bg-secondary/40`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
