import { TodoKey, TodoPriority } from '../../../../common/enums/enums';
import { Modal } from '../../../common/common';
import './style.css';

const priorityOptions = Object.values(TodoPriority);

const TodoPopup = () => (
  <Modal>
    <section className="todo-popup">
      <h2 className="sr-only">Create new ToDo</h2>
      <form className="todo-popup__form" autoComplete="off">
        <label className="todo-popup__title">
          <span className="todo-popup__heading">Title:</span>
          <input
            name={TodoKey.TITLE}
            type="text"
            placeholder="Title"
            required
          />
        </label>
        <label className="todo-popup__description">
          <span className="todo-popup__heading">Description</span>
          <textarea name={TodoKey.DESCRIPTION} placeholder="Description" />
        </label>
        <label className="todo-popup__priority">
          <span className="todo-popup__heading">Priority</span>
          <select name={TodoKey.PRIORITY}>
            {priorityOptions.map((it) => (
              <option value={it} key={it}>
                {it}
              </option>
            ))}
          </select>
        </label>
        <p className="todo-popup__buttons">
          <button
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

export default TodoPopup;
