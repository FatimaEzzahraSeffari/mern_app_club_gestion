import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Axios from "axios"
import Figure from 'react-bootstrap/Figure';
import { Alert, Container } from 'react-bootstrap';
import e from  './images/k9.png'

function BasicExample() {
  const history = useNavigate();
 
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

    async function submit(e) {
        e.preventDefault();
        try {
            await Axios.post("http://localhost:5000/register", {
              firstname,lastname,phonenumber,email, password,retypepassword,school,interest_Musique,interest_sport,interest_photographie,interest_bénévolat,interest_programmation,motivation,cb1
            })
            .then(res => {
              if (res.data = "user exist") {
                alert("sign up succefully!!") 
                 

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
        <br></br>
     <div class="text-center"> 
    <p   className="text-dark ">Welcome back !!!  new friend is a you adventure join us &#128108;</p>    
    
    </div>
      </Container>
    

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  className="text-dark " >&emsp;&emsp;firstname :</Form.Label>
        <Form.Control style={{width:'420px',heigh:'20px',color:'black'}} type="text" onChange={(e) => { setfirstname(e.target.value) }} placeholder="firstname" id ="firstname"  name="firstname"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label  className="text-dark ">&emsp;&emsp;lastname :</Form.Label>
        <Form.Control style={{width:'420px',heigh:'20px',color:'black'}} type="text" placeholder="lastname" onChange={(e) => { setlastname(e.target.value) }} id ="lastname"  name="lastname"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label  className="text-dark " >&emsp;&emsp;phonenumber :</Form.Label>
        <Form.Control  style={{width:'420px',heigh:'20px',color:'black'}} type="text" placeholder="phonenumber"  onChange={(e) => { setphonenumber(e.target.value) }}  id ="phonenumber" name="phonenumber"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label  className="text-dark ">&emsp;&emsp;Email address :</Form.Label>
        <Form.Control style={{width:'420px',heigh:'20px',color:'black'}} type="email" placeholder="Enter email" onChange={(e) => { setemail(e.target.value) }}  id="email" name="email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  className="text-dark ">&emsp;&emsp;Password :</Form.Label>
        <Form.Control style={{width:'420px',heigh:'20px',color:'black'}} type="password" placeholder="Password"  id="password" onChange={(e) => { setpassword(e.target.value) }} name="password"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  className="text-dark ">&emsp;&emsp;retypePassword :</Form.Label>
        <Form.Control style={{width:'420px',heigh:'20px',color:'black'}} type="password" placeholder="retypePassword" onChange={(e) => { setretypepassword(e.target.value) }} id="retypepassword" name="retypepassword"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label  className="text-dark  " > &emsp;&emsp;your school :</Form.Label>
        <Form.Control style={{width:'420px',heigh:'20px',color:'black'}} type="text" placeholder="school" onChange={(e) => { setschool(e.target.value) }} id="school" name="school"/>
      </Form.Group>
      <Form.Group    className="mb-3" >
        <Form.Label className="text-dark "id="Interests"   name="Interests">&emsp;&emsp;your Interests :</Form.Label>
        </Form.Group>
         <center>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check   className="text-dark "type="checkbox" onChange={(e) => { setinterest_Musique(e.target.value) }}  id="interest_Musique" name="interest_Musique" label="Musique" inline/>
      
      
        <Form.Check   className="text-dark "type="checkbox" onChange={(e) => { setinterest_sport(e.target.value) }}  id="interest_sport" name="interest_sport" label="sport" inline/>
     
        <Form.Check   className="text-dark "type="checkbox" onChange={(e) => { setinterest_photographie(e.target.value) }}  id="interest_photographie" name="interest_photographie" label="photographie" inline/>
    
        <Form.Check   className="text-dark "type="checkbox" onChange={(e) => { setinterest_bénévolat(e.target.value) }}  id="interest_bénévolat" name="interest_bénévolat" label="bénévolat"inline />
     
        <Form.Check   className="text-dark "type="checkbox" onChange={(e) => { setinterest_programmation(e.target.value) }}  id="interest_programmation" name="interest_programmation" label="programmation" inline/>
      </Form.Group>
      </center>

     
      <Form.Label  className="text-dark  " > your motivation :</Form.Label>
      <FloatingLabel style={{width:'420px',heigh:'20px'}} controlId="floatingTextarea2" onChange={(e) => { setmotivation(e.target.value) }}  label="motivation">
        <Form.Control
        id="motivation" name="motivation"
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px',color:"gray",color:'black' }}
        />
      </FloatingLabel>
      <br></br>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check   className="text-dark "type="checkbox" onChange={(e) => { setcb1(e.target.value) }}  id="cb1" name="cb1" label="I agree with terms and conditions" inline/>
      </Form.Group>
    
     <center> <div className11="fixed-bottom"  >
     <Button variant="outline-info"  style={{ bottom: "0"}}  type="submit" onClick={submit}>submit</Button>{' '}

</div>

</center>
<br></br>

    </Form>
    </center>
    <br></br> <br></br>
    <center>
    <div className="fixed-bottom1" >
  <Button style={{ bottom: "0",right:"0",heigh:"20",width:"120"}} variant="outline-info" href={"/login"}>Sign in </Button>{' '}
</div>
</center>

    </>
  );
}

export default BasicExample;