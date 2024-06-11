import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2 className="about-heading">Про нас</h2>
      <div className="about-text">
        Ми - Веб-сайт аптек міста, пропонуємо широкий асортимент медичних
        препаратів та товарів для вашого здоров'я та комфорту. Наша мета -
        забезпечити вас найкращими та найякіснішими продуктами для підтримки
        вашого здоров'я.
        Для отримання додаткової інформації, зв'яжіться з нами за наступними
        контактними даними:
      </div>
      <ul className="about-list">
        <li className="about-list-item">Адреса: вул. Ваша адреса, Ваше місто</li>
        <li className="about-list-item">Телефон: +1234567890</li>
        <li className="about-list-item">Електронна пошта: info@example.com</li>
      </ul>
    </div>
  );
}

export default About;
