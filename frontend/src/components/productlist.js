import React from 'react'
import products from '../products'
import Product from './product'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const productlist = () => {
  return (
    <>
    <div></div>
    <Row>
{products.map((product) => (
<Col >
<Product p={product} />
</Col>
))}
</Row>

</>
)

}

export default productlist