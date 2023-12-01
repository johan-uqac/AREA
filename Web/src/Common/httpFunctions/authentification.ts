import { post } from './requests'

export function subscribe(email: string, password: string): Promise<Response> {
  return post('/user/sign-up', JSON.stringify({ email, password }))
}

export function login(email: string, password: string): Promise<Response> {
  return post('/user/sign-in', JSON.stringify({ email, password }))
}

export function checkIfUserExists(id: string): boolean {
  return id !== ''
}
