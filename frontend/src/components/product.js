import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import { Container } from 'react-bootstrap';
import e from  './images/k9.png'

const product= ({p}) => {  
  
  return (
    <>
   <diV>
     <Figure>
      <Figure.Image
        width={260}
        height={280}
        alt="171x180"
        src={e}
      />
       </Figure>
     
       </diV>
<div>
  

<Card style={{ alignItems:'center', width: '19rem' }}>
      <Card.Img  variant="top" src={p.image} />
      <Card.Body>
      <center> <Card.Title  style={{color:"blue",textDecoration:"underline"}}>{p.name}</Card.Title></center> 
        <Card.Text  style={{color:'black'}}>
         {p.description}
        </Card.Text>
        <Button variant="primary" style={{color:"blue"}} href={"/join"}>JOIN CLUB</Button>
        <br></br> <br></br> 
        <Button variant="primary" style={{color:"blue"}} href={"/Message"}>MESSAGE</Button>
      </Card.Body>     
    </Card>
    </div>
    <br></br> <br></br> <br></br> <br></br>
 <center><div className="fixed-bottom"  >
  <Button style={{ bottom: "0", right: "0"}} variant="outline-info" href={"/about"} >About us </Button>{' '}
</div></center>   
    
    </>
    

    
  );
 
}








export default product;