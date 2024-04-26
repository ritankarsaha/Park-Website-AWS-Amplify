"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import { Amplify } from 'aws-amplify';
// import { generateClient } from 'aws-amplify/api';
// import config from '../amplifyconfiguration.json';
// Amplify.configure(config);

// const client = generateClient();
import amplifyconfig from '../amplifyconfiguration.json';

Amplify.configure(amplifyconfig);
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
