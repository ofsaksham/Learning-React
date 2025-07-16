import React from 'react';
import './Card.css';

export default function Card({ name, children }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}
