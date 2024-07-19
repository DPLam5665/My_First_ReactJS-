import React, { useState } from 'react'

export default function Hook1() {
    const [name, setName] = useState("")
  return (
    <div>
        <h1>Hook3, name={name}</h1>
        <input type = "text" placeholder = "Enter your name here" value = {name} onChange={(e)=>setName(e.target.value)}></input>
    </div>
  )
}
