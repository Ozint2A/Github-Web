import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  return (
    <div className="card">
      <Link to={`/produit/${card.id}`}>
        <img src={card.thumbnail} alt="" />
      </Link>
      <div className="card-description">
        <div>
          <p className="marque">{card.brand}</p>
          <p className="texte-card">{card.title}</p>
        </div>
        <p className="texte-card">{card.price}$</p>
      </div>
    </div>
  );
};

export default Card;
