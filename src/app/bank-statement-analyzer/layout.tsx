import React from "react";
import type {Metadata} from "next";
import Header from "@/features/bank-statement-analyzer/components/Header";
import Footer from "@/features/bank-statement-analyzer/components/Footer";

export const metadata: Metadata = {
  title: "Аналізатор банківської виписки",
  description: "Аналізатор банківської виписки",
};

export default function BankStatementAnalyzerLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className="min-h-screen grid grid-cols-1 grid-rows-[auto_1fr_auto]">
      <Header/>
      <main className="">
        <div className="wrapper">{children}</div>
      </main>
      <Footer/>
    </div>
  );
}
