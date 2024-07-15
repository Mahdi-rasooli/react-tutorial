import React,{useState} from "react";

function Counter(){

    const [count , setcounter] = useState(0);

    const increment = () => {
        setcounter(count + 1);
    }


    const decrement = () => {
        setcounter(count - 1);
    }


    const reset = () => {
        setcounter(0);
    }

    return(

        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={increment}>Increment</button>
            <button className="counter-button" onClick={reset}>Rsest</button>
            <button className="counter-button" onClick={decrement}>Decrement</button>
        </div>




    );
}

export default Counter