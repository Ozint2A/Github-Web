import "./App.css";

export function Navbar() {
  return (
    <nav>
      <ul className="nav-list">
        <li className="active">
          <a href="index.html" aria-current="page">
            Home
          </a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="blog.html">Blog</a>
        </li>
        <li>
          <a href="#">Another</a>
        </li>
        <li>
          <a href="#">Page</a>
        </li>
        <li>
          <a href="#">And another</a>
        </li>
      </ul>
    </nav>
  );
}
