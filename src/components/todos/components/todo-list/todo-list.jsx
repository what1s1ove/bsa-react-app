import PropTypes from 'prop-types';
import { todoType } from 'common/prop-types/prop-types';
import Todo from '../todo/todo';
import './style.css';

const Todolist = ({ todos, isDisabled, onStatusChange, onTodoEdit, onTodoDelete }) => (
  <ul className="todolist">
    {todos.map((todo) => (
      <Todo
        todo={todo}
        isDisabled={isDisabled}
        onStatusChange={onStatusChange}
        onTodoEdit={onTodoEdit}
        onTodoDelete={onTodoDelete}
        key={todo.id}
      />
    ))}
  </ul>
);

Todolist.propTypes = {
  todos: PropTypes.arrayOf(todoType.isRequired).isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onTodoEdit: PropTypes.func.isRequired,
  onTodoDelete: PropTypes.func.isRequired,
};

export default Todolist;
