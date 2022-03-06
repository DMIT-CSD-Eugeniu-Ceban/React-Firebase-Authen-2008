import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginPageStyle, FormControl } from './styles'
import { Label } from '../../ui/forms/label/Label';
import { Input } from './../../ui/forms/input/Input';
import { SubmitButton } from '../../ui/buttons';

import {auth} from './../../libs/firebase'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import{BiMessageSquareError} from 'react-icons/bi'

function LoginPage(props) {
    //JS code will be here
    const navigate = useNavigate();
    const [email, setEmail] = useState('')          // useState() return stateful value, function to change the stateful value
    const [password, setPassword] = useState('')

    
    const notify = (error) => toast.error(error.code, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        icon: <BiMessageSquareError/>
    });
    
    function onHandleSignIn(e) {
        e.preventDefault();
        
        signInWithEmailAndPassword(auth, email, password)
        .then(userCrediental => {
            //move dashboard page
            // useNavigate()  react router 
            navigate('dashboard')
        })
            .catch(error => {
            notify(error)
        })
    }


    return (
        <LoginPageStyle >
            <ToastContainer/>
            <header>
                <h1>Welcome Page Login </h1>
            </header>

            <form onSubmit={onHandleSignIn}>

                <FormControl>
                    <Label>Email</Label>
                    <Input type="text" placeholder='janedo@gmail.com' bgc="	whitesmoke" onChange={(e) => setEmail(e.target.value)} />
                </FormControl>

                <FormControl>
                    <Label>Password</Label>
                    <Input type="password" placeholder='you password' bgc="	whitesmoke" onChange={(e) => setPassword(e.target.value)} />
                </FormControl>

                <FormControl>
                    <SubmitButton padding="0.8rem 0" margin="1rem 0 0 0" bgcolor="lightblue" color="black" border="1px solid grey">Sign Into the Dashboard</SubmitButton>
                </FormControl>
            </form>
        </LoginPageStyle>
    )

}

export default LoginPage 