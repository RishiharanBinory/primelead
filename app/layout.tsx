import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/mainComponents/Navbar";
import { Footer } from "@/components/mainComponents/Footer";
import FloatingContact from "@/components/mainComponents/Floatingcontact";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Primeleed | Secure UK University Placement",
  description:
    "Start your journey in higher education & pursue your passion with Primeleed.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-17.5">
          {children}
          {/* <FloatingContact
            whatsappNumber="+447520604047"
            messengerUsername="primeleed"
          /> */}
        </main>
        <Footer />
      </body>
    </html>
  );
}
