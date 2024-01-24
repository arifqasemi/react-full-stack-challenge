import React from 'react'
import '../App.css';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
function Dashboard() {
    return (
        <div className='container mt-5'>
        <Card border="primary" style={{ width: '60rem' }}>
                <Card.Header>Exchange Rate</Card.Header>
                <Card.Body>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Base</th>
                      <th>Counter</th>
                      <th>Rate</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td><button className='btn btn-danger btn-sm'>Delete</button><button className='btn btn-primary btn-sm mx-2'>Edit</button></td>
                    </tr>
                 
                  </tbody>
                </Table>
                </Card.Body>
              </Card>
              
               
               
          </div>
          );
}

export default Dashboard
