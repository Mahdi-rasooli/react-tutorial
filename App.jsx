


/* //////////  first lessen //////////

import Header from "./header.jsx"
import Footer from "./footer.jsx";
import Food from "./food.jsx";

function App() {
  
  return(
    <>
{ it depends on your priority and you can arrange them as you want }

      <Header/>
      <Food/>
      <Footer/>

    </>

);


}


export default App*/







/*  ////// second lesson /////*/
/*
import Card from "./sections/lessen2/Card";


function App(){


  return(
    <>
    <Card />
    <Card />
    <Card />
    <Card />
    </>

  );
}
*/






 ///// third lessen 
 /*
import Button from "./sections/lessen3-button/button.jsx";

function App(){

  return(
    <>

    <Button/>
      
    </>
  );
}
*/







 /////// fourth lessen    props /////////
/*
import Student from "./sections/lessen4-props/students"

function App(){

  return(
    <>
      <Student name="Walter White" age={56} isStudent ={false}/>
       <Student name="Joey" age={23} isStudent ={true}/>
       <Student name="Chandler" age={26} isStudent ={true}/>
       <Student name="Monica" age={29} isStudent ={false}/>
       <Student name="Ross"/>
    </>
  );
}
*/







 //// lessen 5 rendering
/*
import UserGreeting from "./sections/lessen5-rendering/userGreeting";



function App(){

  return(
    <>
      <UserGreeting isloggedin={true} Username="Mahdi"/>
    </>

  );
}
*/






///// lessen 6 rendering lists
/*
import List from './sections/lessen6-renderingLIST/List'


function App(){

  const fruits = [{id: 1 , name: "apple" , calories:54} , 
                  {id: 2 , name: "pineapple" , calories:99} , 
                  {id: 3 , name: "mango" , calories:87} , 
                  {id: 4 , name: "bannana" , calories:176}]

  const vegetables = [{id: 5 , name: "carrot" , calories:89} , 
                      {id: 6 , name: "boroccoli" , calories:103} , 
                      {id: 7 , name: "corn" , calories:25} , 
                      {id: 8 , name: "celery" , calories:33}]                

  return(
    <>
       {fruits.length > 0 ? <List items={fruits} category="fruits"/> : null}
       {vegetables.length > 0 ? <List items={vegetables} category="vegetables"/> : null}
    </>
  )
}
*/







// //////////// lessen 7 click event /////////////////
/*
import Button from "./sections/lessen7-clickEVENTS/Button"

function App(){

  return(
    <> 
       <Button/>
    </>

  );

}*/





// ///////////// lessen 8 usestate ///////////
/*
import Mycomponent from "./sections/lessen8-UseState/Mycomponent.jsx";
import Counter from "./sections/lessen8-UseState/Counter.jsx";

function App(){

  return(
    <> 
       <Mycomponent/>
       <Counter/>
    </>

  );

}
*/









// /////////// lessen 9 onchange event //////////////
/*
import MyComponent from "./sections/lessen9-onchangeEVENT/Mycomponent";


function App(){


  return(
    <> 
      <MyComponent/>
    </>

  );
}
*/












// ///////////// lessen 10 color picker program /////////
/*
import ColorPicker from "./sections/lessen10-colorPICKERprogram/ColorPicker";


function App(){

  return(

    <>
      <ColorPicker/>
    </>

  );

}*/






// ////////////// lessen 11 updater function ///////////
/*
// updater function = A function passed as an argument to setState() usually
//                                  Allow for safe updates based on the previous state
//                                  Used with multiple state updates and asynchronous functions
//                                  Good practice to use updater functions

import MYcomponent from "./sections/lessen11-updaterFUNCTION/MYcomponent";

function App(){

  return(

    <>
      <MYcomponent/>
    </>

  );

}*/












// ////////// lessen 12 update objects state //////////
/*
import MYComponent2 from "./sections/lessen12-updateOBJECTS/MYComponent2";


function App(){

  return(

    <>
      <MYComponent2/>
    </>

  );

}*/







// //////////  lessen 13 update arrays /////////
/*
import Mycomponent3 from "./sections/lessen13-updateARRAYS.jsx/Mycomponent3";


function App(){

  return(

    <>
      <Mycomponent3/>
    </>

  );

}*/








// //////////// lessen 14 update array of objects //////////////
/*
import Mycomponent4 from "./sections/lessen14-updateARRAYofOBJECTS/Mycomponent4.jsx"

function App() {


  return (
    
    <>
      <Mycomponent4 />
    </>
  )
}
*/








// ////////////// lessen 15 to do list /////////////
/*
import ToDOList from "./sections/lessen15-toDOlist/toDOlist.jsx";

function App() {

  return (
    
    <>
     <ToDOList />
    </>
    
  )
}
*/









// ////////////// lessen 16 useeffect ///////////
/*
import Mycomponent5 from "./sections/lessen16-useEFFECT/Mycomponent5" 



import React from 'react'

function App() {
  return (
    <Mycomponent5 />
  )
}*/









// ////////// lessen 17 digital clock /////////
/*
import DigitalClock from './sections/lessen17-digitalCLOCK/DigitalClock'

function App() {
  return (
    <>
      <DigitalClock/>
    </>
  )
}*/





// ///////// lessen 18 use context //////////// 

// useContext() = React Hook that allows you to share values
//                            between multiple levels of components
//                            without passing props through each level

/*
import ComponentA from "./sections/lessen18-useCONTEXT/ComponentA"

function App() {
  return (
    <>
      <ComponentA/> 
    </>
  )
}
*/









/////////////// lessen 19 use ref /////////////////  

// useState() = Re-renders the component when the state value changes
// useRef()   = Does not cause re-renders when its value changes.
//              1. Accessing/Interacting with DOM elements
//              2. Handling Focus, Animations, and Transitions
//              3. Managing Timers and Intervals

/*
import Mycomponent6 from "./sections/lessen19-useREF/Mycomponent6"


function App() {
  return (
    <>
      <Mycomponent6/> 
    </>
  )
}
*/









///////////// lessen 20 create stopwatch ////////////
/*
import Stopwatch from "./sections/lessen20-createSTOPWATCH/Stopwatch"

function App() {
  return (
    <>
      <Stopwatch/> 
    </>
  )
}
*/







// /////////////// lessen Router /////////////
/*
import Header from './sections/lessen21-Router/Header'
import Nav from './sections/lessen21-Router/Nav'
import Footer from './sections/lessen21-Router/Footer'
import Home from './sections/lessen21-Router/Home'
import About from './sections/lessen21-Router/About'
import PostPage from './sections/lessen21-Router/PostPage'
import NewPage from './sections/lessen21-Router/NewPage'
import Missing from './sections/lessen21-Router/Missing'
import React,{useEffect, useState} from 'react'

import { BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { format } from 'date-fns'


function App() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }
  ])

  const history = useHistory();



  function handleDelete(id){
    const PostList = posts.filter(post => post.id !== id);
    setPosts(PostList)
    history.push('/')
  }

  return (
    <>
    <Router>
      <div className='App'>
        <Header title="Blog website"/>
        <Nav posts={posts}/>
        <Switch>
          <Route exact path='/'>
            <Home posts={posts} />
          </Route>
          <Route exact path='/post'>
            <NewPage posts={posts} setPosts={setPosts}/>
          </Route>
          <Route  path='/post/:id'>
            <PostPage posts={posts} handleDelete={handleDelete}/>
          </Route>
          <Route path='/about' component={About}/>
          <Route path='*' component={Missing}/>
        </Switch>
        <Footer />
      </div>
    </Router>
    </>
  )
}
*/









///////////////// tic tac toe ////////////////
/*
import TicTacToe from "./sections/lessen22-ticTacToe/TicTacToe"


function App() {
  return (
    <>
      <TicTacToe/> 
    </>
  )
}
*/






/* //////// navbar ///////////*/
/*
import { useEffect, useState } from "react"
import Navbar from "./sections/navbar/Navbar"

function App() {

  const current_theme = localStorage.getItem('current_theme')
  const [themeChange , setThemeChange] = useState(current_theme ? current_theme : 'light')

  useEffect(() => {
    localStorage.setItem('current_theme' , themeChange) 
  } , [themeChange])

  return (
    <div className={`container ${themeChange}`}>
      <Navbar themeChange={themeChange}  setThemeChange={setThemeChange}/>
    </div>
  )
}
*/








/* my to do list */ 
/*
import MyToDoList from "./sections/lessen15-toDOlist/MyToDoList/MyToDoList"


function App() {

  return (
    <MyToDoList/>
  )
}
*/










/* ////////////// tic tac toe 3 ////////*/
/*
import TicTacToe from "./sections/lessen22-ticTacToe/TicRacToe3/TicTacToe"


function App() {

  return (
    <TicTacToe/>
  )
}
*/


export default App






















