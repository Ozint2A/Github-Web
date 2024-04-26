import { Button } from "./Button";
import Link from "./Link";
import "../styles/index.css";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <h1 className="h1">ToDO List</h1>
      <nav className="navbar">
        <ul>
          <li className="nav_links">
            <Link nom="Voir les tâches" to="/" />
          </li>
        </ul>
      </nav>
      <Button onClick={() => navigate("/tasks/create")}>
        + Créer une tache
      </Button>
    </header>
  );
}
