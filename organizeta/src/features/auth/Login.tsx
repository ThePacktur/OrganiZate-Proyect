import { useState } from 'react'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, githubProvider, googleProvider } from '../../app/firebase'
import { Button } from '../../components/Button/Button'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const onEmailLogin = async () => {
    setError(null)
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
      setError((err as Error).message)
    }
  }

  return (
    <section className="oz-auth">
      <h2>Iniciar sesión</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={onEmailLogin}>Ingresar</Button>
      <Button onClick={() => signInWithPopup(auth, googleProvider)}>Google</Button>
      <Button onClick={() => signInWithPopup(auth, githubProvider)}>GitHub</Button>
      {error && <p>{error}</p>}
    </section>
  )
}
