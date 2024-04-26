import React, { useState } from "react";

const BouttonCategorie = ({ title, onClick, active }) => {
  return (
    <button onClick={onClick} className={active ? "item_clic" : "item"}>
      {title}
    </button>
  );
};

export default BouttonCategorie;
