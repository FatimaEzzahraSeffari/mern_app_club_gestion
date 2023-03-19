import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import  { useEffect, useState } from 'react'
import Axios from "axios"
import { useNavigate, useParams } from "react-router-dom";
function Editclubmsg() {
  const [ firstname1, setfirstname1] = useState('');
  const [  lastname1, setlastname1] = useState('');
  const [school1, setschool1] = useState('');
  const [subject1, setsubject1] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
      getUserById();
  }, []);
  const getUserById = async () => {
    const response = await Axios.get(`http://localhost:5000/editclubmsg/${id}`);
    setfirstname1(response.data.firstname1)
    setlastname1(response.data.lastname1)
    setschool1(response.data.school1)
    setsubject1(response.data.subject1);
  };

  const updateUser = async (e) => {
      e.preventDefault();
      try {
          await Axios.patch(`http://localhost:5000/editclubmsg/${id}`, {
            firstname1,lastname1,school1,subject1
          });
          navigate("/clubmsgtable");
      } catch (error) {
          console.log(error);
      }
  };
  return (
    <Form onSubmit={updateUser}>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  className="text-dark " >firstname</Form.Label>
        <Form.Control type="text" placeholder="firstname"  value={firstname1} onChange={(e) => { setfirstname1(e.target.value) }}   id ="firstname1"  name="firstname1"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label  className="text-dark ">lastname</Form.Label>
        <Form.Control type="text" placeholder="lastname"  value={lastname1} onChange={(e) => { setlastname1(e.target.value) }}  id ="lastname1"  name="lastname1"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label   className="text-dark" >your school</Form.Label>
        <Form.Control     type="text" placeholder="school"   value={school1} onChange={(e) => { setschool1(e.target.value) }} id ="school1"  name="school1"/>
      </Form.Group>
      <FloatingLabel controlId="floatingTextarea2"  value={subject1} onChange={(e) => { setsubject1(e.target.value) }}  label="Subject">
        <Form.Control
        id="subject1" name="subject1"
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <br></br>
      <center> <Button><input className='bg-secondary' variant="primary" type="submit" /> </Button></center> 
      </Form>
  )
}

export default Editclubmsg