import { todos as todoSaga } from 'store/todos/sagas';
import { all } from 'redux-saga/effects';

function* rootSaga() {
  yield all([todoSaga()]);
}

export { rootSaga };
