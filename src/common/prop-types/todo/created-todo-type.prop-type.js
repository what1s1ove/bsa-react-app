import PropTypes from 'prop-types';
import { TodoKey, TodoStatus, TodoPriority } from 'common/enums/enums';

const createdTodoType = PropTypes.exact({
  [TodoKey.TITLE]: PropTypes.string.isRequired,
  [TodoKey.DESCRIPTION]: PropTypes.string.isRequired,
  [TodoKey.PRIORITY]: PropTypes.oneOf(Object.values(TodoPriority)).isRequired,
  [TodoKey.STATUS]: PropTypes.oneOf(Object.values(TodoStatus)).isRequired,
});

export { createdTodoType };
