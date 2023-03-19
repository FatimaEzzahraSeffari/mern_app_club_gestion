import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  { useEffect, useState } from 'react'
import Axios from "axios"
import { useNavigate, useParams } from "react-router-dom";
function Editadmin() {
  const [firstname4, setfirstname4] = useState('');
  const [lastname4, setlastname4] = useState('');
  const [phonenumber4, setphonenumber4] = useState('');
  const [email4, setemail4] = useState('');
    const [password4, setpassword4] = useState('');
    const [retypepassword4, setretypepassword4] = useState('');
    const [cb2, setcb2] = useState('');

    const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
      getUserById();
  }, []);

  const getUserById = async () => {
    const response = await Axios.get(`http://localhost:5000/editadmin/${id}`);
    setfirstname4(response.data.firstname4)
    setlastname4(response.data.lastname4)
    setphonenumber4(response.data.phonenumber4)
    setemail4(response.data.email4);
    setpassword4(response.data.password4);
    setretypepassword4(response.data.retypepassword4);
    setcb2(response.data.cb2);
  }
  const updateUser = async (e) => {
    e.preventDefault();
    try {
        await Axios.patch(`http://localhost:5000/editadmin/${id}`, {
          firstname4,lastname4,phonenumber4,email4, password4,retypepassword4,cb2
        });
        navigate("/adminstable");
    } catch (error) {
        console.log(error);
    }
};
  return (
   
        <Form onSubmit={updateUser}>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  className="text-dark " >firstname</Form.Label>
        <Form.Control type="text" placeholder="firstname" value={firstname4} onChange={(e) => { setfirstname4(e.target.value) }} id ="firstname4"  name="firstname4"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label  className="text-dark ">lastname</Form.Label>
        <Form.Control type="text" placeholder="lastname" value={lastname4} onChange={(e) => { setlastname4(e.target.value) }} id ="lastname4"  name="lastname4"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label  className="text-dark " >phonenumber</Form.Label>
        <Form.Control type="text" placeholder="phonenumber" value={phonenumber4} onChange={(e) => { setphonenumber4(e.target.value) }} id ="phonenumber4" name="phonenumber4"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label  className="text-dark ">Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={email4} onChange={(e) => { setemail4(e.target.value) }}id="email4" name="email4" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  className="text-dark ">Password</Form.Label>
        <Form.Control type="password" placeholder="Password"   value={password4} onChange={(e) => { setpassword4(e.target.value) }} id="password4" name="password4"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  className="text-dark ">retypePassword</Form.Label>
        <Form.Control type="password" placeholder="retypePassword" value={retypepassword4} onChange={(e) => { setretypepassword4(e.target.value) }} id="retypepassword4" name="retypepassword4"/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check   className="text-dark "type="checkbox"   value={cb2} onChange={(e) => { setcb2(e.target.value) }}id="cb2" name="cb2" label="I agree with terms and conditions" />
      </Form.Group>
  <center>   <Button> <input className='bg-secondary' variant="primary" type="submit" /> </Button></center> 
     
    </Form>
    
  
  )
}

export default Editadmin