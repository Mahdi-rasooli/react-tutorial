/*import React, {useState , useEffect} from 'react';

// useEffect()
// React Hook that tells React to DO THIS CODE WHEN:
// (pick one) 
// This component re-renders
// This component mounts
// The state of a value changes

function Mycomponent5() {

    const [Count , setCount] = useState(0)

    const [color , setColor] = useState("green")

    useEffect(() => {
        document.title = `${Count} ${color}`
    } ,[Count , color])

    function AddCount(){
        setCount(c => c + 1)
    }

    function DecrementCount(){
        setCount(c => c - 1)
    }

    function changecolor(){
        setColor(c => c === "green" ? "red" : "green")
    }


  return (
      <>
        <p>Count :{Count}</p>
        <button onClick={AddCount}>Add</button>
        <button onClick={DecrementCount}>decrement</button>
        <button onClick={changecolor}>changecolor</button>

      </>


  )
}

export default Mycomponent5 */



import React , {useState , useEffect} from 'react'

function Mycomponent5() {

    const [width , setWidth] = useState(window.innerWidth);
    const [height , setHeight] = useState(window.innerHeight);



    useEffect(() => {

       window.addEventListener("resize" , handleResize)
       console.log('Event Listner Added')

       return () => {
         window.removeEventListener("resize" , handleResize);
         console.log('Event Listner Deleted')
       }

       
    } ,[])




    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }


  return (
    <>
      <p>width : {width}px</p>
      <p>height : {height}px</p>
    </>
  )
}

export default Mycomponent5

