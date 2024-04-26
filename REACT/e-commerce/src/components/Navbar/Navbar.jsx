import Liens from "../Liens/Liens";
import "./Navbar.css";

export function Navbar() {
  return (
    <div className="container">
      <header className="header">
        <nav className="navbar">
          <ul>
            <li className="nav_links">
              <Liens to="/">Accueil</Liens>
              <Liens to="/produits">Produits</Liens>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
