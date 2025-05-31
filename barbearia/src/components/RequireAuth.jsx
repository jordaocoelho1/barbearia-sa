import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function RequireAuth({ children }) {
  const { user, isAdmin } = useAuth();
  const location = useLocation();

  if (!user) {
    // Redireciona para o login preservando a rota pretendida
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!isAdmin) {
    // Se o usuário está logado mas não é admin, redireciona para a home
    return <Navigate to="/" replace />;
  }

  return children;
}

export default RequireAuth;
