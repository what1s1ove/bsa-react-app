import { AppPath } from '../../../../common/enums/enums';
import './style.css';

const Todo = () => (
  <li className="todo">
    <h3 className="todo__title">
      <a href={`${AppPath.TODOS}/1`}>Learn HTML</a>
    </h3>
    <p className="todo__description">Be the best with HTML 🟥</p>
    <footer className="todo__footer">
      <strong className="todo__status">high</strong>
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
            <button className="todo__button todo__button--delete" type="button">
              delete
            </button>
          </li>
        </ul>
      </div>
    </footer>
  </li>
);
export default Todo;
