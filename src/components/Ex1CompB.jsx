import React, { useState } from 'react'
import Ex1CompC from './Ex1CompC'

const Ex1CompB = ({number}) => {

    const [counter,setCounter] = useState(number)

    const handleClick = () => {
        setCounter(prev => prev+=1)
    }

  return (

    <div className='p-4 bg-red-200'>
        <h1>Componente B</h1>
        counter : {counter}
        <Ex1CompC handleClick={handleClick} number={number}/>
    </div>
  )
}

export default Ex1CompB