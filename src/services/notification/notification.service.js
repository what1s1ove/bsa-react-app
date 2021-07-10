import { toastr } from 'react-redux-toastr';

class Notification {
  constructor() {
    this._instance = toastr;
  }

  error(title, message, option) {
    this._instance.error(title, message, option);
  }

  success(title, message, option) {
    this._instance.success(title, message, option);
  }

  info(title, message, option) {
    this._instance.info(title, message, option);
  }
}

export { Notification };
