import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handleLogin = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <button onClick={handleLogin}>login</button>
        </h2>

    </div>
  )
}

export default Login