
import { all,fork } from 'redux-saga/effects';
import * as SAGA from './saga';

export default function* sagaDemo (){
  yield all([
   ...Object.values(SAGA)
  ].map(fork));
}