import React from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
function Login() {
  return (
    <div className='container mt-5'>
<Card border="primary" style={{ width: '40rem', margin:'auto',display:'flex'}}>
  
    <Card.Body>
    <Card.Title>User Login Form</Card.Title>
    <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="useername" class="form-control" id="exampleInputuseername1" aria-describedby="useernameHelp" placeholder="Enter useername"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" class="btn btn-primary mt-3">Submit</button>
</form>
    </Card.Body>
    </Card>
     
    </div>
  )
}

export default Login
