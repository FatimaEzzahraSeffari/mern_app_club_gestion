import Table from 'react-bootstrap/Table';
import React from 'react'
import  { useEffect, useState } from 'react'
import Axios from "axios"
import { Link } from "react-router-dom";
import Figure from 'react-bootstrap/Figure';
import { Container } from 'react-bootstrap';
import e from  './images/k9.png'
import Button from 'react-bootstrap/Button';
function Jointable() {
  
  const [data, setData] = useState([])
  useEffect(() => {
      const fetchProducts = async () => {
          const { data } = await Axios.get(("http://localhost:5000/jointable"))
          setData(data)
      }
      fetchProducts()
  }, [])
  useEffect(() => {
    getData();
}, []);
const getData = async () => {
  const { data } = await Axios.get("http://localhost:5000/delete/Userclub");
  setData(data.data);
};
const deleteUser = async (id) => {
  try {
      await Axios.delete(`http://localhost:5000/delete/Userclub/${id}`);
      getData();
  } catch (error) {
      console.log(error);
  }
};


const refresh = () => window.location.reload(true)


  return ( 
    <Table striped="columns">   
    <thead>
    <Figure>
    <Figure.Image
      width={260}
      height={280}
      alt="171x180"
      src={e}
    />
     </Figure>
    <Container>
    
     <div class="text-center"> 
     <p   className="text-dark ">join club table&#128221;</p>   
    
    </div>

      </Container>
      <tr>
      <th style={{color:"black"}}>firstname</th>
          <th style={{color:"black"}}>lastname</th>
          <th style={{color:"black"}}>email</th>
          <th style={{color:"black"}}>LIONS</th>
          <th style={{color:"black"}}>AIKIDOU</th>
          <th style={{color:"black"}}>PHOTOGRAPHIE</th>
          <th style={{color:"black"}}>GAMING</th>
          <th style={{color:"black"}}>DIGIClub</th>
          <th style={{color:"black"}}>ECHECS</th>
          <th style={{color:"black"}}>PICTURE</th>
          <th style={{color:"black"}}>KICKBOXING</th>
          <th style={{color:"black"}}>LECTURE</th>
          <th style={{color:"black"}}>why</th>
          <th style={{color:"black"}}> Date</th>
          <th style={{color:"black"}}> cb</th>
       
         
         

    
    <th colspan="4" style={{color:"black"}}>Actions</th>
        </tr>
        <tr> 
      </tr>
  </thead>
  <tbody>
  {data.map((item) => (
                    <tr key={item._id}>
                        <td style={{color:"black"}}>{item. firstname2} </td>
                        <td style={{color:"black"}}>{item. lastname2} </td>
                        <td style={{color:"black"}}>{item.email2}</td>
                        <td style={{color:"black"}}>{item.LIONS}</td>
                        <td style={{color:"black"}}>{item.AIKIDOU}</td>
                        <td style={{color:"black"}}>{item.PHOTOGRAPHIE} </td>
                        <td style={{color:"black"}}>{item.GAMING}</td>
                        <td style={{color:"black"}}>{item.DIGIClub}</td>
                        <td style={{color:"black"}}>{item.ECHECS} </td>
                        <td style={{color:"black"}}>{item.PICTURE}</td>
                        <td style={{color:"black"}}>{item.KICKBOXING}</td>
                        <td style={{color:"black"}}>{item.LECTURE} </td>
                        <td style={{color:"black"}}>{item.why}</td>
                        <td style={{color:"black"}}>{item.Date}</td>
                        <td style={{color:"black"}}>{item.cb} </td>
                        <td><button
                                onClick={() => deleteUser(item._id)}
                                className="button is-danger is-small"
                            >
                                Delete
                            </button>
                            <Link
                                to={`/editjoin/${item._id}`}
                                className="button is-info is-small mr-1"
                            >
                                Edit
                            </Link>
                            </td>
                    </tr>
                ))}
                <center><div className="fixed-bottom"  >
<Button style={{ bottom: "0", right: "0"}} variant="outline-info" href={"/add"} >+add new club </Button>{' '}
</div></center>
<br></br>

</tbody>
<br></br>
<Button style={{ bottom: "0", right: "0"}} variant="outline-info" onClick={refresh}>Refresh</Button>{' '}
    </Table>
    
  
  )
}

 
export default Jointable