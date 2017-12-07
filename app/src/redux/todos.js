
import _ from 'lodash';


//reducer
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
	//console.log("state",action);
	//return state;
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'DELETE_TODO':
     let index = _.findIndex(state,{text:action.text})
	 state.splice(index,1)
	 return [...state]
    default:
      return state
  }
}

export default todos