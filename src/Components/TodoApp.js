import { useState } from 'react'
import TodoList from './TodoList'
import { nanoid } from 'nanoid'
import Input from './Input';
import '../Components/todo.css'

const TodoApp = () => {

    // data source
    const initialTasks = JSON.parse(localStorage.getItem("todoList")) || [];

    console.log(initialTasks)

    const [tasks, setTasks] = useState(initialTasks);
    const [error, setError] = useState("");

    const addNewTask = (task) => {
        console.log(`In the todoapp: The new task is ${task}`)
        
        if (task === "") {
            // Display error when the task is empty
            setError("Enter a valid task")
            return;
        }

        const taskObject = {
            id: nanoid(),
            name: task
        }
        const updatedTasks = [taskObject, ...tasks];
        console.log({ updatedTasks })
        setTasks(updatedTasks)
        localStorage.setItem('todoList', JSON.stringify(updatedTasks))
        setError(""); // Clear the error message
    }

    const deleteTask = (taskId) => {
        // delete logic
        console.log(`${taskId} item deleted`)
        // filters out the item whose id is equal to taskId
        const updatedTasks = tasks.filter((item) => {
            return item.id !== taskId
        })
        console.log(updatedTasks)
        setTasks(updatedTasks)
        localStorage.setItem('todoList', JSON.stringify(updatedTasks))

    }

    return (
        <div className='container'>
            <h2 className='title'>TODO APP</h2>
            <Input handleClick={addNewTask} />
            {error && <p className="error">{error}</p>}
             {/* horizontal rule */}
            <div className="demarcation"></div>
            {tasks.length > 0 ?
                <TodoList tasks={tasks} onDeleteClick={deleteTask} /> :
                <p className='empty'>No item in the list</p>
            }

        </div>
    )
}

export default TodoApp