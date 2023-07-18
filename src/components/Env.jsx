import React from 'react'

const Env = () => {
  return (
    <div>{import.meta.env.VITE_API_URL || 'No hay env'}</div>
  )
}

export default Env