

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
function Contact () {
  const history = useNavigate();
  const [ name, setname] = useState('');
  const [email3, setemail3] = useState('');
  const [subject, setsubject] = useState('');
  const [message3, setmessage3] = useState('');
  
  async function submit(e) {
      e.preventDefault();
      try {
          await Axios.post("http://localhost:5000/contact", {
            name,email3,subject,message3
          })
              .then(res => {
                  if (res.data = "user exist") {
                    alert("message send  succefully!!")
                      history("/")
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
      }}
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
    <p   className="text-dark ">Contact Form  &#128275;</p>    
    
    </div>
      </Container>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label  className="text-dark " >&emsp;&emsp;Name :</Form.Label>
    <Form.Control type="text"style={{width:'420px',heigh:'20px',color:'black'}} placeholder="firstname"  onChange={(e) => { setname(e.target.value) }} id ="name"  name="name"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label  className="text-dark ">&emsp;&emsp;Email address :</Form.Label>
    <Form.Control type="email" style={{width:'420px',heigh:'20px',color:'black'}} placeholder="Enter email"  onChange={(e) => { setemail3(e.target.value) }} id="email3" name="email3" />
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label  className="text-dark " >&emsp;&emsp;Subject :</Form.Label>
    <Form.Control type="text"style={{width:'420px',heigh:'20px',color:'black'}} placeholder="subject"  onChange={(e) => { setsubject(e.target.value) }} name="subject" id="subject" />
  </Form.Group>
  <Form.Label  className="text-dark " >&emsp;&emsp;Message :</Form.Label>
  <FloatingLabel controlId="floatingTextarea2" style={{width:'420px',heigh:'20px'}}  onChange={(e) => { setmessage3(e.target.value) }}label="Message">
        <Form.Control
        id="message3" name="message3"
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' ,color:'black'}}
        />
      </FloatingLabel>
      <br></br>
    
 <center>  <Button  variant="outline-info" type="submit" onClick={submit} >submit</Button>{''} </center>
 <br></br>
  </Form>
  </center>
   <br></br> 
   <center><div className="fixed-bottom1"  >
    <Button style={{ bottom: "0", right: "0"}} variant="outline-info" href={"/"} >Go to home page  </Button>{' '}
    </div></center>
    </>
		 )
        }
        
        export default Contact