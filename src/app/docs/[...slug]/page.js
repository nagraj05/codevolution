import React from "react";

export default function Docs({ params }) {
    if (params.slug.length === 2) {
      return (
        <h1 className="font-bold p-2 flex justify-center items-center h-full">
          Viewing docs for feature {params.slug[0]} and concept of{" "}
          {params.slug[1]}
        </h1>
      );
    } else if (params.slug.length === 1) {
      return <h1 className="font-bold p-2 flex justify-center items-center h-full">Viewing docs for feature {params.slug[0]}</h1>;
    } else {
      return <div className="font-bold p-2 flex justify-center items-center h-full">Docs Home Page</div>;
    }
  }
  