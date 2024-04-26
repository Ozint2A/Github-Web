import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "../components/Card/Card";

function CategoriePage() {
  const { category } = useParams();
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${category}`
        );
        setProduits(response.data.products);
      } catch (error) {
        console.error("Erreur lors de la requête GET : ", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="produits_titre">{category}</h1>
      <div className="produits_body">
        <div className="categoriePage_card">
          {produits.map((produit) => (
            <Card key={produit.id} card={produit} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriePage;
