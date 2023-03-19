import Table from 'react-bootstrap/Table';
import React from 'react'
import  { useEffect, useState } from 'react'
import Axios from "axios"
import { Link } from "react-router-dom";
import Figure from 'react-bootstrap/Figure';
import { Container } from 'react-bootstrap';
import e from  './images/k9.png'
import Button from 'react-bootstrap/Button';
function Adminstable() {

  const [data, setData] = useState([])
  useEffect(() => {
      const fetchProducts = async () => {
          const { data } = await Axios.get(("http://localhost:5000/adminstable"))
          setData(data)
      }
      fetchProducts()
  }, [])
  useEffect(() => {
    getData();
}, []);
const getData = async () => {
  const { data } = await Axios.get("http://localhost:5000/delete/admin");
  setData(data.data);
};
const deleteUser = async (id) => {
  try {
      await Axios.delete(`http://localhost:5000/delete/admin/${id}`);
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
     <p   className="text-dark ">admins table &#128221;</p>   
    
    </div>

      </Container>
      <tr>
      <th style={{color:"black"}}>firstname</th>
          <th style={{color:"black"}}>lastname</th>
          <th style={{color:"black"}}>phonenumber</th>
          <th style={{color:"black"}}>email</th>
          <th style={{color:"black"}}>password</th>
          <th style={{color:"black"}}>retypepassword</th>
          <th style={{color:"black"}}>cb</th>
         

    
    <th colspan="4">Actions</th>
        </tr>
        <tr> 
      </tr>
  </thead>
  <tbody>
  {data.map((item) => (
                    <tr key={item._id}>
                        <td style={{color:"black"}}>{item.firstname4} </td>

                        <td style={{color:"black"}}>{item.lastname4} </td>
                        <td style={{color:"black"}}>{item.phonenumber4}</td>
                        <td style={{color:"black"}}>{item.email4}</td>
                        <td style={{color:"black"}}>{item.password4}</td>
                        <td style={{color:"black"}}>{item.retypepassword4} </td>

                          <td style={{color:"black"}}>{item.cb2} </td>
                          <td><button
                                onClick={() => deleteUser(item._id)}
                                className="button is-danger is-small"
                            >
                                Delete
                            </button>
                            <Link
                                to={`/editadmin/${item._id}`}
                                className="button is-info is-small mr-1"
                            >
                                Edit
                            </Link>
                           </td>
                    </tr>
                ))}
</tbody>
<br></br>
<Button style={{ bottom: "0", right: "0"}} variant="outline-info" onClick={refresh}>Refresh</Button>
    </Table>
  )
}

export default Adminstable