import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import  { useEffect, useState } from 'react'
import Axios from "axios"
import { useNavigate, useParams } from "react-router-dom";

function Editcontact () {
  
  const [name, setname] = useState('');
  const [email3, setemail3] = useState('');
  const [subject, setsubject] = useState('');
  const [message3, setmessage3] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
      getUserById();
  }, []);

  const getUserById = async () => {
    const response = await Axios.get(`http://localhost:5000/editcontact/${id}`);
    setname(response.data.name)
    setemail3(response.data.email3)
    setsubject(response.data.subject)
    setmessage3(response.data.message3);
  }
    const updateUser = async (e) => {
      e.preventDefault();
      try {
          await Axios.patch(`http://localhost:5000/editcontact/${id}`, {
           name,email3,subject,message3
          });
          navigate("/msgmembertable");
      } catch (error) {
          console.log(error);
      }
  };
  return (
    <Form onSubmit={updateUser}>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label  className="text-dark " >Name</Form.Label>
    <Form.Control type="text" value={name} onChange={(e) => { setname(e.target.value) }} placeholder="firstname" id ="name"  name="name"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label  className="text-dark ">Email address</Form.Label>
    <Form.Control type="email" value={email3} onChange={(e) => { setemail3(e.target.value) }}  placeholder="Enter email" id="email3" name="email3" />
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label  className="text-dark " >Subject</Form.Label>
    <Form.Control type="text" placeholder="subject" value={subject}  onChange={(e) => { setsubject(e.target.value) }} name="subject" id="subject" />
  </Form.Group>
  <FloatingLabel controlId="floatingTextarea2" value={message3} onChange={(e) => { setmessage3(e.target.value) }} label="Message">
        <Form.Control
        id="message" name="message3"
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <br></br>
      <center> <Button> <input className='bg-secondary' variant="primary" type="submit" /> </Button></center>

  </Form>
		   
)}

  
export default Editcontact