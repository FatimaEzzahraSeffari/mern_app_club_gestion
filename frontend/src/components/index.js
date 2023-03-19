import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import b from './images/k9.png'
function index() {
  return (
    <>
    <br></br><br></br><br></br><br></br>
    <Carousel  variant="dark">
      <Carousel.Item>
        
        <img
          className="d-block w-100"
          src={b}
          alt={"First slide"}
        />
         <br></br><br></br><br></br><br></br>
        <Carousel.Caption>
         
          <p>Give to your student life A new taste &#128523;.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b}
          alt="Second slide"
        />
         <br></br><br></br><br></br><br></br>
        <Carousel.Caption>
         
          <p>Extracurricular activities are a great way to learn &#127891;skills that will help you in the future.
                                This includes developing personal &#127891;,social skills and learning teamwork there for join us now &#127891;.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b}
          alt="Third slide"
        />
         <br></br><br></br><br></br><br></br>
        <Carousel.Caption>
         
          <p>
          Every new friend  &#9996;is a  new adventure Let's get connected &#9996;.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
    <br></br> <br></br> <br></br> <br></br>
 <center><div className="fixed-bottom"  >
  <Button style={{ bottom: "0", right: "0"}} variant="outline-info" href={"/register"} >Users Sign up  </Button>{' '}
  <Button style={{ bottom: "0", right: "0"}} variant="outline-info" href={"/signupad"} >Admin Sign up  </Button>{' '}
</div></center>  
    </>
  );
}

export default index;