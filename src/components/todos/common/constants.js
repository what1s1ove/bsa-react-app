  import { DEFAULT_FILTER_VALUE } from '../../../common/constants/constants';
  import {
    FilterKey,
    TodoKey,
    TodoPriority,
    TodoStatus,
  } from '../../../common/enums/enums';

  const DEFAULT_FILTER_VALUES = {
    [FilterKey.SEARCH]: '',
    [FilterKey.STATUS]: DEFAULT_FILTER_VALUE,
    [FilterKey.PRIORITY]: DEFAULT_FILTER_VALUE,
  };

  const EMPTY_TODO = {
    [TodoKey.TITLE]: '',
    [TodoKey.DESCRIPTION]: '',
    [TodoKey.PRIORITY]: TodoPriority.HIGH,
    [TodoKey.STATUS]: TodoStatus.OPEN,
  };

  export { DEFAULT_FILTER_VALUES, EMPTY_TODO };
