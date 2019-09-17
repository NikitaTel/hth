import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import "./Registration.css";



export const Registration = (props) => {



    return (
        <div className={"registration_container"}>
            <h1>Registration</h1>

            <Form>
                <Form.Group >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="FirstName" placeholder="First Name" onChange={props.firstName}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="LastName" placeholder="Last Name" onChange={props.lastName} />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="age" placeholder="Age" onChange={props.age}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="Email" placeholder="Email" onChange={props.Email} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="Password" placeholder="Password" onChange={props.registrationPassword}/>
                </Form.Group>

<div className={"registration_buttons"}>
                <Button variant="primary" onClick={props.handleRegister}>
                    Register
                </Button>

                <Button variant="primary" onClick={props.handleSignIn}>
                    Sign in(if you already have an account)
                </Button>
</div>
            </Form>
        </div>
    )
};