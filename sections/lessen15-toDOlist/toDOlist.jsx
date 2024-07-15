import React , {useState} from 'react';



function ToDOList() {

  const [tasks , setTask] = useState(['Take a shower' , 'Eat a breakfast' , 'Go to work']);
  const [newtask , setNewTask] = useState();



  function handleInputChange(event){
    setNewTask(event.target.value);
  }


  function AddTask(){

    if(newtask.trim() !== ""){
      
      setTask(t => [...t , newtask])
      setNewTask("")
    }
  }

  function DeleteTask(index){

    setTask(tasks.filter((_,i) => i != index))
  }


  function moveTaskUp(index){

    if(index > 0){
      const updatetasks = [...tasks];
      const temp = updatetasks[index];
      updatetasks[index] = updatetasks[index - 1];
      updatetasks[index - 1] = temp;

      setTask(updatetasks);
    }
  }

  function moveTaskDown(index){

    if(index < tasks.length - 1){
      const updatetasks = [...tasks];
      const temp = updatetasks[index];
      updatetasks[index] = updatetasks[index + 1];
      updatetasks[index + 1] = temp;

      setTask(updatetasks);
    }
  }
  
  return (

    <div className='to-do-list'>

      <h1>To-Do-List</h1>

      <div>
        <input type="text" placeholder='Enter a task...' value={newtask} onChange={handleInputChange} />
        <button className='add-button' onClick={AddTask}>Add</button>
      </div>

      <ol>
        {tasks.map((task , index) => 
          <li key={index}>
            <span className='text'>

              {task} 
              <button className='delete-button' onClick={() => DeleteTask(index)}>Delete</button>
              <button className='move-button' onClick={() => moveTaskUp(index)}>👆</button>
              <button className='move-button' onClick={() => moveTaskDown(index)}>👇</button>

            </span>
          </li>)}
      </ol>

    </div>
  )
}

export default ToDOList