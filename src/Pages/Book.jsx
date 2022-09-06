import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

export default function Book() {
  const params = useParams();
  const outletObj = useOutletContext();
  return (
    <>
      <h2>Book {params.id} {params.tag}</h2>
      <h4>{outletObj.hello}</h4>
    </>
  )
}
