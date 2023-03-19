import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useLocation } from 'react-router-dom'
import  { useEffect, useState } from 'react'
import Axios from "axios"
import Figure from 'react-bootstrap/Figure';
import { Container } from 'react-bootstrap';
import e from  './images/k9.png'
function Loginad() {
  const history = useNavigate();
  const [email4, setemail4] = useState('');
  const [password4, setpassword4] = useState('');
  async function submit(e) {
      e.preventDefault();
      try {
          await Axios.post("http://localhost:5000/loginad", {
              email4, password4
          })
              .then(res => {
                  if (res.data = "user exist") {
                    alert("log in admin succefully!!")
                      history("/affichage")
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
   <Form action="POST" style={{width:'620px',heigh:'600px',border:"solid",color:"#4169E1"}}>
    
      
      <Container>
     <div class="text-center"> 
    <p   className="text-dark ">Login Form admin &#128275;  &#128275;</p>    
    
    </div>
      </Container>
    <Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label  className="text-dark ">&emsp;&emsp;Email address :</Form.Label>
<Form.Control type="email"style={{width:'420px',heigh:'20px',color:'black'}} placeholder="Enter email"  onChange={(e) => { setemail4(e.target.value) }} id="email4" name="email4" />
</Form.Group>


<Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label  className="text-dark ">&emsp;&emsp;Password :</Form.Label>
    <Form.Control type="password"style={{width:'420px',heigh:'20px',color:'black'}} placeholder="Password"  onChange={(e) => { setpassword4(e.target.value) }} id="password4" name="password4"/>
    </Form.Group>


    <center>  <Button  variant="outline-info" type="submit" onClick={submit} >submit</Button>{''} </center> 
    <br></br>

    </Form>
    </center>
    </>
  )
}

export default Loginad