import type { Metadata } from "next";
import { Inter,Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({ subsets: ["latin"] , weight: [ "100","300","400" ,"500","700", "900"] });


export const metadata: Metadata = {
  title: "Color Fill",
  description: "Change Your Image colors using Color Fill Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} scroll-smooth`} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
