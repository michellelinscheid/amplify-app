import { Providers } from "@/components/ui/providers";
import NavBar from "./navbar.js";
import Footer from "./footer.js";
// import { MyHeader } from "./hamburger";
import { Birthstone_Bounce, Frank_Ruhl_Libre } from "next/font/google";
import "./globals.css";

import { Amplify } from "aws-amplify";
// import { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

const client = generateClient();

import { env } from '$amplify/env/sender'; // the import is '$amplify/env/<function-name>'

// client.queries.sayHello({
//   name: "Amplify",
// })

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
  console.log("client")
  console.log(client)
  console.log("env")
  console.log(env)
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
