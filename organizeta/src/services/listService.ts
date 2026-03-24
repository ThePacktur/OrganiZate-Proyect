import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore'
import { db } from '../app/firebase'

export type ListModel = { id: string; boardId: string; title: string; position: number }

export async function createList(boardId: string, title: string, position: number) {
  await addDoc(collection(db, 'lists'), {
    boardId,
    title,
    position,
    createdAt: serverTimestamp(),
  })
}

export function listenLists(boardId: string, cb: (lists: ListModel[]) => void) {
  const q = query(collection(db, 'lists'), where('boardId', '==', boardId), orderBy('position', 'asc'))

  return onSnapshot(q, (snapshot) => {
    cb(snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as Omit<ListModel, 'id'>) })))
  })
}
