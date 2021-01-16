import React, { useState } from 'react'
import '../Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'
import { useProductContext } from '../ProductProvider'

export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = (e) => {
        e.preventDefault();
        // TODO: implement firebase login
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/');
                    console.log(auth);
                }
            })
            .catch(error => alert(error.message))
    };
    const register = (e) => { 
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
        // TODO: implement firebase register
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.png"
                    alt=""
                    className="login__logo" />
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={ (e) => setPassword(e.target.value) }
                    />

                    <button
                        className='login__signInButton'
                        onClick={signIn}>
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE 
                    CLONE COnditions of Use & Sale. Please
                    see your Privacy Notice, our Cookies Notice
                    and our Interest-Based Ads Notice.
                </p>

                <button
                    className='login__registerButton'
                    onClick={register}>
                    Create your Amazon account
                </button>
            </div>
        </div>
    )
}
