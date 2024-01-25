import React, { useEffect, useState } from 'react'
import '../App.css';
import { Card, Table, Button, Modal, Form } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

import UseFetch from '../hooks/useFetch';
import UseUpdate from '../hooks/useUpdate';
import Create from './create';
import UseDelete from '../hooks/useDelete';


function Dashboard() {
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [editedData, setEditedData] = useState({ base: '', counter: '', rate: '' });
    const [showCreate,setShowCreate] = useState(false)
    const {data,getData,error} = UseFetch()
    const {updatedData,updateData}  = UseUpdate()
    const {result,deleteData} = UseDelete()
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


      const handleSaveChanges =async () => {
        const token = localStorage.getItem('token')

        setShowEditModal(false);
       await  updateData({id:selectedItem.id,base:editedData.base,counter:editedData.counter,rate:editedData.rate,token:token})
        getData()
    };

    const removeData = async(id)=>{
        const token = localStorage.getItem('token')
        await  deleteData({id:id,token:token})
       await getData()
    }


    
    return (
        <div className='container mt-5'>
        <Card border="primary" style={{ width: '60rem' }}>
        
                <Card.Header>Exchange Rate  {error =="" ? <button className='btn btn-primary btn-sm mx-2' onClick={(preState)=> setShowCreate(!showCreate)}>Add Currency</button> :<a href='/login'>you need to login, to be able to CRUD</a>}</Card.Header>
                  
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
                      <td><button className='btn btn-danger btn-sm' onClick={()=> removeData(item.id)}>Delete</button><button className='btn btn-primary btn-sm mx-2' onClick={() => handleEditClick(item)}>Edit</button></td>
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

        {showCreate && <Create setShowCreate={setShowCreate}/>}
          </div>
          );
}

export default Dashboard
