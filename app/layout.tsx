import "./globals.css";
import { Roboto } from "next/font/google";

const inter = Roboto({ weight: "400", subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Vitalii Vorkov's personal page",
  description: "Just a little bit about myself",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
