
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {addTodo,deleteTodo,apiData} from '../actions'
import * as Api from '../../api';


function* fetchIpInfo({payload,type}) {
   try {
      const data = yield call(Api.getIpInfo,"https://ipinfo.io");
      console.log("data",data);
      if(data){
        yield put(apiData(data));
      }
      
   } catch (e) {
    console.log(e);
   }
}

export function* apiCall(){
  yield takeEvery("API", fetchIpInfo);
}



/********************* Api end *******************/



// worker Saga: will be fired on FETCH  actions
function* fetchTodo({payload,type}) { console.log("FETCH",payload);
   try {
      yield put(addTodo(payload));
   } catch (e) {
    console.log(e);
   }
}

/*
  Starts fetchUser on each dispatched `FETCH` action.
  Allows concurrent fetches of user.
*/
export function* fetchTodoFun() { 
  yield takeEvery("FETCH", fetchTodo);
}


// worker Saga: will be fired on DELETE actions
function* delTodo({text,type}) { console.log("text",text);
   try {
      //const user = yield call(Api.fetchUser, action.payload.userId);
      yield put(deleteTodo(text));
   } catch (e) {
    console.log(e);
      //yield put(addTodo(payload));
   }
}

/*
  Starts fetchUser on each dispatched `DELETE` action.
  Allows concurrent fetches of user.
*/
export function* deleteFun() { 
  yield takeEvery("DELETE", delTodo);
}



