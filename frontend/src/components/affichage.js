import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Figure from 'react-bootstrap/Figure';

import c from './images/k9.png'

function affichage() { 
  return (
    <>
    <br></br>
    <br></br><br></br>
   <center> <Figure>
      <Figure.Image
        width={350}
        height={180}
        alt="350x180"
        src={c}
      />
       </Figure>
       </center>
    <Form>
    <center>  <h1>Hello admin welcome back!</h1>
  <p>choose the table you want to show it</p>
  </center>
    <center><Button style={{color:'blue'}}type = "submit" value = "members table" href= "/memberstable">members app table</Button> </center>
     
  <br></br>
    <center><Button style={{color:'blue'}} type = "submit" value = "adminsmemberstable"  href="/adminstable">admins app table</Button> </center>
     
  <br></br>
    <center><Button   style={{color:'blue'}}type = "submit" value = "members join clubs" href="/jointable" >members join clubs</Button> </center>
     
  <br></br>
    <center><Button style={{color:'blue'}} type = "submit" value = "clubs messages" href="/clubmsgtable" >clubs messages table</Button> </center>
     
  <br></br>
    <center><Button  style={{color:'blue'}} type = "submit" value = "members messages" href="/msgmembertable" >members messages</Button> </center>
     
  <br></br>
    <center><Button style={{color:'blue'}} type = "submit" value = "addclubs" href="/addclubtable" >add clubs table </Button> </center>
   
 

  
  <br></br><br></br><br></br>
 
 
  </Form>
  </>
  )
}

export default affichage