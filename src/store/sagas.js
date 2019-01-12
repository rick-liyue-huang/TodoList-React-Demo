

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























