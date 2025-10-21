import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
type BlogLayoutProps = {
  children: React.ReactNode;
};
export function BlogLayout({ children }: BlogLayoutProps): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <ThemeToggle className="fixed top-4 right-4" />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}