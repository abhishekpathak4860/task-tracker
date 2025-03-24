import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <li className="taskitem">
      {task.name} ({task.priority}) - {task.category}
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </li>
  );
};


export default TaskItem;
