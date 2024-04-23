import React from 'react';
import './Card.css';

const Card = ({ title, drinks }) => {
  return (
    <div className="drinks-card">
      <h1 className="drinks-card-h1">{title}</h1>
      <ul className="drinks-card-list">
        {drinks.map((drink, index) => (
          <li key={index}>{drink.name}................{drink.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
