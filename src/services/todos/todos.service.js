import { ApiPath, ContentType, HttpMethod } from 'common/enums/enums';

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

  getOne(id) {
    return this._http.load(this._getUrl(id), {
      method: HttpMethod.GET,
    });
  }

  create(payload) {
    return this._http.load(this._getUrl(), {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
    });
  }

  update(payload) {
    return this._http.load(this._getUrl(payload.id), {
      method: HttpMethod.PUT,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
    });
  }

  partialUpdate(id, payload) {
    return this._http.load(this._getUrl(id), {
      method: HttpMethod.PATCH,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
    });
  }

  delete(id) {
    return this._http.load(this._getUrl(id), {
      method: HttpMethod.DELETE,
    });
  }

  _getUrl(path = '') {
    return `${this._baseUrl}${this._basePath}/${path}`;
  }
}

export { Todos };
