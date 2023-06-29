import React, { useState } from 'react'

const Input = (props) => {
    const [newTask, setNewTask] = useState();

    const handleChange = (e) => {
        const taskName = e.target.value;
        setNewTask(taskName);
      };

    const handleClick = () => {
        // console.log(`new task is ${newTask}`);
        // this takes the function "handleClick to the parent "TodoApp
        props.handleClick(newTask);
        setNewTask("");
    };

  return (
    <div className='input'>
        <input type='text' 
        placeholder='Add Task...' 
        value={newTask} 
        onChange={handleChange}  />
        {/* {error} */}
        <button type='button' className='btn' onClick={handleClick}>Add</button>
    </div>  
  )
}

export default Input