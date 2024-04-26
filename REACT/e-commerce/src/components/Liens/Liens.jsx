import "./Liens.css";
import { Link as Lien } from "react-router-dom";

export default function Liens({ onClick, color, children, to }) {
  return (
    <Lien to={to} className={color === "item" ? "colorItem" : "colorPrimary"}>
      {children}
    </Lien>
  );
}
