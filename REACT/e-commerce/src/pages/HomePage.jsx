import React from "react";
import { Categorie } from "../components/Categorie/Categorie";
import Hero from "../components/Hero/Hero";

const HomePage = () => {
  return (
    <main>
      <div className="container">
        <Hero />
        <Categorie />
      </div>
    </main>
  );
};

export default HomePage;
