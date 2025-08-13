import "./globals.css";
import "./techstack.css";
import { Footer, Transition } from "./components";
import { ThemeProvider } from "next-themes";

export const metadata = {
  verification: {
    google: "google-site-verification=Sf96WX0iA0Co_WM7YXLnr6rNz-1Z1QQXcB8EL2SXtKY",
  },
  title: {
    default: "Engin Bolat - Mobile Developer",
    template: "%s | Engin Bolat",
  },
  description:
    "React, Next.js, React Native, Swift ve modern teknolojilerle mobil projeler geliştiren yazılım geliştirici.",
  keywords: [
    "Engin Bolat",
    "React",
    "Next.js",
    "iOS",
    "Swift",
    "UIKit",
    "SwiftUI",
    "Expo",
    "React Native",
    "Web Developer",
    "Mobile Developer",
    "Portfolio",
  ],
  metadataBase: new URL("https://enginbolat.com"),
  openGraph: {
    title: "Engin Bolat - Mobile Developer",
    description:
      "React, Next.js, React Native, Swift ve modern teknolojilerle mobil projeler geliştiren yazılım geliştirici.",
    url: "https://enginbolat.com",
    siteName: "Engin Bolat",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Engin Bolat",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engin Bolat - Mobile Developer",
    description:
      "React, Next.js, React Native, Swift ve modern teknolojilerle mobil projeler geliştiren yazılım geliştirici.",
    creator: "@enginnblt",
    images: ["/images/og-default.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Transition>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </Transition>
        <Footer />
      </body>
    </html>
  );
}
