import { takeLatest, put, all, delay } from "redux-saga/effects";

function* setNameAsync(action) {
	yield delay(5000);
	yield put({...action, type: `${action.type}_ASYNC`});
}

function* setNameWatcher() {
	yield takeLatest("SET_NAME", setNameAsync);
}


export default function* rootSaga() {
	yield all([setNameWatcher()]);
}