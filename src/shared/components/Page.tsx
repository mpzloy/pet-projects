import React from 'react';

import Header from '@/shared/components/Header';
import Footer from "@/shared/components/Footer";

interface PageProps {
  mainClass?: string;
  children: React.ReactNode;
}

function Page({mainClass, children}: PageProps) {
  return (
    <>
      <Header/>
      <main className={`${mainClass ?? ''}`}>
        {children}
      </main>
      <Footer/>
    </>
  );
}

export default Page;