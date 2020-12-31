import React from 'react'
import '../styles/Login.css';
import Button from '@material-ui/core/Button';
import {db, auth, provider} from '../firebase';
import {useStateValue} from '../StateProvider';
import { actionTypes } from '../reducer';

function Login() {

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then(result => (
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        ))
        .catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png" alt="Whatsapp Logo"/>
                <div className="login__text">
                    <h2>Signin to whatsapp</h2>
                </div>
                <Button type="submit" onClick={signIn}> Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
