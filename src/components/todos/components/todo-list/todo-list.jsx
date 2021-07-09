import PropTypes from 'prop-types';
import Todo from '../todo/todo';
import './style.css';

const Todolist = ({ count }) => (
  <ul className="todolist">
    {Array.from(new Array(count), (_, idx) => (
      <Todo key={idx} />
    ))}
  </ul>
);

Todolist.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Todolist;
