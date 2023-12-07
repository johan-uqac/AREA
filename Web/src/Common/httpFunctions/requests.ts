const HOST = process.env.REACT_APP_ENVIRONMENT === 'DEV' ? 'http://localhost' : 'https://area-uqac-back.onrender.com'
const PORT = process.env.REACT_APP_ENVIRONMENT === 'DEV' ? '8080' : undefined // TODO: Change to production port

export function get(endpoint: string, searchParams?: URLSearchParams) {
  return request(endpoint + '?', 'GET', undefined, searchParams)
}

export function post(endpoint: string, body: string) {
  return request(endpoint, 'POST', body)
}

export function put(endpoint: string, body: string) {
  return request(endpoint, 'PUT', body)
}

export function del(endpoint: string, body: string) {
  return request(endpoint, 'DELETE', body)
}

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

function request(endpoint: string, method: Method, body?: string, searchParams?: URLSearchParams): Promise<Response> {
  const url = HOST + (PORT ? ':' + PORT : '') + endpoint + (searchParams ?? '')
  return fetch(url, {
    method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  })
}
