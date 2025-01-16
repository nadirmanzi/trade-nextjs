import MainNavigation from "@/components/navigation/MainNavigation";
import layout_styles from "./layout.module.css";
import React from "react";

export default function MainLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <MainNavigation/>

            <main
                className={`${layout_styles.main} flex overflow-y-auto bg-background text-foreground`}
            >
                <div className="flex-1">{children}</div>
            </main>
        </>
    );
}
