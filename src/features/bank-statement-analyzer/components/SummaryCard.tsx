import React from 'react';
import {Card, CardHeader, CardContent} from "@/shared/ui/card";

interface Props {
  title: string;
  total: string | number;
}

function SummaryCard({title, total}: Props) {
  return (
    <Card className="rounded-md">
      <CardHeader>
        <p>{title}</p>
      </CardHeader>
      <CardContent>
        <div className="text-base">{total}</div>
      </CardContent>
    </Card>
  );
}

export default SummaryCard;