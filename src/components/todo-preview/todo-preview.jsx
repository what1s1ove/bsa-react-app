import PropTypes from 'prop-types';
import { getTodoById } from 'helpers/helpers';
import { DataPlaceholder } from 'common/enums/enums';
import { todoType } from 'common/prop-types/prop-types';
import { Placeholder } from 'components/common/common';
import './styles.css';

const TodoPreview = ({ todos, id }) => {
  const todo = getTodoById(todos, id);

  const hasPage = Boolean(todo);

  if (!hasPage) {
    return <Placeholder text={DataPlaceholder.NO_TODO} />;
  }

  return (
    <section className="todo-preview">
      <h1 className="todo-preview__title">{todo.title}</h1>
      <dl className="todo-preview__list">
        <div className="todo-preview__item">
          <dt className="todo-preview__item-title">Description:</dt>
          <dd className="todo-preview__item-desc">{todo.description}</dd>
        </div>
        <div className="todo-preview__item">
          <dt className="todo-preview__item-title">Priority:</dt>
          <dd className="todo-preview__item-desc">{todo.priority}</dd>
        </div>
        <div className="todo-preview__item">
          <dt className="todo-preview__item-title">Status:</dt>
          <dd className="todo-preview__item-desc">{todo.status}</dd>
        </div>
      </dl>
    </section>
  );
};

TodoPreview.propTypes = {
  todos: PropTypes.arrayOf(todoType.isRequired).isRequired,
  id: PropTypes.string.isRequired,
};

export default TodoPreview;
