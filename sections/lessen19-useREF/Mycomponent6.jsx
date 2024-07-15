import React ,{useState , useEffect , useRef} from 'react'

function Mycomponent6() {

    const inputref1 = useRef(null)
    const inputref2 = useRef(null)
    const inputref3 = useRef(null)



    useEffect(() => {
        console.log("Component rendered")
    })


    function handleClick1(){
        inputref1.current.focus();
        inputref1.current.style.background = "red"
        inputref2.current.style.background = ""
        inputref3.current.style.background = ""
    }

    function handleClick2(){
        inputref2.current.focus();
        inputref2.current.style.background = "red"
        inputref1.current.style.background = ""
        inputref3.current.style.background = ""
    }

    function handleClick3(){
        inputref3.current.focus();
        inputref3.current.style.background = "red"
        inputref2.current.style.background = ""
        inputref1.current.style.background = ""
    }

  return (
    <div>
        <button onClick={handleClick1}>
             click me 1
        </button>
       <input ref={inputref1} /><br />

       <button onClick={handleClick2}>
             click me 2
        </button>
       <input ref={inputref2} /><br />

       <button onClick={handleClick3}>
             click me 3
        </button>
       <input ref={inputref3} />
    </div>
  )
}

export default Mycomponent6