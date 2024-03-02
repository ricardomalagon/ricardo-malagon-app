import type { Metadata } from "next";
import { Inter } from "next/font/google";

import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ricardo Malagon",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }} className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

export default RootLayout;
