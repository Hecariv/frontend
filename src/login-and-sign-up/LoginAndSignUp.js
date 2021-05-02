import React from "react";
import Login from "../components/login/Login";
import SignUp from "../components/sign-up/SignUp";
import "./LoginAndSignUp.scss"

const LoginAndSignUp = () => (
    <div className={'login-and-sign-up'}>
        <Login />
        <SignUp />
    </div>
)

export default LoginAndSignUp;