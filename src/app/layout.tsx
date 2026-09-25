import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {Oswald} from "next/font/google"

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fitlog",
  description: "Workout Library",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en" className={oswald.variable}>

      <body className="bg-[#0b0d10] text-white antialiased">
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
