import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MetaMistério",
  description: "Descubra informações de documentos - Arquivo Nacional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {/* TODO: Add header */}
          <div className="bg-primary p-3 text-off-white text-3xl font-bold flex flex-row gap-4 items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={90}
              height={90}
              className="bg-off-white rounded p-2"
            />
            MetaMistério
          </div>
          <main className="flex flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
