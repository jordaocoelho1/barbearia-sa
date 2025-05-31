import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { FaBars, FaTimes } from "react-icons/fa";
import "./AdminLayout.css";

function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAdmin } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!user || !isAdmin) {
      navigate("/login");
      return;
    }
  }, [user, isAdmin, navigate]);
  // Fechar o menu ao navegar
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  // Trava/destrava a rolagem do body quando o menu está aberto
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";

      // Adicionar listener para fechar ao clicar fora
      const handleClickOutside = (e) => {
        if (
          !e.target.closest(".sidebar") &&
          !e.target.closest(".toggle-sidebar")
        ) {
          setIsSidebarOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.body.style.overflow = "auto";
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsSidebarOpen(false);
    }
  };

  // Não renderiza nada enquanto verifica a autenticação
  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="admin-layout">
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={handleOverlayClick}></div>
      )}
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h1>⚡ Dashboard Pro</h1>
          <p>Painel Administrativo</p>
        </div>

        <nav className="sidebar-nav">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            📊 Dashboard
          </NavLink>

          <NavLink
            to="/admin/agendamentos"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            📅 Agendamentos
          </NavLink>

          <NavLink
            to="/admin/clientes"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            👥 Clientes
          </NavLink>

          <NavLink
            to="/admin/funcionarios"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            💇‍♂️ Funcionarios
          </NavLink>

          <NavLink
            to="/admin/servicos"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            ✂️ Serviços
          </NavLink>

          <NavLink
            to="/admin/estoque"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            📦 Estoque
          </NavLink>

          <NavLink
            to="/admin/financeiro"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            💰 Financeiro
          </NavLink>

          <NavLink
            to="/admin/relatorios"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            📈 Relatórios
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <NavLink to="/admin/configuracoes" className="nav-link">
            ⚙️ Configurações
          </NavLink>
          <button
            className="logout-btn"
            onClick={() => alert("Implementar logout")}
          >
            🚪 Sair
          </button>
        </div>
      </aside>
      <main className="admin-content">
        {" "}
        <button
          className="toggle-sidebar"
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="content-wrapper">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;
