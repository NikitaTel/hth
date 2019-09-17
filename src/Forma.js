import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './Forma.css'
import React from 'react';


export const Forma=(props)=>{
    return(
        <div className={"form"}>
           <Form>
                <h1>Sign in</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={props.handleChangeLogin} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={props.handleChangePassword} />
                </Form.Group>

             <Button variant="primary" onClick={props.handleClick}>
                    Submit
               </Button>
            </Form>

        </div>

    )

}