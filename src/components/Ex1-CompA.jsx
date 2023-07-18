import React from 'react'
import Ex1CompB from './Ex1CompB'

const Ex1CompA = () => {

    const number = 32

  return (
    <div className=' p-4 bg-green-200'>
        <h1>Componente A</h1>
        number = {number}
        <Ex1CompB number={number}/>
    </div>
  )
}

export default Ex1CompA