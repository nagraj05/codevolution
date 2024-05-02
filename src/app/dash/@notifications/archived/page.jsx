import Card from '@/components/card'
import Link from 'next/link'
import React from 'react'

export default function ArchivedNotifications() {
  return (
    <Card><div>These are the Archived notifications</div>
    <Link href="/dash">Default</Link></Card>
  )
}
