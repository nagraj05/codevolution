import React from 'react'

export const generateMetadata=({params})=>{
    return {
        title:`Movies ${params.moviesId}`
    }
}

export default function MovieDetails({params}) {
  return (
    <div>Details about movie {params.moviesId}</div>
  )
}
