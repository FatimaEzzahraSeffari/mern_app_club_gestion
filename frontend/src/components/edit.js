import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import  { useEffect, useState } from 'react'
import Axios from "axios"
import { useNavigate, useParams } from "react-router-dom";
function Edit() {
  
  const [ firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [retypepassword, setretypepassword] = useState('');
    const [school, setschool] = useState('');
    const [interest_Musique, setinterest_Musique] = useState('');
    const [interest_sport, setinterest_sport] = useState('');
    const [interest_photographie, setinterest_photographie] = useState('');
    const [interest_bénévolat, setinterest_bénévolat] = useState('');
    const [interest_programmation, setinterest_programmation] = useState('');
    const [motivation, setmotivation] = useState('');
    const [cb1, setcb1] = useState('');

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
      getUserById();
  }, []);


  const getUserById = async () => {
      const response = await Axios.get(`http://localhost:5000/edituser/${id}`);
      setfirstname(response.data.firstname)
      setlastname(response.data.lastname)
      setphonenumber(response.data.phonenumber)
      setemail(response.data.email);
      setpassword(response.data.password);
      setretypepassword(response.data.retypepassword);
      setschool(response.data.school);
      setinterest_Musique(response.data.interest_Musique);
      setinterest_sport(response.data.interest_sport);
      setinterest_photographie(response.data.interest_photographie);
      setinterest_bénévolat(response.data.interest_bénévolat);
      setinterest_programmation(response.data.interest_programmation);
      setmotivation(response.data.motivation);
      setcb1(response.data.cb1);
  };

  const updateUser = async (e) => {
      e.preventDefault();
      try {
          await Axios.patch(`http://localhost:5000/edituser/${id}`, {
            firstname,lastname,phonenumber,email, password,retypepassword,school,interest_Musique,interest_sport,interest_photographie,interest_bénévolat,interest_programmation,motivation,cb1
          });
          navigate("/memberstable");
      } catch (error) {
          console.log(error);
      }
  };
  return (
    <Form onSubmit={updateUser}>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label  className="text-dark " >firstname</Form.Label>
    <Form.Control type="text" value={firstname} onChange={(e) => { setfirstname(e.target.value) }}  placeholder="firstname" id ="firstname"  name="firstname"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label  className="text-dark ">lastname</Form.Label>
    <Form.Control type="text" value={lastname} onChange={(e) => { setlastname(e.target.value) }} placeholder="lastname" id ="lastname"  name="lastname"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label  className="text-dark " >phonenumber</Form.Label>
    <Form.Control type="text"value={phonenumber} onChange={(e) => { setphonenumber(e.target.value) }}  placeholder="phonenumber" id ="phonenumber" name="phonenumber"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label  className="text-dark ">Email address</Form.Label>
    <Form.Control type="email" value={email} onChange={(e) => { setemail(e.target.value) }} placeholder="Enter email" id="email" name="email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label  className="text-dark ">Password</Form.Label>
    <Form.Control type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder="Password"  id="password" name="password"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label  className="text-dark ">retypePassword</Form.Label>
    <Form.Control type="password" value={retypepassword} onChange={(e) => { setretypepassword(e.target.value) }} placeholder="retypePassword" id="retypepassword" name="retypepassword"/>
  </Form.Group>
  <Form.Group className="mb-3">
        <Form.Label  className="text-dark  " > &emsp;&emsp;your school :</Form.Label>
        <Form.Control  type="text" placeholder="school" value={school} onChange={(e) => { setschool(e.target.value) }} id="school" name="school"/>
      </Form.Group>
      <Form.Group    className="mb-3" >
        <Form.Label className="text-dark "id="Interests"   name="Interests">&emsp;&emsp;your Interests :</Form.Label>
        </Form.Group>
         <center>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check   className="text-dark "type="checkbox" value={interest_Musique} onChange={(e) => { setinterest_Musique(e.target.value) }}  id="interest_Musique" name="interest_Musique" label="Musique" inline/>
      
      
        <Form.Check   className="text-dark "type="checkbox" value={interest_sport} onChange={(e) => { setinterest_sport(e.target.value) }}  id="interest_sport" name="interest_sport" label="sport" inline/>
     
        <Form.Check   className="text-dark "type="checkbox" value={interest_photographie} onChange={(e) => { setinterest_photographie(e.target.value) }}  id="interest_photographie" name="interest_photographie" label="photographie" inline/>
    
        <Form.Check   className="text-dark "type="checkbox" value={interest_bénévolat} onChange={(e) => { setinterest_bénévolat(e.target.value) }}  id="interest_bénévolat" name="interest_bénévolat" label="bénévolat"inline />
     
        <Form.Check   className="text-dark "type="checkbox" value={interest_programmation} onChange={(e) => { setinterest_programmation(e.target.value) }}  id="interest_programmation" name="interest_programmation" label="programmation" inline/>
      </Form.Group>
      </center>
  <FloatingLabel controlId="floatingTextarea2" value={motivation} onChange={(e) => { setmotivation(e.target.value) }}  label="motivation">
        <Form.Control
        id="motivation" name="motivation"
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
         </FloatingLabel>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check   className="text-dark "type="checkbox" value={cb1} onChange={(e) => { setcb1(e.target.value) }} id="cb1" name="cb1" label="I agree with terms and conditions" />
  </Form.Group>

  <Button> <input className='bg-secondary' variant="primary" type="submit" /> </Button>
 

</Form>
  
)}

export default Edit