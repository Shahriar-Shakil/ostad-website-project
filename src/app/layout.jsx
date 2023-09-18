import SiteNavBar from "@/components/SiteNavbar";
import "./globals.css";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import SiteFooter from "@/components/SiteFooter";

export async function generateMetadata() {
  return {
    title: "Home",
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={""}>
        <NextTopLoader color="#269999" height={3} speed={200} />
        <SiteNavBar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
