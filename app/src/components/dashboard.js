import React, { useEffect, useState } from 'react'
import '../App.css';
import { Card, Table, Button, Modal, Form } from 'react-bootstrap';

import UseFetch from '../hooks/useFetch';


function Dashboard() {
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [editedData, setEditedData] = useState({ base: '', counter: '', rate: '' });

    const {data,getData} = UseFetch()
    useEffect(() => {
        if (data.length === 0) {
          const fetchData = async () => {
            await getData();
          };
    
          fetchData();
        }
      }, [getData, data]);


      const handleEditClick = (item) => {
        setSelectedItem(item);
        setEditedData({ base: item.base, counter: item.counter, rate: item.rate });
        setShowEditModal(true);
      };


      const handleSaveChanges = () => {
        console.log(selectedItem)
     
      
        setShowEditModal(false);
      };

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
                    {data.map((item) =>
                         <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.base}</td>
                      <td>{item.counter}</td>
                      <td>{item.rate}</td>
                      <td><button className='btn btn-danger btn-sm' >Delete</button><button className='btn btn-primary btn-sm mx-2' onClick={() => handleEditClick(item)}>Edit</button></td>
                    </tr>
                    )}
                   
                 
                  </tbody>
                </Table>
                </Card.Body>
              </Card>
              
        <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBase">
              <Form.Label>Base</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter base"
                value={editedData.base}
                onChange={(e) => setEditedData({ ...editedData, base: e.target.value })}

              />
            </Form.Group>
            <Form.Group controlId="formCounter">
              <Form.Label>Counter</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter counter"
                value={editedData.counter}
                onChange={(e) => setEditedData({ ...editedData, counter: e.target.value })}

              />
            </Form.Group>
            <Form.Group controlId="formRate">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter rate"
                value={editedData.rate}
                onChange={(e) => setEditedData({ ...editedData, rate: e.target.value })}

                
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
               
          </div>
          );
}

export default Dashboard
