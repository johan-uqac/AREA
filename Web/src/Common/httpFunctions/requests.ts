const HOST = process.env.REACT_APP_ENVIRONMENT === 'DEV' ? 'http://localhost' : 'https://area-uqac-back.onrender.com' // TODO: Change to production url
const PORT = process.env.REACT_APP_ENVIRONMENT === 'DEV' ? '8080' : undefined // TODO: Change to production port

export function get(endpoint: string, searchParams?: URLSearchParams) {
  return request(endpoint + '?', 'GET', undefined, searchParams)
}

export function post(endpoint: string, body: string) {
  return request(endpoint, 'POST', body)
}

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

function request(endpoint: string, method: Method, body?: string, searchParams?: URLSearchParams): Promise<Response> {
  console.log(HOST + (PORT ? ':' + PORT : null) + endpoint + (searchParams ?? ''))
  return fetch(HOST + ':' + PORT + endpoint + (searchParams ?? ''), {
    method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  })
}
