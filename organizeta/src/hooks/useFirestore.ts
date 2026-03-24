import { db } from '../app/firebase'

export function useFirestore() {
  return { db }
}
