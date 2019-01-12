
<<<<<<< HEAD

import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { GET_SAGA_LIST } from './actionTypes';
import { getServerListAction } from './actionCreators';

function* getSagaList() {
	try {

		const res = yield axios.get('/api/list');
		const action = getServerListAction([...res.data]);
		put.dispatch(action);

	} catch {
		console.log('e');
	}
}

function* TodoListSaga() {
  yield takeEvery(GET_SAGA_LIST, getSagaList);
}

export default TodoListSaga;























=======
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
>>>>>>> a6fae085c9abf616131399812d683cf83279eee0
