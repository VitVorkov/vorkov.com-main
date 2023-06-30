import { Suspense } from "react";
import "./globals.css";
import { Roboto } from "next/font/google";
import Loading from "./loading";

const inter = Roboto({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Vitalii Vorkov personal page",
  description: "Just a little bit about myself",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
