import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore'
import { db } from '../app/firebase'

export type CardModel = {
  id: string
  boardId: string
  listId: string
  title: string
  description?: string
  position: number
}

export async function createCard(boardId: string, listId: string, title: string, position: number) {
  await addDoc(collection(db, 'cards'), {
    boardId,
    listId,
    title,
    position,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}

export function listenCards(boardId: string, listId: string, cb: (cards: CardModel[]) => void) {
  const q = query(
    collection(db, 'cards'),
    where('boardId', '==', boardId),
    where('listId', '==', listId),
    orderBy('position', 'asc'),
  )

  return onSnapshot(q, (snapshot) => {
    cb(snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as Omit<CardModel, 'id'>) })))
  })
}
