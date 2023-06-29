import React, { useState } from "react";
import deleteIcon from "../images/trash (1).png";
import checkedIcon from "../images/icons8-checked (1).svg";
import uncheckedIcon from "../images/icons8-checked.svg"; 

const TodoList = (props) => {
    const [checkedTasks, setCheckedTasks] = useState([]);

    // function that toggles the checked status of a task
    const handleToggleStatus = (taskId) => {
        if (checkedTasks.includes(taskId)) {
        setCheckedTasks(checkedTasks.filter((id) => id !== taskId));
        } else {
        setCheckedTasks([...checkedTasks, taskId]);
        }
    };


    const renderedTasks = props.tasks.map((task, index) => {
    const isChecked = checkedTasks.includes(task.id);
    return (
      <div key={task.id} className="todo-list">
        <div className="todo-item">
          <div className="status-container">
            <button className="status" 
             onClick={() => handleToggleStatus(task.id)}>
             {isChecked ? (
                <img
                className="icon"
                src={checkedIcon}
                alt="Checked"
                width="30"
                height="30"
              />
             ) : (
                <img
                  className="icon"
                  src={uncheckedIcon}
                  alt="Unchecked"
                  width="30"
                  height="30"
                />
             ) }
            </button>
            <p className="taskName">{task.name}</p>
          </div>
          <div className="btn-group">
            <button
              className="delete"
              onClick={() => props.onDeleteClick(task.id)}>
             <img className="del" src={deleteIcon} alt="Delete" />
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    // Tasks
    <>{renderedTasks}</>
  );
};

export default TodoList;
