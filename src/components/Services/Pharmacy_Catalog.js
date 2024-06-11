import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Pharmacy from './Pharmacy.js';

const Ph_Catalog = ({pharmacies}) => {
    return (
    <Container>
  <h2>Аптеки міста</h2>
  <Row>
    {pharmacies.map((pharmacies, index) => (
      <Col key={index} md={4}>
             <Pharmacy pharmacies={pharmacies} />
            </Col>
          ))}
        </Row>
      </Container>
      );
  };
  

export default Ph_Catalog;