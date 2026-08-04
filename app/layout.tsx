import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Merry Christmas — Winter Scene",
  description: "An animated winter scene with snowfall and a hand-written greeting.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="m-0">{children}</body>
    </html>
  );
}
