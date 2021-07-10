import { ENV } from 'common/enums/enums';
import { Http } from './http/http.service';
import { Notification } from './notification/notification.service';
import { Todos } from './todos/todos.service';

const http = new Http();
const notification = new Notification();
const todos = new Todos({
  baseUrl: ENV.API.URL,
  http,
});

export { http, todos, notification };
