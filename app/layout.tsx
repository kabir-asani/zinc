import React, { PropsWithChildren } from "react";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const RootLayout = (props: PropsWithChildren) => {
  return (
    <html lang="en" className={inter.className}>
      <body>{props.children}</body>
    </html>
  );
};

export default RootLayout;
