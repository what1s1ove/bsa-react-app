import PropTypes from 'prop-types';
import { DataPlaceholder } from '../../common/enums/enums';
import { todoType } from '../../common/prop-types/prop-types';
import { Placeholder } from '../common/common';
import { TodoFilter, TodoList, TodoPopup } from './components/components';
import './styles.css';

const Todos = ({ todos }) => {
  const isPopupOpen = false;
  const hasTasks = Boolean(todos.length);

  return (
    <>
      <section className="todo-filter">
        <h2 className="sr-only">TODOList filter</h2>
        <TodoFilter />
      </section>
      <section className="todos">
        <h2 className="sr-only">Your TODOList</h2>
        {hasTasks ? (
          <TodoList todos={todos} />
        ) : (
          <Placeholder text={DataPlaceholder.NO_TODOS} />
        )}
      </section>
      {isPopupOpen && <TodoPopup />}
    </>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(todoType.isRequired).isRequired,
};

export default Todos;
