import React from 'react'
import { useOutletContext } from 'react-router-dom';

export default function NewBook() {
  const outletObj = useOutletContext();
  return (
   <>
    <h2>NewBook</h2>
    <h4>{outletObj.hello}</h4>
   </>
  )
}
