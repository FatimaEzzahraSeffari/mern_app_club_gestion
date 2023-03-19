import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate, useLocation } from 'react-router-dom'
import  { useEffect, useState } from 'react'
import Axios from "axios"
import Figure from 'react-bootstrap/Figure';
import { Container } from 'react-bootstrap';
import e from  './images/k9.png'
function Message() {
  const history = useNavigate();
    const [firstname1, setfirstname1] = useState('');
    const [lastname1, setlastname1] = useState('');
    const [school1, setschool1] = useState('');
    const [subject1, setsubject1] = useState('');
    
    async function submit(e) {
        e.preventDefault();
        try {
            await Axios.post("http://localhost:5000/message", {
              firstname1,lastname1,school1,subject1
            })
                .then(res => {
                    if (res.data = "user exist") {
                      alert("message send  succefully!!")
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

    <>
     <Figure>
      <Figure.Image
        width={260}
        height={280}
        alt="171x180"
        src={e}
      />
       </Figure>
       <center> 
    <Form action='POST' style={{width:'620px',heigh:'600px',border:"solid",color:"#4169E1"}}>
      
      <Container>
     <div class="text-center"> 
    <p   className="text-dark ">Message Form   &#9993;</p>    
    
    </div>
      </Container>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  className="text-dark " >&emsp;&emsp;firstname :</Form.Label>
        <Form.Control type="text" style={{width:'420px',heigh:'20px',color:'black'}} placeholder="firstname" onChange={(e) => { setfirstname1(e.target.value) }} id ="firstname1"  name="firstname1"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label  className="text-dark ">&emsp;&emsp;lastname :</Form.Label>
        <Form.Control type="text" style={{width:'420px',heigh:'20px',color:'black'}} placeholder="lastname" onChange={(e) => { setlastname1(e.target.value) }}id ="lastname1"  name="lastname1"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label  className="text-dark  " > &emsp;&emsp;your school :</Form.Label>
        <Form.Control  type="text"style={{width:'420px',heigh:'20px',color:'black'}}  placeholder="school" onChange={(e) => { setschool1(e.target.value) }} id="school" name="school"/>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label  className="text-dark  " > &emsp;&emsp;Subject :</Form.Label>
      </Form.Group>
      <FloatingLabel controlId="floatingTextarea2"style={{width:'420px',heigh:'20px'}}  onChange={(e) => { setsubject1(e.target.value) }} label="Subject">
        <Form.Control
        id="subject1" name="subject1"
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px',color:'black' }}
        />
      </FloatingLabel>
      <br></br>
      <center>  <Button  variant="outline-info" type="submit" onClick={submit} >submit</Button>{''} </center> 
      <br></br>
      </Form>
      </center> 
      </>
  )
}

export default Message