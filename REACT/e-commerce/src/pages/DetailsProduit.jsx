import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "../components/Button/Button";
import Card from "../components/Card/Card";

function DetailsProduit() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [produit, setProduit] = useState([]);
  const [memeProduit, setmemeProduit] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduit(response.data);
      } catch (error) {
        console.error("Erreur lors de la requête GET : ", error);
      }
    }

    fetchData();
  }, [id]);

  useEffect(() => {
    async function fetchDataMeme() {
      if (produit.category === undefined) return;
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${produit.category}?&limit=3`
        );
        setmemeProduit(response.data.products);
        console.log(response.data);
      } catch (error) {
        console.error("Erreur lors de la requête GET : ", error);
      }
    }

    fetchDataMeme();
  }, [produit]);
  return (
    <div className="container">
      <div className="details_tout">
        <div className="details_image">
          {produit.images &&
            produit.images.map((image) => <img key={image} src={image} />)}
        </div>
        <div>
          <div className="details_infos">
            <label className="label">Marque</label>
            <p className="details_marque">{produit.brand}</p>
            <p className="details_prix">{produit.price} $</p>
            <label className="label">Description</label>
            <p className="details_description">{produit.description}</p>
            <label className="label">Note</label>
            <p className="details_description">{produit.rating}</p>
          </div>
        </div>
      </div>
      <div className="categorie-body">
        <div className="categorie-header">
          <p className="categorie-titre">DANS LA MEME CATEGORIE</p>
          <Button onClick={() => navigate(`/category/${produit.category}`)}>
            TOUT VOIR
          </Button>
        </div>
        <div className="categorie-card">
          {memeProduit.map((produit) => (
            <Card key={produit.id} card={produit} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailsProduit;
