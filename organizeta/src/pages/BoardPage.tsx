import { BoardPageFeature } from '../features/boards/BoardPage'
import { CardEditor } from '../features/cards/CardEditor/CardEditor'

export function BoardPage() {
  return (
    <>
      <BoardPageFeature />
      <CardEditor />
    </>
  )
}
