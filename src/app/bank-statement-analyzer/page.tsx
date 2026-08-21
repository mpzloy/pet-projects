import type {Metadata} from "next";
import BankStatementAnalyzerPage from "@/features/bank-statement-analyzer/components/BankStatementAnalyzerPage";

export const metadata: Metadata = {
  title: "Аналізатор банківської виписки",
  description: "Аналізатор банківської виписки",
};

export default function Page() {
  return <BankStatementAnalyzerPage/>
}
