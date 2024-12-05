import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Background from "@/components/Background";
import { Providers } from "./Provider";
import MyNavbar from "@/components/MyNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Name",
  description: "Project Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + "min-h-screen antialiased"}>
        <Providers>
          <main className="h-screen overflow-y-auto dark text-foreground bg-background ">
            <Background />
            <MyNavbar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
