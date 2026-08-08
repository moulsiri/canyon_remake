import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import GlobalContextProvider from "@/context/GlobalContext";
import SubHeader from "@/components/layout/SubHeader";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Canyon Ranch | The Well Way Of Life",
  description:
    "A Place To Pause, Restore, And Discover A Deeper Way Of Living Well.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GlobalContextProvider>
      <html
        lang="en"
        className={`${cormorant.variable} ${montserrat.variable}`}
      >
        <body
          style={{ fontFamily: "var(--font-montserrat)" }}
          className="antialiased bg-black text-white selection:bg-white/20"
        >
          <SmoothScroll>{children}</SmoothScroll>
          <SubHeader />
        </body>
      </html>
    </GlobalContextProvider>
  );
}
