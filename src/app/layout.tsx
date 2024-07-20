import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jost = localfont({
  src: [
    {
      path: "../../public/fonts/Jost-VariableFont_wght.ttf",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Nieruchomości Lorem Ipsum",
  description:
    "Tworzymy nieruchomości z pasji. Kładziemy nacisk na każdy szczegół realizacji i nie dopuszczamy niepowodzeń.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${inter.variable} ${jost.variable}`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
