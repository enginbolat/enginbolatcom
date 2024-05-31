import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./techstack.css";
import { Transition } from "./components";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Engin Bolat",
  description: "Engin Bolat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <Transition>
            {children}
        </Transition>
      </body>
    </html>
  );
}