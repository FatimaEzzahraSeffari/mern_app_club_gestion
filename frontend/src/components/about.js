import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import e from  './images/k9.png'
function about() {
  
  return (
    <>
    <br></br><br></br>
    
   <center>
    <Card style={{ width: '30rem',height:'27rem' }}>
    <Card.Img variant="top" src={e} />
    <Card.Body>

      <Card.Title style={{color:"blue",textDecoration:"underline"}}>About Us </Card.Title>
      <Card.Text style={{color:'black'}}>
     OPEN SKIES is an open source application created by fatima ezzahra seffari, 4th cycle engineering student in web and mobile development.<br></br>
                    this application used to manage the extracurricular clubs of our euromed university and avoid the traditional paper and pen method.
      </Card.Text>
      <Button style={{color:"blue"}} variant="primary" href={"/contact"}>Contact</Button>
    </Card.Body>
  </Card>
  </center>
  </>
  )
}

export default about