import "./globals.css";

import { Footer, Navbar } from "@/components/layout";
import Providers from "./providers";

export const metadata = {
  title: "yassin",
  description: "Created by Yassin Moussamih",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="transition-colors duration-1000">
        <Providers>
          <div className="flex flex-col min-h-screen justify-between ">
            <div>
              <Navbar />
              <div className="container mx-auto px-4"> {children}</div>
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
