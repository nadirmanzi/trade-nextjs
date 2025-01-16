import type {Metadata} from "next";
import {main_font} from './fonts'
import "./globals.css";

import ThemeProvider from "@/components/ThemeProvider";
import React from "react";

export const metadata: Metadata = {
    title: {
        default: "TradeFlow",
        template: "%s | TradeFlow",
    },
    description: "Trading and crypto platform.",
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${main_font.className} antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
