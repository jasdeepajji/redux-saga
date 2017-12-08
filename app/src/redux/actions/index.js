
//Actions 
export const FETCH = "FETCH";
export const DELETE = "DELETE";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const API         = "API";
export const API_DATA    = "API_DATA";
export const EDIT        = "EDIT";
export const UPDATE      = "UPDATE";

let nextTodoId = 0;
export const fetch = (data) => {
  return {
    type: FETCH,
    payload:data
  }
}

export const del = (index) => {
  return {
    type: DELETE,
    index
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


export const deleteTodo = (index) => {
  return {
	  type: DELETE_TODO,
    index
  }
}

export const apiData = (data) => {
  return {
    type: API_DATA,
    data
  }
}

export const edit = (text,index) => {
  return {
    type: EDIT,
    text,
    index
  }
}

export const update = (text,index) => {
  return {
    type: UPDATE,
    text,
    index
  }
}