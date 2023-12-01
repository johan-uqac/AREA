const HOST = process.env.REACT_APP_ENVIRONMENT === 'DEV' ? 'http://localhost' : 'http://localhost' // TODO: Change to production url
const PORT = process.env.REACT_APP_ENVIRONMENT === 'DEV' ? '8080' : '8080' // TODO: Change to production port

export function get(endpoint: string, searchParams?: URLSearchParams) {
  return request(endpoint + '?', 'GET', searchParams)
}

export function post(endpoint: string, body: string) {
  return request(endpoint, 'POST', undefined, body)
}

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

function request(endpoint: string, method: Method, searchParams?: URLSearchParams, body?: string): Promise<Response> {
  console.log(HOST + ':' + PORT + endpoint + searchParams)
  return fetch(HOST + ':' + PORT + endpoint + searchParams, {
    method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  })
}
