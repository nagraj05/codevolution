import Card from "@/components/card";
import Link from "next/link";
import React from "react";

export default function Notifications() {
  return (
    <Card>
      <div>These are the notifications</div>
      <Link href="/dash/archived">Archieve</Link>
    </Card>
  );
}
