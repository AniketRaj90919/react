import React, { useState } from 'react';
import Card from "../card/Card";
import Input from "../Input/Input";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import { TT } from "../Toogletab/TT";
import './Login.css';

function Login () {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login:",formData);
    };

    return (
        <Card onSubmit={handleSubmit}>
            <Heading title="Login Form"/>
            <TT />

            <Input tp="text" ph="Email Address" name="email" value={formData.email} onChange={handleChange} />
            <Input tp="password" ph="Password" name="password" value={formData.password} onChange={handleChange} />

            <a id="lnk" href="">Forgot password?</a>

            {/* No onClick here; submit works via form */}
            <Button text="LOGIN" type="submit" />

            <p id="another">
                Not a member? <a href="">Signup now</a>
            </p>
        </Card>
    );
}

export default Login;
