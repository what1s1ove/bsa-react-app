import { getValidClasses } from '../../../../helpers/helpers';
import { AppPath, TodoStatus } from '../../../../common/enums/enums';
import { todoType } from '../../../../common/prop-types/prop-types';
import './style.css';

const Todo = ({ todo }) => {
  const isDone = todo.status === TodoStatus.DONE;

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
              <button className="todo__button todo__button--done" type="button">
                done
              </button>
            </li>
            <li className="todo__nav-item">
              <button className="todo__button todo__button--edit" type="button">
                edit
              </button>
            </li>
            <li className="todo__nav-item">
              <button
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
};

export default Todo;
