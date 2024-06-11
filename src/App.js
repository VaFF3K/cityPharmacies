import React, { useState } from 'react';
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Home from './components/menu/Home';
import About from './components/menu/About';
import Pr_Catalog from './components/Services/Product_Catalog';
import Ph_Catalog from './components/Services/Pharmacy_Catalog';
import Cart from './components/menu/Cart';

import img1 from './components/images/pr_img1.jpg';
import img2 from './components/images/pr_img2.png';
import img3 from './components/images/pr_img3.png';
import img4 from './components/images/pr_img4.png';
import img5 from './components/images/pr_img5.png';

import a_img1 from './components/images/pharmacy/ph_img1.png';
import a_img2 from './components/images/pharmacy/ph_img2.png';
import a_img3 from './components/images/pharmacy/ph_img3.png';

import './App.css';


function App() {
  document.body.style.backgroundColor = '#4d5dee';

  const [cart, setCart] = useState([]); // Стан корзини, яка починається з порожнього масиву
  const [user, setUser] = useState(null);
  const handleAddToCart = (product) => {
    // Перевіряємо, чи товар вже є в корзині
    const isProductInCart = cart.some((item) => item.name === product.name);

    if (isProductInCart) {
      // Якщо товар вже є в корзині, видаляємо його з корзини
      const updatedCart = cart.filter((item) => item.name !== product.name);
      setCart(updatedCart);
    } else {
      // Якщо товару немає в корзині, додаємо його до корзини
      setCart([...cart, product]);
    }
  };
  const products = [
    {
      name: 'Гліцисед',
      description: 'Таблетки, зменшують психоемоційне напруження, підвищують розумову працездатність.',
      price: 90,
      image: img1,
    },
    {
      name: 'Хепілор',
      description: 'Спрей для місцевого лікування інфекційних захворювань та запальних процесів ротової порожнини.',
      price: 90,
      image: img3,
    },
    {
      name: 'Назо-спрей',
      description: 'Спрей для носа, звужує судини, зменшує набряк слизової оболонки носа.',
      price: 44,
      image: img4,
    },
    {
      name: 'Стрепсілс',
      description: 'Препарат/таблетки, що полегшують біль у горлі та зменшують прояви запалення.',
      price: 110,
      image: img2,
    },
    {
      name: 'Аскорбінка',
      description: 'Препарат застосовується для профілактики грипу та застуди.',
      price: 10,
      image: img5,
    },
  ];

  const pharmacies = [
    {
      name: 'Аптека "Здорова родина"',
      address: 'Адреса аптеки...',
      phone: '0XX-XXX-XXXX',
      image: a_img1,
    },
    {
      name: 'Аптека "Подорожник"',
      address: 'Адреса аптеки...',
      phone: '0XX-XXX-XXXX',
      image: a_img2,
    },
    {
      name: 'Аптека "БАМ"',
      address: 'Адреса аптеки...',
      phone: '0XX-XXX-XXXX',
      image: a_img3,
    },
  ];
  const info = [
    {
      id: 1,
      title: 'База аптек',
      description: 'Переглядайте доступні аптеки у відповідній вкладці.',
     
    },
    {
      id: 2,
      title: 'Пошук товару',
      description: 'Перейдіть у відповідну вкладку для пошуку препаратів.',
    },
    {
      id: 3,
      title: 'Здійснення замовлення',
      description: 'Після того як Ви оберете товар, він буде знаходитись в корзині для подальших дій.',
    },
  ];

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <Menu cartCount={cart.length} />
        </header>

        <Routes>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home info={info}/>} />
          <Route path="/catalog" element={<Pr_Catalog products={products} onAddToCart={handleAddToCart} cart={cart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/pharmacy" element={<Ph_Catalog pharmacies={pharmacies} />} />
          <Route path="/cart" element={<Cart cart={cart} onAddToCart={handleAddToCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
