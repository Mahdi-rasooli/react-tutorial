import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom';

function Nav({posts}) {

    const [search , setSearch] = useState('');
    const [searchresults , setSeacrhResults] = useState([]);

    useEffect(() => {
        const filteredResults = posts.filter((post) => 
               ((post.body).toLowerCase()).includes(search.toLowerCase())
            || ((post.title).toLowerCase()).includes(search.toLowerCase()))

            setSeacrhResults(filteredResults.reverse())
    },[posts , search])

    
    function handlePreventSubmit(event){
        event.preventDefault();
    }



  return (
    <nav className='nav'>
        <form className='searchform' onSubmit={handlePreventSubmit}>

            <label htmlFor="search"></label>

            <input id='input'
                   type='text'
                   placeholder='Search Posts' 
                   onChange={(e) => setSearch(e.target.value)}
                   value={search} 
            />
        </form>

        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/post'>Post</Link></li>
        </ul>

    </nav>
  )
}

export default Nav