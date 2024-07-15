import React from 'react'
import { useParams , Link } from 'react-router-dom'

function PostPage({posts , handleDelete}) {
  
  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id);


  return (
    <main className='postpage'>
      <article className='postshow'>
        {post && 
        <>
         <h2>{post.title}</h2>
         <p className='postdate'>{post.datetime}</p>
         <p className='postbody'>{post.body}</p>
         <button onClick={() => handleDelete(post.id)}>Delete Post</button>
        </>
        }
        {!post && 
        <>
          <h2>There is no post with this id!</h2>
          <p>
            <Link to='/'>visit our homepage</Link>
          </p>
        </>
        }
      </article>
    </main>
  )
}

export default PostPage