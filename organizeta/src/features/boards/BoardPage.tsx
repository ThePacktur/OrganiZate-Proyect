import { useParams } from 'react-router-dom'
import { List } from '../lists/List'

export function BoardPageFeature() {
  const { boardId = '' } = useParams()

  return (
    <section>
      <h2>Tablero {boardId}</h2>
      <List boardId={boardId} />
    </section>
  )
}
