
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {API,FETCH,DELETE,EDIT,addTodo,deleteTodo,apiData,update} from '../actions'
import * as Api from '../../api';

/********************* Api call start *******************/

function* fetchIpInfo({payload}) {
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
  yield takeLatest(API, fetchIpInfo);
}



/********************* Api call end *******************/



// worker Saga: will be fired on FETCH  actions
function* fetchTodo({payload}) { 
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
  yield takeLatest(FETCH, fetchTodo);
}


// worker Saga: will be fired on DELETE actions
function* delTodo({index}) { 
   try {
     yield put(deleteTodo(index));
   } catch (e) {
    console.log(e);      
   }
}

/*
  Starts fetchUser on each dispatched `DELETE` action.
  Allows concurrent fetches of user.
*/
export function* deleteFun() { 
  yield takeLatest(DELETE, delTodo);
}


// worker Saga: will be fired on DELETE actions
function* updateTodo({text,index}) { 
   try {
     yield put(update(text,index));
   } catch (e) {
    console.log(e);     
   }
}

/*
  Starts fetchUser on each dispatched `EDIT` action.
  Allows concurrent fetches of user.
*/
export function* editFun() { 
  yield takeLatest(EDIT, updateTodo);
}


