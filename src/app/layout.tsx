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
          <div className="bg-primary p-3 text-off-white text-xl font-bold flex flex-row gap-4">
            <Image src="/logo.png" alt="logo" width={50} height={50} />
            MetaMistério
          </div>
          <main className="flex flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
