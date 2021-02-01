import React, {useState} from 'react'
import LoginForm from './LoginForm'

function Login() {
    const adminUser = {
        name: 'admin123',
        password: 'admin123'
    }

    const [user, setUser] = useState({email: ''});
    const [error, setError] = useState('')

    const Login = details => {
        if(details.name === adminUser.name && details.password === adminUser.password) {
            setUser({
                name: details.name
            })
        } else {
            setError('U Wrong! try again!')
        }
    }

    const Logout = () => {
        setUser({name: '', password: ''})
    }

    return (
        <div>
            {(user.email != "") ? (
                <div className="welcome">
                    <h2>welcome <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ):(
                <LoginForm Login={Login} error={error} />
            )}
        </div>
    )
}


export default Login