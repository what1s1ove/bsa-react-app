import { all, call, put, delay, takeEvery } from 'redux-saga/effects';
import { ActionStatus } from 'common/enums/enums';
import { store } from 'store/store';
import {
  todos as todosService,
  notification as notoficationService,
} from 'services/services';
import { updateTodoHard, fetchTodos } from './actions';

const HARD_UPDATE_DELAY = 3000;
const RANDOM_HALF = 0.5;

function* changeEntryStatus({ payload }) {
  const { todo: todoPayload } = payload;

  try {
    const todo = yield call([todosService, todosService.update], todoPayload);

    yield delay(HARD_UPDATE_DELAY);

    if (Math.random() > RANDOM_HALF) {
      throw new Error('Unexpected error');
    }

    yield put({
      type: `${updateTodoHard.type}/${ActionStatus.FULFILLED}`,
      payload: {
        todo,
      },
    });
  } catch (err) {
    yield call(
      [notoficationService, notoficationService.error],
      'Error',
      err.message,
      {
        onToastrClick: () => store.dispatch(fetchTodos()),
      },
    );

    yield put({
      type: `${updateTodoHard.type}/${ActionStatus.REJECTED}`,
    });
  }
}

function* watchChangeEntryStatus() {
  yield takeEvery(updateTodoHard.type, changeEntryStatus);
}

function* todos() {
  yield all([watchChangeEntryStatus()]);
}

export { todos };
