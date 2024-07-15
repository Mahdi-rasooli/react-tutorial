import React,{useState} from "react";


function Mycomponent3(){

    const[foods , setFood] = useState(["Pasta" , "Pizza" , "Taco"])

    const[errormessage , setErrorMessage] = useState("");


    function handleAddFood(){

        const newfood = document.getElementById('foodinput').value;
       // document.getElementById('foodinput').value = "";

        if(newfood === ""){
            setErrorMessage("Enter an item");
        }

        else{
           setFood(f => [...f , newfood])
           setErrorMessage("");
           document.getElementById('foodinput').value = "";
        }
    }


    function handleRemoveFood(index){
        setFood(foods.filter((_,i) => i !=index ))
    }




    return(
        <div>
            <h2>My favourite foods</h2>
            {errormessage && <h2>{errormessage}</h2>}
            <ul>
                {foods.map((food , index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodinput" placeholder="Enter your food" />
            <button onClick={handleAddFood}>Add food</button>

        </div>
        
    );
}

export default Mycomponent3



