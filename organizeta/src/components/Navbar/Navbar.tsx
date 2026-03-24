import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <nav className="oz-navbar">
      <strong>OrganiZeta</strong>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/boards">Tableros</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  )
}
