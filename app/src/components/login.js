import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import {  Button} from 'react-bootstrap';
import UseLogin from '../hooks/useLogin';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';







function Login() {
  const [userData, setUserData] = useState({ username: '', password: ''});
  const navigate = useNavigate()

  const {data,login} = UseLogin()
useEffect(() => {
  if (data && data.token) {
    localStorage.setItem('token', data.token);
    navigate('/');
  }
}, [data, login]);


  const submitHandler = async()=>{
    login({username:userData.username,password:userData.password})
  }

  return (
    <div className='container mt-5'>
<Card border="primary" style={{ width: '40rem', margin:'auto',display:'flex'}}>
  
    <Card.Body>
    <Card.Title>User Login Form</Card.Title>
    {/* {data !== null ? <Alert key='danger' variant={data == '' ? '' : 'danger'}>{data}</Alert> : null} */}
    <Form>
            <Form.Group controlId="formusername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                onChange={(e) => setUserData({ ...userData, username: e.target.value })}

              />
            </Form.Group>
            <Form.Group controlId="formpassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              />
            </Form.Group>

    </Form>
    <Button variant="primary mt-2 mx-2" onClick={submitHandler}>Login</Button>
    </Card.Body>
    </Card>
     
    </div>
  )
}

export default Login
