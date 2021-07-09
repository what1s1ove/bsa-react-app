import PropTypes from 'prop-types';
import { useState, useFocusTrap } from '../../../../hooks/hooks';
import { TodoKey, TodoPriority } from '../../../../common/enums/enums';
import { todoType, createdTodoType } from '../../../../common/prop-types/prop-types';
import { Modal } from '../../../common/common';
import './style.css';

const priorityOptions = Object.values(TodoPriority);

const TodoPopup = ({ todo, onSave, onClose }) => {
  const [currentTodo, setCurrentTodo] = useState(todo);
  const ref = useFocusTrap();

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setCurrentTodo({ ...currentTodo, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSave(currentTodo);
  };

  return (
    <Modal isOpen={Boolean(currentTodo)} onClose={onClose}>
      <section className="todo-popup">
        <h2 className="sr-only">Create new ToDo</h2>
        <form
          ref={ref}
          onSubmit={handleSubmit}
          className="todo-popup__form"
          autoComplete="off"
        >
          <label className="todo-popup__title">
            <span className="todo-popup__heading">Title:</span>
            <input
              value={currentTodo.title}
              name={TodoKey.TITLE}
              onChange={handleChange}
              type="text"
              placeholder="Title"
              required
            />
          </label>
          <label className="todo-popup__description">
            <span className="todo-popup__heading">Description</span>
            <textarea
              value={currentTodo.description}
              name={TodoKey.DESCRIPTION}
              onChange={handleChange}
              placeholder="Description"
            />
          </label>
          <label className="todo-popup__priority">
            <span className="todo-popup__heading">Priority</span>
            <select
              value={currentTodo.priority}
              name={TodoKey.PRIORITY}
              onChange={handleChange}
            >
              {priorityOptions.map((it) => (
                <option value={it} key={it}>
                  {it}
                </option>
              ))}
            </select>
          </label>
          <p className="todo-popup__buttons">
            <button
              onClick={onClose}
              className="todo-popup__button"
              type="button"
            >
              Cancel
            </button>
            <button className="todo-popup__button" type="submit">
              Save
            </button>
          </p>
        </form>
      </section>
    </Modal>
  );
};

TodoPopup.propTypes = {
  todo: PropTypes.oneOfType([todoType.isRequired, createdTodoType.isRequired]).isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TodoPopup;
