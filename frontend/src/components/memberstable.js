import Table from 'react-bootstrap/Table';
import React from 'react'
import  { useEffect, useState } from 'react'
import Axios from "axios"
import { Link } from "react-router-dom";
import Figure from 'react-bootstrap/Figure';
import { Container } from 'react-bootstrap';
import e from  './images/k9.png'
import Button from 'react-bootstrap/Button';
function Memberstable() {
  const [data, setData] = useState([])
  useEffect(() => {
      const fetchProducts = async () => {
          const { data } = await Axios.get(("http://localhost:5000/memberstable"))
          setData(data)
      }
      fetchProducts()
  }, [])
  useEffect(() => {
    getData();
}, []);
const getData = async () => {
    const { data } = await Axios.get("http://localhost:5000/delete/User");
    setData(data.data);
};
const deleteUser = async (id) => {
    try {
        await Axios.delete(`http://localhost:5000/delete/User/${id}`);
        getData();
    } catch (error) {
        console.log(error);
    }
};


const refresh = () => window.location.reload(true)
  return (
    <Table striped="columns">
    <thead style={{color:"black"}}>
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
     <p   className="text-dark ">members table &#128221;</p>   
    
    </div>

      </Container>

      <tr>
      <th style={{color:"black"}}>firstname</th>
          <th style={{color:"black"}}>lastname</th>
          <th style={{color:"black"}}>phonenumber</th>
          <th style={{color:"black"}}>email</th>
          <th style={{color:"black"}}>password</th>
          <th style={{color:"black"}}>retypepassword</th>
          <th style={{color:"black"}}>school</th>
          <th style={{color:"black"}}>interest_Musique</th>
          <th style={{color:"black"}}>interest_sport</th>
          <th style={{color:"black"}}>interest_photographie</th>
          <th style={{color:"black"}}>interest_bénévolat</th>
          <th style={{color:"black"}}>interest_programmation</th>
          <th style={{color:"black"}}>motivation</th>
          <th style={{color:"black"}}>cb1</th>
         

    
    <th  style={{color:"black"}} colspan="4">Actions</th> 
        </tr>
        <tr> 
      </tr>
  </thead>
  <tbody>
  {data.map((item) => (
                    <tr key={item._id}>
                        <td style={{color:"black"}}>{item.firstname} </td>

                        <td style={{color:"black"}}>{item.lastname} </td>
                        <td style={{color:"black"}}>{item.phonenumber}</td>
                        <td style={{color:"black"}}>{item.email}</td>
                        <td style={{color:"black"}}>{item.password}</td>
                        <td style={{color:"black"}}>{item.retypepassword} </td>

                          <td style={{color:"black"}}>{item.school} </td>
                          <td style={{color:"black"}}>{item.interest_Musique} </td>
                        <td style={{color:"black"}}>{item.interest_sport}</td>
                        <td style={{color:"black"}}>{item.interest_photographie}</td>
                        <td style={{color:"black"}}>{item.interest_bénévolat}</td>
                        <td style={{color:"black"}}>{item.  interest_programmation} </td>
                        <td style={{color:"black"}}>{item.motivation}</td>
                        <td style={{color:"black"}}>{item.cb1}</td>
                              <td><button
                                onClick={() => deleteUser(item._id)}
                                className="button is-danger is-small"
                            >
                                Delete
                            </button>
                            <Link
                                to={`/edituser/${item._id}`}
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

export default Memberstable