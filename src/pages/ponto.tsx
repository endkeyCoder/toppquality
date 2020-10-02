import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby';
const Login = () => {
    const [loginUser, setLoginUser] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const handleLoginUser = (text: string) => {
        setLoginUser(text)
    }
    const handleLoginPassword = (text: string) => {
        setLoginPassword(text)
    }
    const handleLogin = (e: React.MouseEvent) => {
        e.preventDefault()
    }

    return (
        <div>
            <p>Controle de ponto<br /> ToppQuality</p>
            <input id="loginUser" value={loginUser} onChange={e => handleLoginUser(e.target.value)} />
            <input id="loginPassword" type="password" value={loginPassword} onChange={e => handleLoginPassword(e.target.value)} />
            <button onClick={e => handleLogin(e)}>Login</button>
            <Link to="ponto/register" >Cadastre-se</Link>
        </div>
    )
}

export default Login