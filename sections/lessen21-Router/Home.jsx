import React from 'react'
import Feed from './Feed'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Home({posts}) {
  return (
    <div className='home'>
      {posts.length ? (
        posts.map(post => (
        <article className='post' key={post.id}>
          <Link to={`/post/${post.id}`}>
            <h2 className='posttitlehome'>{post.title}</h2>
            <p className='postdatehome'>{post.datetime}</p>
          </Link>
          <p className='postbodyhome'>
          {
                (post.body).length <= 25 ? 
                post.body :
               `${(post.body).slice(0 , 25)}...`
          }
          </p>
        </article>
         )
         )
      ) :
      (
        <p style={{marginTop:"2rem"}}>No post.</p>
      )}

    </div>
  )
}

export default Home