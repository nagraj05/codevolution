import Link from 'next/link'
import React from 'react'

export default function F4() {
  return (
    <div>
        <h1>This is page 4</h1>
        <Link href="/f1/f3">f3</Link>
        <Link href="/about">About</Link>
    </div>
  )
}
