
export default function request(method, url, body) {
  return fetch(
    `${HOST}:${PORT}/${url}.json`,
    {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: body && JSON.stringify(body),
    }
  )
  .then(response => (
    response.ok
    ? response.json()
    : Promise.reject(response.statusText)
  ));
}

export function get(url) {
  return request('GET', url);
}

export function del(url) {
  return request('DELETE', url);
}

export function ins(url, body) {
  return request('POST', url, body);
}

export function upd(url, body) {
  return request('PUT', url, body);
}
