import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate, useLocation } from 'react-router-dom'
import  { useEffect, useState } from 'react'
import Axios from "axios"
function Add() {
  const history = useNavigate();
  const [name, setname] = useState('');
  const [president, setpresident] = useState('');
  const [Description, setDescription] = useState('');
  const [myfile, setmyfile] = useState('');
  async function submit(e) {
      e.preventDefault();
      try {
          await Axios.post("http://localhost:5000/add", {
            name,president,Description,myfile
          })
              .then(res => {
                  if (res.data = "user exist") {
                    alert("club add  succefully!!")
                      history("")
                  } else if (res.data = "user not exist") {
                      alert("User have not sign uP")
                  }
              })
              .catch(e => {
                  alert("wrong")
                  console.log(e);
              })

      }
      catch (e) {
          console.log(e);
      }
  }
  return (
    <Form action="POST">
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label  className="text-dark " >Name</Form.Label>
    <Form.Control type="text" placeholder="firstname" onChange={(e) => { setname(e.target.value) }} id ="name"  name="name"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label  className="text-dark " >president</Form.Label>
    <Form.Control type="text" placeholder="president" onChange={(e) => { setpresident(e.target.value) }} id ="president"  name="president"/>
  </Form.Group>
  <FloatingLabel controlId="floatingTextarea2" onChange={(e) => { setDescription(e.target.value) }} label="Description">
        <Form.Control
        id="Description" name="Description"
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <br></br>   <br></br>   
      <Form.Group controlId="formFileLg" onChange={(e) => { setmyfile(e.target.value) }} neme=" myfile" id=" myfile" className="mb-3">
        
        <Form.Control type="file" size="lg" />
      </Form.Group>
      <center>  <input className='bg-secondary' variant="primary" type="submit"  onClick={submit}/> </center>
  </Form>
  )
}

export default Add