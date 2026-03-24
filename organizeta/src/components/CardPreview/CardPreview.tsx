export function CardPreview({ title, description }: { title: string; description?: string }) {
  return (
    <article className="oz-card-preview">
      <h4>{title}</h4>
      {description && <p>{description}</p>}
    </article>
  )
}
