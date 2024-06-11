import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const Pr_Catalog = ({ products, onAddToCart, cart }) => {
  return (
    <Container>
      <h2>Каталог товарів</h2>
      <Row>
      
        {products.map((product, index) => (
          <Col key={index} md={4}>
          <ProductCard 
              product={product}
              onAddToCart={onAddToCart}
              isInCart={cart.some((item) => item.name === product.name)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Pr_Catalog;
