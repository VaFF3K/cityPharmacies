import React from 'react';
import { Card } from 'react-bootstrap';
import './CardImage.css'; 

const Pharmacy = ({ pharmacies }) => {
  return (
            <Card className="product-card" style={{ width: '100%', height: '100%' }}>
              <Card.Img variant="top" src={pharmacies.image} alt={pharmacies.name} className="card-img-top"/>
              <Card.Body>
                <Card.Title>{pharmacies.name}</Card.Title>
                <Card.Text>{pharmacies.address}</Card.Text>
                <Card.Text>{pharmacies.phone}</Card.Text>
              </Card.Body>
            </Card>
  );
};

export default Pharmacy;
