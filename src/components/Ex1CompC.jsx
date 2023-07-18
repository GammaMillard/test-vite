import React from 'react'

const Ex1CompC = ({handleClick, number}) => {

   

  return (
    <div className='p-4 bg-yellow-200'>
        <h1>Componente C</h1>
        <h3>{number}</h3>
        <button className='p-1 border border-black' onClick={handleClick}>Añadir</button>
    </div>
  )
}

export default Ex1CompC