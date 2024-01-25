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
  const [error,setError] = useState([])
  const navigate = useNavigate()

  const {data,login} = UseLogin()
useEffect(() => {
  if (data && data.token) {
    localStorage.setItem('token', data.token);
    navigate('/');
  }
}, [data, login]);


  const submitHandler = async()=>{
    if(userData.username !=='' && userData.password !==''){
      login({username:userData.username,password:userData.password})
    }else{
      setError('please fill all the inputs')
      
    }
    
  }


  return (
    <div className='container mt-5'>
<Card border="primary" style={{ width: '40rem', margin:'auto',display:'flex'}}>
  
    <Card.Body>
    <Card.Title>User Login Form</Card.Title>
    {error && error.length > 0 ? <Alert key='danger' variant='danger'>{error}</Alert> : null}   
    {data && data.length > 0 ? <Alert key='danger' variant='danger'>{data}</Alert> : null} 

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
