import { DataLoadStatus } from 'common/enums/enums';

const callApi = (_store) => (next) => (action) => {
  const { callApi, type, ...rest } = action;

  if (!callApi) {
    return next(action);
  }

  next({
    type: `${type}${DataLoadStatus.START}`,
    ...rest,
  });

  fetch(callApi)
    .then((res) => res.json())
    .then((data) => {
      next({
        ...rest,
        type: `${type}${DataLoadStatus.SUCCESS}`,
        payload: {
          response: data,
        },
      });
    })
    .catch((err) => {
      next({
        ...rest,
        type: `${type}${DataLoadStatus.FAIL}`,
        payload: {
          error: err,
        },
      });
    });
};

export { callApi };
