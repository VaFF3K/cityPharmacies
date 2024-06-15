import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';

const Home = ( {info} ) => {

  return (
    <Container>
      <h1>Ласкаво просимо на веб-сайт аптек міста!</h1>
      <p className="underTitle">
      На нашому веб-сайті ви знайдете інструкції, як користуватися нашими послугами та товари для здоров'я та краси.
      </p>
      <Row>
        {info.map((item) => (
          <Col key={item.id} md={4} >
              <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </Col>  
        ))}
      </Row>
    </Container> 
  );
};


export default Home;