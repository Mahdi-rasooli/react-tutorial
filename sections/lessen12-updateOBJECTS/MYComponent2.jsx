import React,{useState} from "react";


function MYComponent2(){

    const[car , setCar] = useState({year: 2024,
                                    make: "", 
                                    model: ""})



    function handleYearChange(event){
        setCar(c => ({...c , year  :event.target.value}));
    }


    function handleMakeChange(event){
        setCar(c => ({...c , make  :event.target.value}));
    }


    function handleModelChange(event){
        setCar(c => ({...c , model  :event.target.value}));
    }



    return(
        <div>
            <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange} /><br /><br />
            <input type="text" value={car.make} onChange={handleMakeChange} /><br /><br />
            <input type="text" value={car.model} onChange={handleModelChange}/>
        </div>
        
    );
}

export default MYComponent2



