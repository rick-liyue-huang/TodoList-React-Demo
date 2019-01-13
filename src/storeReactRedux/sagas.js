
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { SAGA_LIST } from './actionTypes';
import { serverListAction } from './actionCreators';

function* getSagaList() {
	try {
		const result = yield axios.get('/api/list');
		const action = serverListAction([...result.data]);
		put.dispatch(action);

	} catch {
		console.log('e');
	}
}

function* listSaga() {
  yield takeEvery(SAGA_LIST, getSagaList);
}

export default listSaga;