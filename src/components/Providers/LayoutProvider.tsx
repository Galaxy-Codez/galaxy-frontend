"use client";
import React from 'react'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";

const LayoutProvider = ({
  children
}: {
  children?: React.ReactNode
  }) => {
  
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default LayoutProvider