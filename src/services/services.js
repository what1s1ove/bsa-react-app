import { ENV } from 'common/enums/enums';
import { Http } from './http/http.service';
import { Todos } from './todos/todos.service';

const http = new Http();
const todos = new Todos({
  baseUrl: ENV.API.URL,
  http,
});

export { http, todos };
