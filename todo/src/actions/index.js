export const ADD_TASK = 'ADD_TASK'
export const TOGGLE_TASK = 'TOGGLE_TASK'


let taskID = 0;

export const addTask = (text) => {
  return { type: ADD_TASK, 
           text,
           id: taskID++ }
}

export const toggleTask = (id) => {
  return { type: TOGGLE_TASK, 
           id }
}

