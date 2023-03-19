import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import products from '../products';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
export const Description = () => {
    const {id} = useParams();
const product = products.find((p) => p._id === id)
  return (
    <>
    <Link className='btn btn-light my-3' to='/'>Go Back
</Link>

<Row>
<Col>
<Image src={'../'+product.image} alt={product.name} fluid />
</Col>
<Col> 
<ListGroup variant='flush'>
<ListGroup.Item>
<h3>{product.name}</h3>
</ListGroup.Item>
<ListGroup.Item>
Description: {product.description}
</ListGroup.Item>
</ListGroup>
</Col> 
<Col>
                    <ListGroup>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                    {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>

</>
  )
}
