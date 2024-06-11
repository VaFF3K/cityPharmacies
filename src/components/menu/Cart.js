import React, { useState } from 'react';
import { Container, Table, Button, Form } from 'react-bootstrap';

const Cart = ({ cart, onAddToCart }) => {
  const [quantities, setQuantities] = useState({});

  const calculateTotal = () => {
    let total = 0;
    for (const product of cart) {
      total += product.price * (quantities[product.name] || 1);
    }
    return total;
  };

  const handleQuantityChange = (product, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product.name]: quantity,
    }));
  };

  return (
    <Container>
      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <div className="cart-text">Ваша корзина порожня. Перейдіть до вкладки з каталогом та оберіть товар.</div>
      ) : (
        <Table striped bordered hover className="cart-table">
          <thead>
            <tr>
              <th>Назва товару</th>
              <th>Ціна</th>
              <th>Кількість</th>
              <th>Сума</th>
              <th>Дії</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>₴{product.price}</td>
                <td>
                  <Form.Control
                    type="number"
                    value={quantities[product.name] || 1}
                    onChange={(event) =>
                      handleQuantityChange(product, Number(event.target.value))
                    }
                  />
                </td>
                <td>₴{product.price * (quantities[product.name] || 1)}</td>
                <td>
                  <Button variant="danger" onClick={() => onAddToCart(product, 0)}>
                    Видалити з корзини
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {cart.length > 0 && (
        <div className="cart-text">
          Загальна сума: ₴{calculateTotal()}
        </div>
      )}
    </Container>
  );
};

export default Cart;
