import { useEffect, useState } from 'react'
import type { CardModel } from '../../services/cardService'
import { listenCards } from './cardService'
import { CardPreview } from '../../components/CardPreview/CardPreview'

export function Card({ boardId, listId }: { boardId: string; listId: string }) {
  const [cards, setCards] = useState<CardModel[]>([])

  useEffect(() => {
    const unsubscribe = listenCards(boardId, listId, setCards)
    return unsubscribe
  }, [boardId, listId])

  return (
    <div>
      {cards.map((card) => (
        <CardPreview key={card.id} title={card.title} description={card.description} />
      ))}
    </div>
  )
}
