import "../styles/index.css";
import { Link as Lien } from "react-router-dom";

export default function Link({ onClick, color, nom, to }) {
  return (
    <Lien
      to={to}
      onClick={onClick}
      className={color === "error" ? "colorError" : "colorPrimary"}
    >
      {nom}
    </Lien>
  );
}
