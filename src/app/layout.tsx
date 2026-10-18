
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sathwik — Creative Developer",
  description:
    "A creative developer portfolio exploring software, data, and AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
