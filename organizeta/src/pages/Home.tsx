import { Link } from 'react-router-dom'

export function Home() {
  return (
    <section>
      <h1>OrganiZeta</h1>
      <p>Gestiona tableros, listas, tarjetas y diseños avanzados.</p>
      <Link to="/boards">Ir a tableros</Link>
    </section>
  )
}
