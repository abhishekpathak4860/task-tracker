import { ADD_TASK, DELETE_TASK } from "./actions";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks") || "[]"), 
};

const taskReducer = (state = initialState, action) => {
  let updatedTasks;
  switch (action.type) {
    case ADD_TASK:
      updatedTasks = [...state.tasks, action.payload];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return { ...state, tasks: updatedTasks };

    case DELETE_TASK:
      updatedTasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return { ...state, tasks: updatedTasks };

    default:
      return state;
  }
};

export default taskReducer;
