import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './SingUp.css'

const SignUp = () => {
    return (
        <div className="signup fw-bold">
            <div className="w-50">
            <h1 className="text-center mb-5 fw-bold ">Sign Up with your Email.</h1>
            <Form.Floating className="mb-3">
                <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
                />
                <label htmlFor="floatingInputCustom">Email address</label>
            </Form.Floating>
            <Form.Floating>
                <Form.Control
                id="floatingPasswordCustom"
                type="password"
                placeholder="Password"
                />
                <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>
            <Button variant="primary" type="submit" className="mt-3">
                    Sign Up
            </Button>
        </div>
        </div>
    );
};

export default SignUp;