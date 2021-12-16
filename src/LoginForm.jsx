import React, { useState } from 'react';
import {Button} from '@material-ui/core';
import TextField from "@material-ui/core/TextField";


const makeTextField = (value, changeFunc, label, testid) =>{
    return  (
        <TextField
            onChange={changeFunc}
            value={value}
            label={label}
            data-testid={testid}
        />
    )
}

const result = (value, label) =>{
    return (
        <>
            <label>{label}</label>
            <h3>{value}</h3>
        </>
    )
}
const LoginForm = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false)
    
    const onNameChange = (e) => setName(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = () => setSubmitted(true)
    const handleReset = () => {
        setSubmitted(false);
        setName("");
        setPassword("")
    }
    let content = [makeTextField(name, onNameChange, 'Name', 'name-field'), makeTextField(password, onPasswordChange, 'Password', 'password-field')]
    if(submitted){
        content = [result(name, 'Name'), result(password, 'Password')]
    }
    return (
        <div className="container">
            <h1>Login</h1>
            <div>
                <div className='form'>
                    {content.map((x, i)=><div key={"div"+i}>{x}</div>)}
                </div>
                <Button onClick={handleSubmit}>Submit</Button>
                <Button onClick={handleReset}>Reset</Button>
            </div>
        </div>
              
    );
   
}

export default LoginForm;