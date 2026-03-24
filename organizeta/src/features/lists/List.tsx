import { useEffect, useState } from 'react'
import type { ListModel } from '../../services/listService'
import { listenLists } from './listService'
import { Card } from '../cards/Card'

export function List({ boardId }: { boardId: string }) {
  const [lists, setLists] = useState<ListModel[]>([])

  useEffect(() => {
    const unsubscribe = listenLists(boardId, setLists)
    return unsubscribe
  }, [boardId])

  return (
    <div className="oz-lists">
      {lists.map((list) => (
        <div key={list.id} className="oz-list">
          <h3>{list.title}</h3>
          <Card boardId={boardId} listId={list.id} />
        </div>
      ))}
    </div>
  )
}
