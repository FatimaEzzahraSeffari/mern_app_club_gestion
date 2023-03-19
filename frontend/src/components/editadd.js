import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import  { useEffect, useState } from 'react'
import Axios from "axios"
import { useNavigate, useParams } from "react-router-dom";
function Editadd() {
  const [ name, setname] = useState('');
  const [president, setpresident] = useState('');
  const [Description, setDescription] = useState('');
  const [myfile, setmyfile] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
      getUserById();
  }, []);

  const getUserById = async () => {
    const response = await Axios.get(`http://localhost:5000/editadd/${id}`);
    setname(response.data.name)
    setpresident(response.data.president)
    setDescription(response.data.Description)
    setmyfile(response.data.myfile);
  };
  const updateUser = async (e) => {
    e.preventDefault();
    try {
        await Axios.patch(`http://localhost:5000/editadd/${id}`, {
          name,president,Description,myfile
        });
        navigate("/addclubtable");
    } catch (error) {
        console.log(error);
    }
};
  return (
    <Form onSubmit={updateUser}>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label  className="text-dark " >Name</Form.Label>
    <Form.Control type="text" placeholder="firstname" value={name} onChange={(e) => { setname(e.target.value) }} id ="name"  name="name"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label  className="text-dark " >president</Form.Label>
    <Form.Control type="text" placeholder="firstname"  value={president} onChange={(e) => { setpresident(e.target.value) }}id ="president"  name="president"/>
  </Form.Group>
  <FloatingLabel controlId="floatingTextarea2" value={Description} onChange={(e) => { setDescription(e.target.value) }}label="Description">
        <Form.Control
        id="Description" name="Description"
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <Form.Group controlId="formFileLg" name ="myfile" id="myfile" value={myfile} onChange={(e) => { setmyfile(e.target.value) }} className="mb-3">
        <Form.Label>Large file input example</Form.Label>
        <Form.Control type="file" size="lg" />
      </Form.Group>
      <center> <Button> <input className='bg-secondary' variant="primary" type="submit" /> </Button></center>
  </Form>
  )
}

export default Editadd