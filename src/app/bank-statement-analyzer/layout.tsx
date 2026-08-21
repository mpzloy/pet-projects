import React from "react";

import Header from "@/shared/components/Header";
import Footer from "@/shared/components/Footer";
import Wrapper from "@/shared/components/Wrapper";

export default function BankStatementAnalyzerLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <Header/>
      <main>
        <Wrapper>{children}</Wrapper>
      </main>
      <Footer/>
    </>
  );
}
