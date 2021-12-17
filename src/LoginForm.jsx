import React, { useState } from 'react';
import {Button} from '@material-ui/core';
import TextField from "@material-ui/core/TextField";


const makeTextField = (value, onChange, state) =>{
    const testid = value + '-field'
    const label = value.charAt(0).toUpperCase() + value.slice(1)

    return  (
        <TextField
            onChange={onChange}
            value={state[value]}
            label={label}
            data-testid={testid}
            key={value+'textfield'}
        />
    )
}

const result = (value, state) =>{
    const label = value.charAt(0).toUpperCase() + value.slice(1)
    return (
        <div key={value+"fragment"}>
            <label key={value+'label'}>{label}</label>
            <p key={value+'p'}>{state[value]}</p>
        </div>
    )
}
const LoginForm = () => {
    const [name, setName] = useState("");
    const [data, setData] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = () => setSubmitted(true)
    const handleReset = () => {
        setSubmitted(false);
        setData({})
    }

    const items = ['name', 'password']
    const wrapperFunc = (item, state)=>{
        if(submitted){
            return result(item, state)
        }else{
            const changeFunc = (e)=>setData(Object.assign(state, { [item] :e.target.value}))
            return makeTextField(item, changeFunc, state)
        }
    }
    return (
        <div className="container">
            <h1>Login</h1>
            <div>
                <div className='form'>
                    {items.map((x, i)=>wrapperFunc(x, data))}
                </div>
                <Button onClick={handleSubmit}>Submit</Button>
                <Button onClick={handleReset}>Reset</Button>
            </div>
        </div>
              
    );
   
}

export default LoginForm;