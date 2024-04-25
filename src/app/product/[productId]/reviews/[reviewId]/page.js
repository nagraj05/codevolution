import React from 'react'

export default function ReviewDetails({params}) {
  return (
    <div>Product {params.productId} Reviews {params.reviewId}</div>
  )
}
