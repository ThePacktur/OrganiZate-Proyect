import type { PropsWithChildren } from 'react'

type ModalProps = PropsWithChildren<{
  title: string
  open: boolean
  onClose: () => void
}>

export function Modal({ title, open, onClose, children }: ModalProps) {
  if (!open) return null

  return (
    <div className="oz-modal-backdrop" onClick={onClose}>
      <div className="oz-modal" onClick={(e) => e.stopPropagation()}>
        <header>
          <h3>{title}</h3>
          <button onClick={onClose}>×</button>
        </header>
        <div>{children}</div>
      </div>
    </div>
  )
}
