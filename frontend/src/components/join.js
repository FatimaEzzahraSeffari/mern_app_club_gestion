import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate, useLocation } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import  { useEffect, useState } from 'react'
import Axios from "axios"
import Figure from 'react-bootstrap/Figure';
import e from  './images/k9.png'
function Join () {
  const history = useNavigate();
    const [firstname2, setfirstname2] = useState('');
    const [lastname2, setlastname2] = useState('');
    const [email2, setemail2] = useState('');
    const [CLUB, setCLUB] = useState('');
    const [LIONS, setLIONS] = useState('');
    const [AIKIDOU, setAIKIDOU] = useState('');
    const [PHOTOGRAPHIE, setPHOTOGRAPHIE] = useState('');
    const [GAMING, setGAMING] = useState('');
    const [DIGIClub, setDIGIClub] = useState('');
    const [ECHECS, setECHECS] = useState('');
    const [PICTURE, setPICTURE] = useState('');
    const [KICKBOXING, setKICKBOXING] = useState('');
    const [LECTURE, setLECTURE] = useState('');
    const [why, setwhy] = useState('');
    const [Date, setDate] = useState('');
    const [cb, setcb] = useState('');
    async function submit(e) {
        e.preventDefault();
        try {
            await Axios.post("http://localhost:5000/join", {
              firstname2,lastname2,email2,CLUB,LIONS,AIKIDOU,PHOTOGRAPHIE,GAMING,DIGIClub,ECHECS,PICTURE,KICKBOXING,LECTURE,why,Date,cb
            })
                .then(res => {
                    if (res.data = "user exist") {
                      alert(" you are join club succefully!!")
                        history("/about")
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
    <Form action='POST'  style={{width:'620px',heigh:'600px',border:"solid",color:"#4169E1"}}>
     
      <Container>
     <div class="text-center"> 
    <p   className="text-dark ">Welcome back !!!  new friend is a you adventure join us &#128108;</p>    
    
    </div>
      </Container>
    

   
     
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label  className="text-dark " >&emsp;&emsp;firstname :</Form.Label>
    <Form.Control type="text" style={{width:'420px',heigh:'20px',color:'black'}}  placeholder="firstname" onChange={(e) => { setfirstname2(e.target.value) }} id ="firstname2"  name="firstname2"/>
    
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label  className="text-dark ">&emsp;&emsp;lastname :</Form.Label>
    <Form.Control type="text" style={{width:'420px',heigh:'20px',color:'black'}}  placeholder="lastname" onChange={(e) => { setlastname2(e.target.value) }}id ="lastname2"  name="lastname2"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label  className="text-dark ">&emsp;&emsp;Email address :</Form.Label>
    <Form.Control type="email"style={{width:'420px',heigh:'20px',color:'black'}}  placeholder="Enter email" onChange={(e) => { setemail2(e.target.value) }}id="email2" name="email2" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label   className="text-dark" onChange={(e) => { setCLUB(e.target.value) }} id="CLUB" name="CLUB">&emsp;&emsp;Your favorite club :</Form.Label>
 
  </Form.Group>
  <center>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check class="form-check-inline" className="text-dark "type="checkbox" onChange={(e) => { setLIONS(e.target.value) }}  id="LIONS" name="LIONS" label="LIONS" inline/>
 
    <Form.Check  class="form-check-inline"  className="text-dark "type="checkbox" onChange={(e) => { setAIKIDOU(e.target.value) }}  id="AIKIDOU" name="AIKIDOU" label="AIKIDOU" inline />
 
    <Form.Check    className="text-dark "type="checkbox" onChange={(e) => { setPHOTOGRAPHIE(e.target.value) }}  id="PHOTOGRAPHIE" name="PHOTOGRAPHIE" label="PHOTOGRAPHIE" inline/>
 
    <Form.Check   className="text-dark "type="checkbox" onChange={(e) => { setGAMING(e.target.value) }}  id="GAMING" name="GAMING" label="GAMING" inline/>
 
    <Form.Check   className="text-dark "type="checkbox" onChange={(e) => { setDIGIClub(e.target.value) }}  id="DIGIClub" name="DIGIClub" label="DIGIClub" inline/>
 
    <Form.Check   className="text-dark "type="checkbox" onChange={(e) => { setECHECS(e.target.value) }}  id="ECHECS" name="ECHECS" label="ECHECS" inline/>
 
    <Form.Check   className="text-dark "type="checkbox" onChange={(e) => { setPICTURE(e.target.value) }}  id="PICTURE" name="PICTURE" label="PICTURE" inline/>
 
    <Form.Check   className="text-dark "type="checkbox" onChange={(e) => { setKICKBOXING(e.target.value) }}  id="KICKBOXING" name="KICKBOXING" label="KICKBOXING" inline/>
 
    <Form.Check   className="text-dark "type="checkbox" onChange={(e) => { setLECTURE(e.target.value) }}  id="LECTURE" name="LECTURE" label="LECTURE"inline />
    
  </Form.Group>

  </center>
  <Form.Group className="mb-3">
    <Form.Label   className="text-dark" onChange={(e) => { setCLUB(e.target.value) }} id="CLUB" name="CLUB">&emsp;&emsp;why you choose our club :</Form.Label>
 
 
  <FloatingLabel controlId="floatingTextarea2" style={{width:'420px',heigh:'20px'}}  onChange={(e) => { setwhy(e.target.value) }} label="why you choose our club">
        <Form.Control
        id="why" name="why"
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px',color:'black' }}
        />
      </FloatingLabel>
         
  </Form.Group>
    <br></br>
      <Form.Group class = "field">
      <center><input style={{color:"black " ,height:"40px",width:"260px"  }} className='bg-blue' type="date"  onChange={(e) => { setDate(e.target.value) }}  id="Date" name="Date"
          
               min="2022-01-01" max="2023-12-31"/>
               </center>
               </Form.Group>
               
              <br></br>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check   className="text-dark "type="checkbox" onChange={(e) => { setcb(e.target.value) }}  id="cb" name="cb"  label="I agree with terms and conditions" inline/>
  </Form.Group>
 
 <center>  <Button  variant="outline-info" type="submit" onClick={submit} >submit</Button>{''} </center> 
 <br></br>
</Form>
</center>
</>
  )
}

export default Join