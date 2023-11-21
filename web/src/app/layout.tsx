import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StyleRegistry } from "styled-jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Layout Propaganda",
  description: "Mostrando ao Mundo o que você construiu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyleRegistry>
          <Header page="home" />
          {children}
        </StyleRegistry>
      </body>
    </html>
  );
}
