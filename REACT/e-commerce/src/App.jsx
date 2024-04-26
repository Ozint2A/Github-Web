import "./reset.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Page404 from "./pages/Page404";
import ProduitsPage from "./pages/ProduitsPage";
import CategoriePage from "./pages/CategoriePage";
import { Navbar } from "./components/Navbar/Navbar";
import DetailsProduit from "./pages/DetailsProduit";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produits" element={<ProduitsPage />} />
        <Route path="/category/:category" element={<CategoriePage />} />
        <Route path="/produit/:id" element={<DetailsProduit />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
