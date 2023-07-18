import React, { useEffect, useState } from 'react'

const Pokemon = () => {

    const [pokemons, setPokemons] = useState([])
    const [limit, setLimit] = useState(20)
    
    const getData = async(url) => {
        const data = await fetch(url)
        return await (data.json())
    }

    const promise = async(array) => {
        const promise = await Promise.all(array.map( e => getData(e.url)))
        setPokemons(promise)
    }

   useEffect(() => {
        getData(`${import.meta.env.VITE_API_URL}?limit=${limit}&offset=${0}`).then(res => promise(res.results))
   },[limit])
 

  return (
    <div>

        {
            pokemons.map(e => (
            <div>
                <p>{e.name}</p>
                <p>{e.id}</p>
            </div>
            ))
        }
        <button onClick={() => {
            setLimit(prev => prev + 10)
        }}>Give me more!</button>
    </div>
  )
}

export default Pokemon