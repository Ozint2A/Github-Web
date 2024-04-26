import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card/Card.jsx";
import BouttonCategorie from "../components/Button/BouttonCategorie.jsx";

function ProduitsPage() {
  const [categories, setCategories] = useState([]);
  const [produits, setProduits] = useState([]);
  const [filteredProduits, setFilteredProduits] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(null);

  useEffect(() => {
    async function fetchDataCategorie() {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Erreur lors de la requête GET : ", error);
      }
    }

    async function fetchDataProduits() {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products?limit=0"
        );
        setProduits(response.data.products);
      } catch (error) {
        console.error("Erreur lors de la requête GET : ", error);
      }
    }

    fetchDataCategorie();
    fetchDataProduits();
  }, []);

  useEffect(() => {
    const filteredProduits = selectedCategories
      ? produits.filter((produit) => produit.category === selectedCategories)
      : produits;
    setFilteredProduits(filteredProduits);
  }, [selectedCategories, produits]);

  const handleClick = (category) => {
    setSelectedCategories(category);
  };

  return (
    <main className="container">
      <h1 className="produits_titre">PRODUITS</h1>
      <div className="produits_body">
        <div className="produits_link">
          <BouttonCategorie
            title="ALL"
            onClick={() => handleClick(null)}
            active={selectedCategories === null}
          />
          {categories.map((categorie) => (
            <div key={categorie}>
              <BouttonCategorie
                title={categorie}
                onClick={() => handleClick(categorie)}
                active={selectedCategories === categorie}
              />
            </div>
          ))}
        </div>
        <div className="produits-card">
          {filteredProduits.map((produit) => (
            <Card key={produit.id} card={produit} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default ProduitsPage;
