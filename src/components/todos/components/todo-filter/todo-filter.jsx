import PropTypes from 'prop-types';
import { DEFAULT_FILTER_VALUE } from 'common/constants/constants';
import { FilterKey, TodoPriority, TodoStatus } from 'common/enums/enums';
import './style.css';

const statusOptions = [DEFAULT_FILTER_VALUE].concat(Object.values(TodoStatus));
const priorityOptions = [DEFAULT_FILTER_VALUE].concat(Object.values(TodoPriority));

const TodoFilter = ({ values, onChange, onPopupOpen }) => {
  const handleChange = ({ target }) => {
    const { name, value } = target;

    onChange({
      ...values,
      [name]: value,
    });
  };

  return (
    <form className="filter" autoComplete="off">
      <label className="filter__search">
        <span className="sr-only">Search by name</span>
        <input
          value={values.search}
          name={FilterKey.SEARCH}
          onChange={handleChange}
          type="search"
          placeholder="search by title"
        />
      </label>
      <label className="filter__status">
        <span className="sr-only">Search by status</span>
        <select
          value={values.status}
          name={FilterKey.STATUS}
          onChange={handleChange}
        >
          {statusOptions.map((it) => (
            <option value={it} key={it}>
              {it}
            </option>
          ))}
        </select>
      </label>
      <label className="filter__priority">
        <span className="sr-only">Search by priority</span>
        <select
          value={values.priority}
          name={FilterKey.PRIORITY}
          onChange={handleChange}
        >
          {priorityOptions.map((it) => (
            <option value={it} key={it}>
              {it}
            </option>
          ))}
        </select>
      </label>
      <button onClick={onPopupOpen} className="filter__create" type="button">
        Created
      </button>
    </form>
  );
};

TodoFilter.propTypes = {
  values: PropTypes.exact({
    [FilterKey.SEARCH]: PropTypes.string.isRequired,
    [FilterKey.STATUS]: PropTypes.oneOf(statusOptions).isRequired,
    [FilterKey.PRIORITY]: PropTypes.oneOf(priorityOptions).isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onPopupOpen: PropTypes.func.isRequired,
};

export default TodoFilter;
