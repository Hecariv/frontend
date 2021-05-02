import React, {Component} from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import {auth, signInWithGoogle} from "../../firebase/Firebase";
import "./Login.scss"

//import "Login.scss"

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: "", password: ""})
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]: value})
    }


    render() {
        return (
            <div className={"login"}>
                <h2 className={'title'}>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name={"email"}
                        type={"email"}
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label={"email"}
                        required={true}
                    />
                    <FormInput

                        name={"password"}
                        type={"password"}
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label={"password"}
                        required={true}
                    />
                    <div className={"buttons"}>
                        <CustomButton type={"submit"} value={"Submit Form"}>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;