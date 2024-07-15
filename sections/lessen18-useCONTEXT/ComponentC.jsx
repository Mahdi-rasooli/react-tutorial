import React ,{useContext} from 'react';
import { UserContext } from './ComponentA';
import ComponentD from './ComponentD'
import { CityContext } from './ComponentB';

function ComponentC() {


    const user = useContext(UserContext);
    const city = useContext(CityContext)


  return (
    <>
      <div className='box'>
        <h1>Component C</h1>
        <h2>{`Hello again ${user} ${city}`}</h2>
        <ComponentD />
      </div>
    </>
  )
}

export default ComponentC