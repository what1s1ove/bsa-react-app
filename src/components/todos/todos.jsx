import { TodoFilter, TodoList, TodoPopup } from './components/components';
import './styles.css';

const Todos = () => {
  const isPopupOpen = false;

  return (
    <>
      <section className="todo-filter">
        <h2 className="sr-only">TODOList filter</h2>
        <TodoFilter />
      </section>
      <section className="todos">
        <h2 className="sr-only">Your TODOList</h2>
        <TodoList />
      </section>
      {isPopupOpen && <TodoPopup />}
    </>
  );
};

export default Todos;
