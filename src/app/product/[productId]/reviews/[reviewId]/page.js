"use client"
import React from "react";
import { notFound } from "next/navigation";

function getRandomInt(count) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetails({ params }) {
  const random = getRandomInt(2)
  if (random === 1){
    throw new Error("Error loading review")
  }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      Product {params.productId} Reviews {params.reviewId}
    </div>
  );
}
