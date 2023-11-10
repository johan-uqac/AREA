import { getAuth, createUserWithEmailAndPassword, UserCredential, signInWithEmailAndPassword } from 'firebase/auth'

export function subscribe(email: string, password: string): Promise<UserCredential> {
  const auth = getAuth()
  return createUserWithEmailAndPassword(auth, email, password)
}

export function login(email: string, password: string): Promise<UserCredential> {
  const auth = getAuth()
  return signInWithEmailAndPassword(auth, email, password)
}
