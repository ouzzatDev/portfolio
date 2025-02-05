import "./globals.css";
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import AppLayout from "@/components/AppLayout";

const jost = Jost({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OuzzatDev | Home",
  description:
    "Passionate Full Stack Web and Mobile Developer. Transforming ideas into seamless digital experiences. Expertise in front-end design, back-end development. Let's innovate together!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jost.className} bg-dark custom-container`}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
