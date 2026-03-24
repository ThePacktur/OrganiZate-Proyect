import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Board } from '../../services/boardService'
import { listenBoardsByUser } from './boardService'

export function BoardList({ userId }: { userId: string }) {
  const [boards, setBoards] = useState<Board[]>([])

  useEffect(() => {
    const unsubscribe = listenBoardsByUser(userId, setBoards)
    return unsubscribe
  }, [userId])

  return (
    <div className="oz-board-grid">
      {boards.map((board) => (
        <Link key={board.id} to={`/boards/${board.id}`} className="oz-board-item">
          {board.title}
        </Link>
      ))}
    </div>
  )
}
