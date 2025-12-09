import { Providers } from "@/components/ui/providers";
// import { Provider } from "@/components/ui/provider"
// import { defaultSystem } from "@chakra-ui/react"

import NavBar from "./navbar.js";
import Footer from "./footer.js";
// import { MyHeader } from "./hamburger";
import { Geist, Geist_Mono, Birthstone_Bounce, Frank_Ruhl_Libre } from "next/font/google";
import "./globals.css";

const birthstone = Birthstone_Bounce({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-birthstone",
});

const frankruhl = Frank_Ruhl_Libre({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-frankruhl",
});

export const metadata = {
  title: "Michelle Linscheid Therapy | Healing is Possible",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="plant.svg" type="image/x-icon" />
      </head>
      <Providers>
      <body
        className={`${frankruhl.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
      </Providers>
    </html>
    
  );
}
