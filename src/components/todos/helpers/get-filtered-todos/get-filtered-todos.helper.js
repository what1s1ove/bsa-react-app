import { DEFAULT_FILTER_VALUE } from '../../../../common/constants/constants';

const getFilteredTodos = (todos, filterValues) => {
  const { search, status, priority } = filterValues;

  return todos.filter((it) => {
    const isNameMatch = it.title.toLowerCase().includes(search.toLowerCase());
    const isStatusMath = it.status === status || status === DEFAULT_FILTER_VALUE;
    const isPriorityMath = it.priority === priority || priority === DEFAULT_FILTER_VALUE;

    return isNameMatch && isStatusMath && isPriorityMath;
  });
};

export { getFilteredTodos };
