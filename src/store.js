import { createStore, applyMiddleware } from "redux";
import Reducer from "./reducers/reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();


const customMiddleware = (store) => (next) => (action) => {
	console.log("ACTION: ", action);
	next(action);
}

const store = createStore(Reducer, {}, applyMiddleware(customMiddleware, sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;