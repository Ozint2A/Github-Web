import React from "react";
import "./Hero.css";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero-div">
        <p className="hero-text">
          LET’S <br /> EXPLORE <br /> UNIQUE <br />
          ITEMS.
        </p>
        <Button onClick={() => navigate("/produits")}>
          DÉCOUVRIR LES PRODUITS
        </Button>
      </div>
      <img src="/image/rose.png" alt="" />
    </div>
  );
}

export default Hero;
