import React from "react";
import "./Button.css";

export function Button({ children, onClick, type }) {
  return (
    <button className="button" onClick={onClick} type={type}>
      {children}

      <svg
        width="17"
        height="12"
        viewBox="0 0 17 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.00049 6.00049H15.0005" stroke="white" strokeWidth="1.5" />
        <path
          d="M9.99951 0.99853L14.9995 5.99902L9.99951 11.0005"
          stroke="white"
          strokeWidth="1.5"
        />
      </svg>
    </button>
  );
}
