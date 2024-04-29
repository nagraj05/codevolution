import React from "react";
import { notFound } from "next/navigation";

export default function ReviewDetails({ params }) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      Product {params.productId} Reviews {params.reviewId}
    </div>
  );
}
