import React, { useState , createContext } from 'react'
import ComponentC from './ComponentC'

export const CityContext = createContext()

function ComponentB() {

    const [city , setCity] = useState("From Tehran")


  return (
    <>
      <div className='box'>
        <h1>Component B</h1>
        <CityContext.Provider value={city}>
            <ComponentC />
        </CityContext.Provider>
      </div>
    </>
  )
}

export default ComponentB