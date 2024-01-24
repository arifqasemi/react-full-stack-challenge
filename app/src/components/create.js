import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Card, Button} from 'react-bootstrap';
import UseAdd from '../hooks/useAdd';
import UseFetch from '../hooks/useFetch';

function Create({setShowCreate}) {
  
    const [editedData, setEditedData] = useState({ base: '', counter: '', rate: '' });
    const {data,addData} = UseAdd()
    const {getData} = UseFetch()

    const closeForm = ()=>{
        setShowCreate(false)
    }

    const submitHandler = async()=>{
      await addData({base:editedData.base,counter:editedData.counter,rate:editedData.rate})
     window.location.reload()
    }
  return (
    <div className='mt-4'>
  <Card border="primary" style={{ width: '60rem' }}>
    <Card.Header>Add Currency</Card.Header>
    <Card.Body>
    <Form>
            <Form.Group controlId="formBase">
              <Form.Label>Base</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter base"
                onChange={(e) => setEditedData({ ...editedData, base: e.target.value })}

              />
            </Form.Group>
            <Form.Group controlId="formCounter">
              <Form.Label>Counter</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter counter"
                onChange={(e) => setEditedData({ ...editedData, counter: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formRate">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter rate"
                onChange={(e) => setEditedData({ ...editedData, rate: e.target.value })}

                
              />
    </Form.Group>
    </Form>
    <Button variant="secondary mt-2" onClick={closeForm}>Close </Button>
    <Button variant="primary mt-2 mx-2" onClick={submitHandler}>Add</Button>
</Card.Body>
</Card>
  </div>




  )
}

export default Create
