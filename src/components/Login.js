import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './Auth'
import app from '../config'
import '../App.css';

const LogIn = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, password } = e.target.elements;

        try {

            app.auth().signInWithEmailAndPassword(email.value, password.value);

        } catch(error) {
            alert(error);
        }
    }

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Navigate to="/portfolio" />;
    }

    return (
        <>
            <div class="border" >
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
            <div className="custom-select mr-sm-2">
                <label for="exampleInputEmail1" className="form-label">Email address</label><br/>
                <input type="email" name="email" class="login-input" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label><br/>
                <input type="password" name="password" className="login-input" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </>
    )
}

export default LogIn;