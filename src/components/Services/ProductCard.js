import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './CardImage.css'; 

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  return (
    <Card className="product-card">
      <Card.Img src={product.image} alt={product.name} className="card-img-top" /> {}
      <div><Card.Body>
        <Card.Title><strong>{product.name}</strong></Card.Title>
        <Card.Text><p>{product.description}</p></Card.Text>
        <Card.Text className="price"><h5>Ціна: ₴{product.price}</h5></Card.Text>
        {isInCart ? (
          <Button variant="danger" onClick={() => onAddToCart(product)}>
            Видалити з корзини
          </Button>
        ) : (
          <Button variant="primary" onClick={() => onAddToCart(product)}>
            Додати в корзину
          </Button>
        )}
      </Card.Body></div>
    </Card>
  );
};

export default ProductCard;
