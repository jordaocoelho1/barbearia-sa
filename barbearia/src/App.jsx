import { Routes, Route } from "react-router-dom";
import AdminLayout from "./components/layouts/AdminLayout";
import { AuthProvider } from "./contexts/AuthContext";
import RequireAuth from "./components/RequireAuth";

// Importações das páginas públicas
import Index from "./pages/Index";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import NotFound from "./pages/NotFound";
import PerfilBarbeiro from "./pages/PerfilBarbeiro";
import PerfilCliente from "./pages/PerfilCliente";
import AgendarAtendimento from "./pages/AgendarAtendimento";
import Configuracoes from "./pages/Configuracoes";

// Importações da área administrativa
import Barbeiros from "./pages/admin/Barbeiros";
import Clientes from "./pages/admin/Clientes";
import Estoque from "./pages/admin/Estoque";
import Financeiro from "./pages/admin/Financeiro";
import GestaoAtendimentos from "./pages/admin/GestaoAtendimentos";
import Relatorios from "./pages/admin/Relatorios";
import Servicos from "./pages/admin/Servicos";
import Funcionarios from "./pages/admin/Barbeiros";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Rotas de autenticação */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        {/* Rotas públicas/cliente */}
        <Route path="/" element={<Index />} />{" "}
        <Route path="/perfil-barbeiro" element={<PerfilBarbeiro />} />
        <Route path="/perfil-cliente" element={<PerfilCliente />} />
        <Route path="/agendar" element={<AgendarAtendimento />} />
        {/* Rotas administrativas com layout */}{" "}
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <AdminLayout />
            </RequireAuth>
          }
        >
          <Route index element={<Index />} />
          <Route path="funcionarios" element={<Funcionarios />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="estoque" element={<Estoque />} />
          <Route path="financeiro" element={<Financeiro />} />
          <Route path="agendamentos" element={<GestaoAtendimentos />} />
          <Route path="relatorios" element={<Relatorios />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="configuracoes" element={<Configuracoes />} />
        </Route>
        {/* Rota 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
