import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Agendamentos from "./pages/Agendamentos";
import Servicos from "./pages/Servicos";
import Estoque from "./pages/Estoque";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PerfilBarbeiro from "./pages/PerfilBarbeiro";
import PerfilCliente from "./pages/PerfilCliente";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agendamentos" element={<Agendamentos />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/estoque" element={<Estoque />} />
      <Route path="/login" element={<Login />} />
      <Route path="/perfil-barbeiro" element={<PerfilBarbeiro />} />
      <Route path="/perfil-cliente" element={<PerfilCliente />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
