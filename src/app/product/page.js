import React from 'react'
import Link from 'next/link'

export default function Products() {
  return (
    <div>
        <h1>List of Products</h1>
        <h3><Link href="/product/1">Product 1</Link></h3>
        <h3><Link href="/product/2">Product 2</Link></h3>
        <h3><Link href="/product/3">Product 3</Link></h3>
        <Link href="/">Home</Link>
    </div>
  )
}
