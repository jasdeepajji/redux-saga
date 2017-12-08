
//import _ from 'lodash';


//reducer
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]

    case 'DELETE_TODO': 
	   state.splice(action.index,1)
	  return [...state]

    case 'UPDATE':    
     state[action.index].text = action.text
    return [...state]

    default:
      return state
  }
}

export default todos