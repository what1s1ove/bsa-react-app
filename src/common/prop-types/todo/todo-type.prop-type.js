import PropTypes from 'prop-types';
import { TodoKey, TodoStatus, TodoPriority } from '../../enums/enums';

const todoType = PropTypes.exact({
  [TodoKey.ID]: PropTypes.string.isRequired,
  [TodoKey.TITLE]: PropTypes.string.isRequired,
  [TodoKey.DESCRIPTION]: PropTypes.string.isRequired,
  [TodoKey.PRIORITY]: PropTypes.oneOf(Object.values(TodoPriority)).isRequired,
  [TodoKey.STATUS]: PropTypes.oneOf(Object.values(TodoStatus)).isRequired,
});

export { todoType };
