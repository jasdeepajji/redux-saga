
import _ from 'lodash';


//reducer
const ipInfo = (state = {}, action) => {
  switch (action.type) {
    case 'API_DATA':
	  //return state;
      return {
        ...state,
        ...action.data
      }
   
    default:
      return state
  }
}

export default ipInfo