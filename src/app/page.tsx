import Link from 'next/link'
import {Card, CardContent} from "@/shared/ui/card";

export default function Home() {
  return (
    <main>
      <Card className="w-full max-w-7xl mx-auto px-8 md:px-12 mt-8">
        <CardContent>
          <Link href="/bank-statement-analyzer">Аналізатор банківської виписки</Link>
        </CardContent>
      </Card>
    </main>
  );
}
