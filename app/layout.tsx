"use client";
import { Inter } from 'next/font/google'
import {NextUIProvider} from "@nextui-org/react";
import {Header} from "@/app/components/Layout/Header";
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextUIProvider>
        <Header />
        {children}
      </NextUIProvider>
      </body>
    </html>
  )
}
