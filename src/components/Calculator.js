import { useState } from 'react'

export default function Calculator() {
    const [DecimalA, setDecimalA]  = useState ('')
    const [DecimalB, setDecimalB]  = useState ('')
    const [Result, setResult]  = useState ('')
  return (
    <div>
        <h1>Nhập vào các phần tử của bài toán tại phía dưới</h1><br/>
        <input  type='text' placeholder='a' value = {DecimalA} onChange={(e)=>setDecimalA(e.target.value*1)}/>
        <input type='text' placeholder='b' value = {DecimalB} onChange={(e)=>setDecimalB(e.target.value*1)}/>
        <p>Kết quả: {Result}</p>
        <button onClick={()=>setResult(DecimalA + DecimalB)}>+</button>
        <button onClick={()=>setResult(DecimalA - DecimalB)}>-</button>
        <button onClick={()=>setResult(DecimalA * DecimalB)}>x</button>
        <button onClick={()=>setResult(DecimalA / DecimalB)}>/</button>
    </div>
  )
}
