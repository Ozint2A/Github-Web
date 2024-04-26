import "../styles/index.css";
import React from "react";

export function Button({ children, onClick, type }) {
  return (
    <button className="button" onClick={onClick} type={type}>
      {children}
    </button>
  );
}
