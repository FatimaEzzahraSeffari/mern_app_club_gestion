import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useLocation } from 'react-router-dom'
import  { useEffect, useState } from 'react'
import Axios from "axios"
import Figure from 'react-bootstrap/Figure';
import { Container } from 'react-bootstrap';
import e from  './images/k9.png'
function Singupad() {
  const history = useNavigate();
 
  const [firstname4, setfirstname4] = useState('');
  const [lastname4, setlastname4] = useState('');
  const [phonenumber4, setphonenumber4] = useState('');
  const [email4, setemail4] = useState('');
    const [password4, setpassword4] = useState('');
    const [retypepassword4, setretypepassword4] = useState('');
    const [cb2, setcb2] = useState('');

    async function submit(e) {
        e.preventDefault();
        try {
            await Axios.post("http://localhost:5000/signupad", {
              firstname4,lastname4,phonenumber4,email4, password4,retypepassword4,cb2
            })
            .then(res => {
              if (res.data = "user exist") {
                alert("sign up admin succefully!!")
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
   
        <Form action='POST' style={{width:'520px',heigh:'500px',border:"solid",color:"#4169E1"}}>
          
    
      <Container>
     <div class="text-center"> 
    <p   className="text-dark ">Welcome back Admin &#128272; &#128273;</p>    
    
    </div>
      </Container>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  className="text-dark " >&emsp;&emsp;firstname :</Form.Label>
        <Form.Control type="text"  style={{width:'420px',heigh:'20px',color:'black'}} placeholder="firstname" onChange={(e) => { setfirstname4(e.target.value) }} id ="firstname4"  name="firstname4"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label  className="text-dark ">&emsp;&emsp;lastname :</Form.Label>
        <Form.Control type="text"  style={{width:'420px',heigh:'20px',color:'black'}} placeholder="lastname" onChange={(e) => { setlastname4(e.target.value) }}id ="lastname4"  name="lastname4"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label  className="text-dark " >&emsp;&emsp;phonenumber :</Form.Label>
        <Form.Control type="text"  style={{width:'420px',heigh:'20px',color:'black'}} placeholder="phonenumber"onChange={(e) => { setphonenumber4(e.target.value) }} id ="phonenumber4" name="phonenumber4"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label  className="text-dark ">&emsp;&emsp;Email address :</Form.Label>
        <Form.Control type="email"  style={{width:'420px',heigh:'20px',color:'black'}} placeholder="Enter email"onChange={(e) => { setemail4(e.target.value) }} id="email4" name="email4" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  className="text-dark ">&emsp;&emsp;Password :</Form.Label>
        <Form.Control type="password" style={{width:'420px',heigh:'20px',color:'black'}} placeholder="Password" onChange={(e) => { setpassword4(e.target.value) }} id="password4" name="password4"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  className="text-dark ">&emsp;&emsp;retypePassword :</Form.Label>
        <Form.Control type="password" style={{width:'420px',heigh:'20px',color:'black'}} placeholder="retypePassword" onChange={(e) => { setretypepassword4(e.target.value) }} id="retypepassword4" name="retypepassword4"/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check   className="text-dark "type="checkbox"   onChange={(e) => { setcb2(e.target.value) }}id="cb2" name="cb2" label="I agree with terms and conditions" inline/>
      </Form.Group>
      <center> <div className11="fixed-bottom"  >
      <Button  variant="outline-info"  style={{ bottom: "0",}}  type="submit" onClick={submit}>submit</Button>{' '}
     
</div>
</center>
<br></br>
      
    </Form>
    </center>
    <br></br>
    <center>
    <div className="fixed-bottom1"  >
  <Button style={{ bottom: "0", right: "0"}} variant="outline-info" href={"/loginad"} >Sign in</Button>{' '}
</div>
</center>
    </>
  )
}

export default Singupad