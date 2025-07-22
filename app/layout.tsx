import type { Metadata } from "next";
import { Geist} from "next/font/google";
import "./globals.css";
import Provider from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "logofy.ai",
  description: "an platfrom for creating best logos for free using ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} } antialiased`}
      >
        <Provider>
          {children}
        </Provider>
        
      </body>
    </html>
  );
}
