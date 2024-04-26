import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Categorie.css";
import { Button } from "../Button/Button";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";

export const Categorie = () => {
  const navigate = useNavigate();
  const [smartphone, setSmartphone] = useState([]);
  const [montre, setMontre] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/smartphones?&limit=3"
        );
        setSmartphone(response.data.products);
      } catch (error) {
        console.error(
          "Erreur lors de la requête GET pour les smartphones : ",
          error
        );
      }
    }

    async function fetchDataMontres() {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/mens-watches?&limit=3"
        );
        setMontre(response.data.products);
      } catch (error) {
        console.error(
          "Erreur lors de la requête GET pour les montres : ",
          error
        );
      }
    }

    fetchData();
    fetchDataMontres();
  }, []);

  return (
    <div className="categorie-body">
      <div className="categorie-header">
        <p className="categorie-titre">MAN WATCHES</p>
        <Button onClick={() => navigate(`/category/${"mens-watches"}`)}>
          TOUT VOIR
        </Button>
      </div>
      <div className="categorie-card">
        {montre.map((montre) => (
          <Card key={montre.id} card={montre} />
        ))}
      </div>
      <div className="categorie-header">
        <p className="categorie-titre">SMARTPHONE</p>
        <Button onClick={() => navigate(`/category/${"smartphones"}`)}>
          TOUT VOIR
        </Button>
      </div>
      <div className="categorie-card">
        {smartphone.map((smartphones) => (
          <Card key={smartphones.id} card={smartphones} />
        ))}
      </div>
    </div>
  );
};
