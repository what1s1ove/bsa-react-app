import { ApiPath, HttpMethod } from 'common/enums/enums';

class Todos {
  constructor({ baseUrl, http }) {
    this._baseUrl = baseUrl;
    this._http = http;
    this._basePath = ApiPath.TODOS;
  }

  getAll() {
    return this._http.load(this._getUrl(), {
      method: HttpMethod.GET,
    });
  }

  _getUrl(path = '') {
    return `${this._baseUrl}${this._basePath}${path}`;
  }
}

export { Todos };
