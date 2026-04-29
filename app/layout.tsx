import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/mainComponents/Navbar";
import { Footer } from "@/components/mainComponents/Footer";
import FloatingContact from "@/components/mainComponents/Floatingcontact";
import ZohoSalesIQ from "@/components/mainComponents/ZohoSalesIQ";

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
      {/* ✅ ADD THIS */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W3GXHDBR');`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ ADD THIS */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W3GXHDBR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Navbar />
        <main className="pt-17.5">
          {children}
          {/* <FloatingContact
            whatsappNumber="447520604047"
            messengerUsername="primeleed"
          /> */}
          <ZohoSalesIQ />
        </main>
        <Footer />
      </body>
    </html>
  );
}
