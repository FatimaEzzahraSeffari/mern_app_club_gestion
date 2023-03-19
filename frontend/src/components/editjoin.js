import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import  { useEffect, useState } from 'react'
import Axios from "axios"
import { useNavigate, useParams } from "react-router-dom";
function Editjoin () {
  const [ firstname2, setfirstname2] = useState('');
  const [ lastname2, setlastname2] = useState('');
  const [  email2, setemail2] = useState('');
  const [ LIONS, setLIONS] = useState('');
    const [ AIKIDOU, setAIKIDOU] = useState('');
    const [PHOTOGRAPHIE, setPHOTOGRAPHIE] = useState('');
    const [GAMING, setGAMING] = useState('');
    const [DIGIClub, setDIGIClub] = useState('');
    const [ECHECS, setECHECS] = useState('');
    const [PICTURE, setPICTURE] = useState('');
    const [KICKBOXING, setKICKBOXING] = useState('');
    const [    LECTURE, setLECTURE] = useState('');
    const [why, setwhy] = useState('');
    const [Date, setDate] = useState('');
    const [cb, setcb] = useState('');

    const navigate = useNavigate();
    const { id } = useParams();
  
    useEffect(() => {
        getUserById();
    }, []);
    const getUserById = async () => {
      const response = await Axios.get(`http://localhost:5000/edituserclub/${id}`);
      setfirstname2(response.data.firstname2)
      setlastname2(response.data. lastname2)
      setemail2(response.data. email2)
      setLIONS(response.data.LIONS);
      setAIKIDOU(response.data.AIKIDOU);
      setPHOTOGRAPHIE(response.data.PHOTOGRAPHIE);
      setGAMING(response.data.GAMING);
      setDIGIClub(response.data.DIGIClub);
      setECHECS(response.data.ECHECS);
      setPICTURE(response.data.PICTURE);
      setKICKBOXING(response.data.KICKBOXING);
      setLECTURE(response.data.LECTURE);
      setwhy(response.data.why);
      setDate(response.data.Date);
      setcb(response.data.cb);
  };  
  const updateUser = async (e) => {
    e.preventDefault();
    try {
        await Axios.patch(`http://localhost:5000/editjoin/${id}`, {
    AIKIDOU:String,
          firstname2,lastname2,email2, LIONS, AIKIDOU,PHOTOGRAPHIE, GAMING,DIGIClub,ECHECS, PICTURE, KICKBOXING, LECTURE,why,    Date ,   cb
        });
        navigate("/jointable");
    } catch (error) {
        console.log(error);
    }
};
  return (
    <Form onSubmit={updateUser}>
    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label  className="text-dark " >firstname</Form.Label>
    <Form.Control type="text" placeholder="firstname" value={firstname2} onChange={(e) => { setfirstname2(e.target.value) }}  id ="firstname2"  name="firstname2"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label  className="text-dark ">lastname</Form.Label>
    <Form.Control type="text" placeholder="lastname" value={lastname2} onChange={(e) => { setlastname2(e.target.value) }}  id ="lastname2"  name="lastname2"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label  className="text-dark ">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"value={email2} onChange={(e) => { setemail2(e.target.value) }}  id="email2" name="email2" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label   className="text-dark" id="CLUB" name="CLUB">Your favorite club :</Form.Label>
    <center>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check class="form-check-inline" className="text-dark "type="checkbox" value={LIONS} onChange={(e) => { setLIONS(e.target.value) }}  id="LIONS" name="LIONS" label="LIONS" inline/>
 
    <Form.Check  class="form-check-inline"  className="text-dark "type="checkbox" value={AIKIDOU} onChange={(e) => { setAIKIDOU(e.target.value) }}  id="AIKIDOU" name="AIKIDOU" label="AIKIDOU" inline />
 
    <Form.Check    className="text-dark "type="checkbox" value={PHOTOGRAPHIE}  onChange={(e) => { setPHOTOGRAPHIE(e.target.value) }}  id="PHOTOGRAPHIE" name="PHOTOGRAPHIE" label="PHOTOGRAPHIE" inline/>
 
    <Form.Check   className="text-dark "type="checkbox" value={GAMING}  onChange={(e) => { setGAMING(e.target.value) }}  id="GAMING" name="GAMING" label="GAMING" inline/>
 
    <Form.Check   className="text-dark "type="checkbox"  value={DIGIClub}onChange={(e) => { setDIGIClub(e.target.value) }}  id="DIGIClub" name="DIGIClub" label="DIGIClub" inline/>
 
    <Form.Check   className="text-dark "type="checkbox"  value={ECHECS} onChange={(e) => { setECHECS(e.target.value) }}  id="ECHECS" name="ECHECS" label="ECHECS" inline/>
 
    <Form.Check   className="text-dark "type="checkbox"  value={PICTURE} onChange={(e) => { setPICTURE(e.target.value) }}  id="PICTURE" name="PICTURE" label="PICTURE" inline/>
 
    <Form.Check   className="text-dark "type="checkbox"  value={KICKBOXING} onChange={(e) => { setKICKBOXING(e.target.value) }}  id="KICKBOXING" name="KICKBOXING" label="KICKBOXING" inline/>
 
    <Form.Check   className="text-dark "type="checkbox"  value={LECTURE} onChange={(e) => { setLECTURE(e.target.value) }}  id="LECTURE" name="LECTURE" label="LECTURE"inline />
    
  </Form.Group>

  </center>
  </Form.Group>
  <FloatingLabel controlId="floatingTextarea2" value={why} onChange={(e) => { setwhy(e.target.value) }} label="why you choose our club">
        <Form.Control
        id="why" name="why"
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
    
      <br></br>
      <Form.Group class = "field">
      <center><input style={{color:"black " ,height:"40px",width:"260px"  }} className='bg-blue' type="date" value={Date}  onChange={(e) => { setDate(e.target.value) }}  id="Date" name="Date"
          
               min="2022-01-01" max="2023-12-31"/>
               </center>
               </Form.Group>
               
              <br></br>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check   className="text-dark "type="checkbox" value={cb} onChange={(e) => { setcb(e.target.value) }}  id="cb" name="cb" label="I agree with terms and conditions" />
  </Form.Group>
 <center> <Button> <input className='bg-secondary' variant="primary" type="submit" /> </Button></center>

</Form>
  )
}

export default Editjoin