import { Header } from "@/components/Header";
import StyledComponentsRegistry from "@/lib/registry";
import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({
  weight: '400',
  subsets: ['latin'],
})

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
      <body className={raleway.className}>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
