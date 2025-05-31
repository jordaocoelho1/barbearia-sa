import { Link } from "react-router-dom";
import notFoundImage from "../components/ui/404.png";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found-container">
      <img
        src={notFoundImage}
        alt="Página não encontrada"
        className="not-found-image"
      />
      <h1 className="not-found-title">Página não encontrada</h1>
      <p className="not-found-text">
        Desculpe, a página que você está procurando não existe.
      </p>
      <Link to="/" className="back-home-button">
        Voltar para a página inicial
      </Link>
    </div>
  );
}

export default NotFound;
