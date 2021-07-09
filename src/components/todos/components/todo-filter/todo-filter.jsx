import { DEFAULT_FILTER_VALUE } from '../../../../common/constants/constants';
import {
  FilterKey,
  TodoPriority,
  TodoStatus,
} from '../../../../common/enums/enums';
import './style.css';

const statusOptions = [DEFAULT_FILTER_VALUE].concat(Object.values(TodoStatus));
const priorityOptions = [DEFAULT_FILTER_VALUE].concat(Object.values(TodoPriority));

const TodoFilter = () => (
  <form className="filter" autoComplete="off">
    <label className="filter__search">
      <span className="sr-only">Search by name</span>
      <input
        name={FilterKey.SEARCH}
        type="search"
        placeholder="search by title"
      />
    </label>
    <label className="filter__status">
      <span className="sr-only">Search by status</span>
      <select name={FilterKey.STATUS}>
        {statusOptions.map((it) => (
          <option value={it} key={it}>
            {it}
          </option>
        ))}
      </select>
    </label>
    <label className="filter__priority">
      <span className="sr-only">Search by priority</span>
      <select name={FilterKey.PRIORITY}>
        {priorityOptions.map((it) => (
          <option value={it} key={it}>
            {it}
          </option>
        ))}
      </select>
    </label>
    <button className="filter__create" type="button">
      Created
    </button>
  </form>
);

export default TodoFilter;
