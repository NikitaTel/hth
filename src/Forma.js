import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Content} from "./Content";
import './Forma.css'
import React,{useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";




export const Forma=(props)=>{
    const [clicked,setClick]=useState(false)
    const [login,setLogin]=useState(0)
    const [password,setPassword]=useState(0)
const [emptyClick,setEmptyClick]=useState(false)
    const handleChangeLogin=(e)=>{
        setLogin(e.target.value)
    }
    const handleClick=()=>{
        setClick(true)
        password.length===0||login.length===0&&setEmptyClick(true)
    }
    const handleChangePassword=(e)=>{
        setPassword(e.target.value)
    }

    const generateEmptyClick=()=>{
        ShowForm()
        (<h1>Error</h1>)
    }

const ShowForm=()=>{
return(
    <div className={"form"}>
        <Form>
            <h1>Sign in</h1>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={handleChangeLogin} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handleChangePassword} />
            </Form.Group>

            <Button variant="primary" onClick={handleClick}>
                Submit
            </Button>
        </Form>
        <div></div>
    </div>
)
}



    return(
        <div>
            {/*emptyClick?generateEmptyClick():*/}
            {clicked&&JSON.parse(localStorage.getItem(login)).pochta === login && JSON.parse(localStorage.getItem(login)).Password === password?<Content userEmail={JSON.parse(localStorage.getItem(login)).pochta}   userName={JSON.parse(localStorage.getItem(login)).FirstName} />:ShowForm()}

        </div>

    )

}