const HOST = 'http://localhost'
const PORT = '3001'

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
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  })
}
