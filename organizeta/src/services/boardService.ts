import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore'
import { db } from '../app/firebase'

export type Board = { id: string; title: string; ownerId: string }

export async function createBoard(ownerId: string, title: string) {
  await addDoc(collection(db, 'boards'), {
    title,
    ownerId,
    members: [ownerId],
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}

export function listenBoardsByUser(userId: string, cb: (boards: Board[]) => void) {
  const q = query(
    collection(db, 'boards'),
    where('members', 'array-contains', userId),
    orderBy('updatedAt', 'desc'),
  )

  return onSnapshot(q, (snapshot) => {
    cb(snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as Omit<Board, 'id'>) })))
  })
}
