import { useState } from "react";
import Card from "../card/Card"
import Input from "../Input/Input"
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import { TT } from "../Toogletab/TT";
function SignUp (){

    const [formdata,setFormdata]=useState({
        email:"",
        password:"",
        confirmpassword:""
    });

    const handleChange = (e)=> {
        const{name,value}=e.target;
        setFormdata(prev=>({
            ...prev,
            [name]:value
        }));
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Sign up:-",formdata);
    }
    return (
        <>
        <Card onSubmit={handleSubmit}>
            <Heading title="Signup Form"/>
            <TT/>
            <Input tp="text" ph="Enter Your Name" name="email" onChange={handleChange}/>
            <Input tp="password" ph="Enter your Password" name="password" onChange={handleChange}/>
            <Input tp="password" ph="Confirm Password" name="confirmpassword" onChange={handleChange}/>
            <Button text="SIGNUP"/>
        </Card>
       
        </>

    )
}

export default SignUp;