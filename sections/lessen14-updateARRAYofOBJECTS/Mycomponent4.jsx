import React,{useState} from 'react';

function Mycomponent4() {

    const[cars , setCars] = useState([
                                     {
                                        year:2024,
                                        make:'Ford',
                                        model:'Mustang'
                                     }
    ]);

    const[caryear , setCarYear] = useState(new Date().getFullYear());
    const[carmake , setCarMake] = useState("");
    const[carmodel , setCarModel] = useState("");


    function handleAddCar(){
        const newcar = {year: caryear 
                      , make: carmake 
                      , model: carmodel}



        setCars(c => [...c , newcar]);

        setCarYear(new Date().getFullYear());
        
        setCarMake("");

        setCarModel("");

    }

    function handleRemoveCar(index){

        setCars(c => c.filter((_ , i) => i !== index))
    }

    function handleChangeYear(event){
        setCarYear(event.target.value);

    }

    function handleChangeMake(event){
        setCarMake(event.target.value);

    }

    function handleChangeModel(event){
        setCarModel(event.target.value);

    }

    


  return (
    <div>
        <h2>List of cars</h2>
        <ul>
            {cars.map((car , index) => 
               <li key={index} onClick={() => handleRemoveCar(index)}>
                  {car.year} {car.make} {car.model}
               </li>)}

        </ul>

        <input type="number"  value={caryear} onChange={handleChangeYear}/><br />
        <input type="text"    value={carmake} onChange={handleChangeMake}  placeholder='Enter car make'/><br />
        <input type="text"    value={carmodel} onChange={handleChangeModel} placeholder='Enter car model' /><br />

        <button onClick={handleAddCar}>Add car</button>

    </div>

    
  );
}

export default Mycomponent4