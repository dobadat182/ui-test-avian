import type { Metadata } from "next";
import LayoutDashboard from "@/layouts/LayoutDashboard";
import { Analytics } from "@vercel/analytics/react";

import "../styles/globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Avia UI Test",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <LayoutDashboard>{children}</LayoutDashboard>
        <Analytics />
      </body>
    </html>
  );
}
