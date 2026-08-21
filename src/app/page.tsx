import Link from 'next/link'
import Page from '@/shared/components/Page'
import {Card, CardContent} from "@/shared/ui/card";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Пет проєкт",
  description: "Тестовий проєкт на React + Next.js",
};

export default function Home() {
  return (
    <Page>
      <Card className="w-full max-w-7xl mx-auto px-8 md:px-12 mt-8">
        <CardContent>
          <Link href="/bank-statement-analyzer">Аналізатор банківської виписки</Link>
        </CardContent>
      </Card>
    </Page>
  );
}
