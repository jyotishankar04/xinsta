import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: "XInsta",
    template: "%s | XInsta",
  },
  description: "XInsta the social network ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen w-full bg-background font-sans antialiased"
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative w-full flex flex-col h-screen">
            <Navbar />
            <div className="container h-full mx-auto">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
