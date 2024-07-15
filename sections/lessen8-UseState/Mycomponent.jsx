import React ,{useState} from "react";

function Mycomponent(){

    const [name , setName] = useState("New guest");
    const [age , setAge] = useState(0);
    const [isemployed , setEmplyee] = useState(false);


    const updateName = () => {
        setName("MaRa")
    }

    const ageincrement = () => {
        setAge(age + 1)
    }

    const toggleemplye = () => {
        setEmplyee(!isemployed);

    }



    return(
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>click</button>

            <p>Age : {age}</p>
            <button onClick={ageincrement}>set age</button>

            <p>is employed : {isemployed ? "yes" : "no"}</p>
            <button onClick={toggleemplye}>toggle status</button>
        </div>

    );

}

export default Mycomponent
