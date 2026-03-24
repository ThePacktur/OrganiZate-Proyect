import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../app/firebase'
import { Button } from '../../components/Button/Button'

export function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
    setMessage('Cuenta creada correctamente')
  }

  return (
    <section className="oz-auth">
      <h2>Registro</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={onSubmit}>Crear cuenta</Button>
      {message && <p>{message}</p>}
    </section>
  )
}
