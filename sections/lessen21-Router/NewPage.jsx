import React , {useState} from 'react'
import { format } from 'date-fns'
import { useHistory } from 'react-router-dom'



function NewPage({ posts , setPosts }) {

  const history = useHistory();


  const [postTitle , setPostTitle] = useState('')
  const [postbody , setPostBody] = useState('')



  function handlesubmit(event){
    event.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date() , 'MMMM dd , yyyy pp');
    const newpost = { id , datetime , title: postTitle , body: postbody}
    const allposts = [...posts , newpost]
    setPosts(allposts)
    console.log('error')
    setPostTitle('')
    setPostBody('')
    history.push('/')
  }




  return (
    <main className='newpost'>
      <h2>New Post</h2>
      <form onSubmit={handlesubmit} className='newpostform'>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" 
               value={postTitle}
               id='posttitleid'
               required
               onChange={(event) => setPostTitle(event.target.value)} />
        <label htmlFor="postBody">Post Body:</label>   
        <textarea  id="postbodyid" 
                   cols="30" rows="10"
                   required
                   value={postbody}
                   onChange={(event => setPostBody(event.target.value))}
                   /> 
        <button type='submit'>Submit</button>           
      </form>

    </main>
  )
}

export default NewPage