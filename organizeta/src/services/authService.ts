import { signOut } from 'firebase/auth'
import { auth } from '../app/firebase'

export async function logout() {
  await signOut(auth)
}
