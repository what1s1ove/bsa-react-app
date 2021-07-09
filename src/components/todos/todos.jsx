import PropTypes from 'prop-types';
import { useCallback, useState } from '../../hooks/hooks';
import { DataPlaceholder } from '../../common/enums/enums';
import { Placeholder } from '../../components/common/common';
import { todoType } from '../../common/prop-types/prop-types';
import { TodoFilter, TodoList, TodoPopup } from './components/components';
import {
  addTodo,
  getFilteredTodos,
  removeTodo,
  updateTodo,
  updateTodoStatus,
} from './helpers/helpers';
import { DEFAULT_FILTER_VALUES, EMPTY_TODO } from './common/constants';
import './styles.css';

const Todos = ({ todos: fetchedTodos }) => {
  const [todos, setTodos] = useState(fetchedTodos);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [filterValues, setFilterValues] = useState(DEFAULT_FILTER_VALUES);

  const filteredTodos = getFilteredTodos(todos, filterValues);
  const hasTasks = Boolean(filteredTodos.length);
  const hasCurrentTodo = Boolean(currentTodo);

  const handlerFilterChange = (values) => setFilterValues(values);

  const handleAddPopupOpen = () => setCurrentTodo(EMPTY_TODO);

  const handleAddPopupClose = () => setCurrentTodo(null);

  const handleTodoEdit = (todo) => setCurrentTodo(todo);

  const handleTodoSave = useCallback((todo) => {
    const isUpdate = Boolean(todo.id);

    setTodos(isUpdate ? updateTodo(todos, todo) : addTodo(todos, todo));

    setCurrentTodo(null);
  }, [setTodos, todos]);

  const handlerTodoStatusChange = useCallback((todo, status) => {
    setTodos(updateTodoStatus(todos, todo.id, status));
  }, [setTodos, todos]);

  const handleTodoDelete = useCallback((todo) => {
    setTodos(removeTodo(todos, todo));
  }, [setTodos, todos]);

  return (
    <>
      <section className="todo-filter">
        <h2 className="sr-only">TODOList filter</h2>
        <TodoFilter
          values={filterValues}
          onChange={handlerFilterChange}
          onPopupOpen={handleAddPopupOpen}
        />
      </section>
      <section className="todos">
        <h2 className="sr-only">Your TODOList</h2>
        {hasTasks ? (
          <TodoList
            todos={filteredTodos}
            onStatusChange={handlerTodoStatusChange}
            onTodoEdit={handleTodoEdit}
            onTodoDelete={handleTodoDelete}
          />
        ) : (
          <Placeholder text={DataPlaceholder.NO_TODOS} />
        )}
      </section>
      {hasCurrentTodo && (
        <TodoPopup
          todo={currentTodo}
          onSave={handleTodoSave}
          onClose={handleAddPopupClose}
        />
      )}
    </>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(todoType.isRequired).isRequired,
};

export default Todos;
