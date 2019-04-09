
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { SAGA_LIST } from './actionTypes';
import { serverListAction } from './actionCreators';

function* getSagaList() {
	console.log(123);
	try {
		const result = yield axios.get('/api/list');
		console.log(result.data);
		const action = serverListAction([...result.data]);
		console.log(action);
		yield put(action);

	} catch {
		console.log('e');
	}
}

function* listSagas() {
  yield takeEvery(SAGA_LIST, getSagaList);
}

export default listSagas;













