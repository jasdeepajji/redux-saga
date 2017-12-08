
import { all,fork } from 'redux-saga/effects';
import * as SAGA from './saga';

/************** Bind all saga function here ***********/

export default function* sagaDemo (){
  yield all([
   ...Object.values(SAGA)
  ].map(fork));
}