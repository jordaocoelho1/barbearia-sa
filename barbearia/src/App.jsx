import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Servicos from "./pages/Servicos";
import Estoque from "./pages/Estoque";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PerfilBarbeiro from "./pages/PerfilBarbeiro";
import PerfilCliente from "./pages/PerfilCliente";
import AgendarAtendimento from "./pages/AgendarAtendimento";
import GestaoAtendimentos from "./pages/GestaoAtendimentos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/gestao-agendamentos" element={<GestaoAtendimentos />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/estoque" element={<Estoque />} />
      <Route path="/login" element={<Login />} />
      <Route path="/perfil-barbeiro" element={<PerfilBarbeiro />} />
      <Route path="/perfil-cliente" element={<PerfilCliente />} />
      <Route path="/agendar" element={<AgendarAtendimento />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
