import React from 'react'
import { Link } from 'react-router-dom'

function Missing() {
  return (
    <main className='missing'>
          <h2>There is no post with this id!</h2>
          <p>
            <Link to='/'>visit our homepage</Link>
          </p>
    </main>
  )
}

export default Missing