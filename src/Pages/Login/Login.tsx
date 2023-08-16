import "./Login.css"

import { useState } from 'react';
import { Form, FormGroup, FormLabel } from 'react-bootstrap';
import ContactHubLogo from '../../assets/images/contacthub_logo.png';
// import toast from 'react-hot-toast'

// import toasterConfig from "../../Helpers/toasterConfig";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleChange = (e: any) => {
        const { name, value } = e.target

        if (name === "email")
            setEmail(value)
        else if (name === "password")
            setPassword(value)
    }

    // const signIn = async () => {
    //     toast.loading("Logging in...")
    //
    //     toast.dismiss()
    //     toast.success("Login Success!", toasterConfig);
    //     setTimeout(() => {
    //         window.location.reload()
    //     }, 2000)
    // }

    console.log(email, password)

    return (
        <div className="login-container">
            <title>Login - ContactHub</title>
            <div className="login-box">
                <div className="login-body">
                    <div className="login-title-container">
                        <img src={ContactHubLogo} alt="ContactHubLogo" className="login-title" />
                    </div>
                    <Form>
                        <FormGroup className="login-form">
                            <FormLabel className="login-label">
                                Email address
                            </FormLabel>
                            <Form.Control
                                type="text"
                                placeholder="Enter email"
                                className="login-input"
                                name="email"
                                onChange={(e) => { handleChange(e) }}
                                autoComplete="off"
                            />
                        </FormGroup>
                        <FormGroup className="login-form">
                            <FormLabel className="login-label">
                                Password
                            </FormLabel>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                className="login-input"
                                name="password"
                                onChange={(e) => { handleChange(e) }}
                                autoComplete="false"
                            />
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login;
