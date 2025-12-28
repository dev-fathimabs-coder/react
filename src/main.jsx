import React from 'react'
import { createRoot } from 'react-dom/client'

import './App.css'

function Card({ name, clr }) {

  return (
    <div className='card' style={{ background: clr }}>
      <h1 >Hello , World !!</h1>
      <p >welcome {name}</p>
    </div>
  )
}


let App = () => {

  let data = ['virat', 'dhoni', 'sanju', 'bhumra', 'virat', 'dhoni', 'sanju', 'bhumra']

  let bg = ['red', 'yellow', 'blue']

  return (
    <>
      {
        data.map((d, i) => {
          return <Card name={d} clr={bg[i % bg.length]} />
        })
      }
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <App />
)
