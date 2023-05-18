import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

export const metadata = {
  title: "Yassin's Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
