
//Actions 
const FETCH = "FETCH";
const DELETE = "DELETE";
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const API         = "API";
const API_DATA    = "API_DATA";

let nextTodoId = 0;
export const fetch = (data) => {
  return {
    type: FETCH,
    payload:data
  }
}

export const del = (text) => {
  return {
    type: DELETE,
    text:text
  }
}

export const api = () => {
  return {
    type: API
  }
}

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}


export const deleteTodo = (text) => {
  return {
	  type: DELETE_TODO,
      text
  }
}

export const apiData = (data) => {
  return {
    type: API_DATA,
    data
  }
}
