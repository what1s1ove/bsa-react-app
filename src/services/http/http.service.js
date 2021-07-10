import { HttpHeader, HttpMethod } from 'common/enums/enums';

class Http {
  load(url, options = {}) {
    const { method = HttpMethod.GET, payload = null, contentType } = options;
    const headers = this._getHeaders({
      contentType,
    });

    return fetch(url, {
      method,
      headers,
      body: payload,
    })
      .then(this._checkStatus)
      .then(this._parseJSON)
      .catch(this._throwError);
  }

  _getHeaders({ contentType }) {
    const headers = new Headers();

    if (contentType) {
      headers.append(HttpHeader.CONTENT_TYPE, contentType);
    }

    return headers;
  }

  _checkStatus(response) {
    const { ok: isOk, status, statusText } = response;

    if (!isOk) {
      throw new Error(`${status}: ${statusText}`);
    }

    return response;
  }

  _parseJSON(response) {
    return response.json();
  }

  _throwError(err) {
    throw err;
  }
}

export { Http };
