import React from 'react';
import { Metadata } from 'next';

export const generateMetadata = ({ params }) => {
  return {
    title: `Products ${params.productId}`
  };
};

export default function ProductDetails({ params }) {
  return (
    <div>Details about product {params.productId}</div>
  );
}
