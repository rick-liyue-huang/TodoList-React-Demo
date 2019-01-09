
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios';
import { GET_LIST_SAGA } from './actionTypes';
import { initListAction } from './actionCreators';


function* getSagaList() {
	// console.log('abc');

	// 'yield' means wait to get the ajax data (asyn)
	
	try {
		const res = yield axios.get('/api/list')
		const action = initListAction(res.data);
		yield put(action);

	} catch {
		console.log('list.js err');
	}
	

}

// generator function
function* mySaga() {
  yield takeEvery(GET_LIST_SAGA, getSagaList)
}

export default mySaga;