import { Toolbar } from './Toolbar'
import { CanvasStage } from './CanvasStage'

export function CardEditor() {
  return (
    <section className="oz-editor">
      <h3>Editor Pro de Tarjetas</h3>
      <Toolbar />
      <CanvasStage />
    </section>
  )
}
