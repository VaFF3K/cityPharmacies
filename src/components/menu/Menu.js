import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Menu = () => {
  const navLinkStyle = { //Пункти меню
    color: '#ffffff',
    fontSize: '20px',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  };

  const navLinkHoverStyle = {
    color: '#4169E1', // Колір при наведенні
  };
  
  const brandStyle = {
    color: '#ffffff', //  "Веб-сайт аптек міста"
    fontSize: '32px', 
  };

  const userStyle = {
    color: '#ffffff', // Користувач
  };

  const userName = { // Ім'я користувача
    color: '#8e96b9',
  };

  const links = ['#home', '#about', '#pharmacy', '#catalog', '#cart'];
  const linkTexts = ['Головна', 'Про Нас', 'Аптеки поблизу', 'Каталог товарів', 'Корзина'];

  return (
    <div className="header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home" style={brandStyle}>Веб-сайт аптек міста</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {links.map((href, idx) => (
                <Nav.Link
                  href={href}
                  key={idx}
                  style={navLinkStyle}
                  onMouseEnter={(e) => e.target.style.color = navLinkHoverStyle.color}
                  onMouseLeave={(e) => e.target.style.color = navLinkStyle.color} >
                  {linkTexts[idx]}
                </Nav.Link>
              ))}
            </Nav>
             <Navbar.Text style={userStyle}>
              Авторизовано як: <a style={userName}>Artur Honcharuk</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;