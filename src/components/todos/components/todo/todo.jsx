import PropTypes from 'prop-types';
import { getValidClasses } from '../../../../helpers/helpers';
import { AppPath, TodoStatus } from '../../../../common/enums/enums';
import { todoType } from '../../../../common/prop-types/prop-types';
import './style.css';

const Todo = ({ todo, onStatusChange, onTodoEdit, onTodoDelete }) => {
  const isDone = todo.status === TodoStatus.DONE;

  const handleStatusChange = () => {
    const status = isDone ? TodoStatus.OPEN : TodoStatus.DONE;

    onStatusChange(todo, status);
  };

  const handleTodoEdit = () => {
    onTodoEdit(todo);
  };

  const handleTodoDelete = () => {
    onTodoDelete(todo);
  };

  return (
    <li className={getValidClasses('todo', isDone && 'todo--done')}>
      <h3 className="todo__title">
        <a href={`${AppPath.TODOS}/1`}>{todo.title}</a>
      </h3>
      <p className="todo__description">{todo.description}</p>
      <footer className="todo__footer">
        <strong className="todo__status">{todo.status}</strong>
        <div className="todo__nav-wrapper" tabIndex="0" role="button">
          <span className="todo__nav">...</span>
          <ul className="todo__nav-list">
            <li className="todo__nav-item">
              <button
                onClick={handleStatusChange}
                className="todo__button todo__button--done"
                type="button"
              >
                done
              </button>
            </li>
            <li className="todo__nav-item">
              <button
                onClick={handleTodoEdit}
                className="todo__button todo__button--edit"
                type="button"
              >
                edit
              </button>
            </li>
            <li className="todo__nav-item">
              <button
                onClick={handleTodoDelete}
                className="todo__button todo__button--delete"
                type="button"
              >
                delete
              </button>
            </li>
          </ul>
        </div>
      </footer>
    </li>
  );
};

Todo.propTypes = {
  todo: todoType.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onTodoEdit: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
};

export default Todo;
