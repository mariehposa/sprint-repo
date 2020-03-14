import React from 'react';
import { Form, Formik, Field } from 'formik';
import axios from 'axios';

const initialValues = {
    username: '',
    password: ''
}

export default function Login (props) {
    const toRegister = (formValues, actions) => {
        axios.post('http://localhost:3300/api/auth/register', {
          username: formValues.username,
          password: formValues.password
        })
          .then( res => {
            // console.log(res)
            localStorage.setItem('token', res.data.token);
            props.history.push('/jokes')
          })
          .catch( err => {
            // console.log(err)
          })
        actions.resetForm()
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={toRegister}
                render = { props => {
                    return (
                      <Form>
                          <Field name="username" placeholder="Enter username" type="text"/>
                          <Field name="password" placeholder="Enter password" type="text"/>
                          <button type="submit">Login</button>
                      </Form>
                    )
                }}
            />
        </div>
    );
}
