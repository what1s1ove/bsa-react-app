import {
  useCallback,
  useState,
  useEffect,
  useSelector,
  useDispatch,
} from 'hooks/hooks';
import { todos as todosActionCreator } from 'store/actions';
import { DataPlaceholder, DataStatus } from 'common/enums/enums';
import { Placeholder, Loader } from 'components/common/common';
import { TodoFilter, TodoList, TodoPopup } from './components/components';
import { getFilteredTodos } from './helpers/helpers';
import { DEFAULT_FILTER_VALUES, EMPTY_TODO } from './common/constants';
import './styles.css';

const Todos = () => {
  const { todos, status } = useSelector(({ todos }) => ({
    todos: todos.todos,
    status: todos.status,
  }));
  const [currentTodo, setCurrentTodo] = useState(null);
  const [filterValues, setFilterValues] = useState(DEFAULT_FILTER_VALUES);

  const dispatch = useDispatch();
  const filteredTodos = getFilteredTodos(todos, filterValues);
  const hasTasks = Boolean(filteredTodos.length);
  const hasCurrentTodo = Boolean(currentTodo);

  const handlerFilterChange = (values) => setFilterValues(values);

  const handleAddPopupOpen = () => setCurrentTodo(EMPTY_TODO);

  const handleAddPopupClose = () => setCurrentTodo(null);

  const handleTodoEdit = (todo) => setCurrentTodo(todo);

  const handleTodoSave = useCallback((todo) => {
    const isUpdate = Boolean(todo.id);

    dispatch(isUpdate ? todosActionCreator.updateTodo(todo) : todosActionCreator.addTodo(todo));

    setCurrentTodo(null)
  }, [dispatch]);

  const handlerTodoStatusChange = useCallback((todo, status) => {
    dispatch(todosActionCreator.changeStatus({
      id: todo.id,
      status
    }));
  }, [dispatch]);

  const handleTodoDelete = useCallback((todo) => {
    dispatch(todosActionCreator.deleteTodo(todo));
  }, [dispatch]);

  useEffect(() => {
    dispatch(todosActionCreator.fetchTodos());
  }, [dispatch]);

  if (status === DataStatus.PENDING) {
    return <Loader />;
  }

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

export default Todos;
