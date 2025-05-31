import { useState, useEffect } from "react";
import { Navigate, Link, useLocation } from "react-router-dom";
import {
  FaBuilding,
  FaClock,
  FaBell,
  FaCog,
  FaShieldAlt,
} from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";
import "./Configuracoes.css";

// Componente de seção de configuração
const SecaoConfiguracao = ({ titulo, descricao, children }) => (
  <div>
    <h2 className="secao-titulo">{titulo}</h2>
    <p className="secao-descricao">{descricao}</p>
    {children}
  </div>
);

function Configuracoes() {
  const { user, isAdmin } = useAuth();
  const [secaoAtiva, setSecaoAtiva] = useState("dados-empresa");
  const location = useLocation();

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  const menuItems = [
    { id: "dados-empresa", titulo: "Dados da Empresa", icon: <FaBuilding /> },
    { id: "horarios", titulo: "Horários", icon: <FaClock /> },
    { id: "notificacoes", titulo: "Notificações", icon: <FaBell /> },
    { id: "sistema", titulo: "Sistema", icon: <FaCog /> },
    { id: "seguranca", titulo: "Segurança", icon: <FaShieldAlt /> },
  ];

  const renderConteudoSecao = () => {
    switch (secaoAtiva) {
      case "dados-empresa":
        return (
          <SecaoConfiguracao
            titulo="Dados da Empresa"
            descricao="Gerencie as informações básicas da sua barbearia."
          >
            {/* Implementar formulário de dados da empresa */}
          </SecaoConfiguracao>
        );
      case "horarios":
        return (
          <SecaoConfiguracao
            titulo="Horários de Funcionamento"
            descricao="Configure os horários de funcionamento da barbearia."
          >
            {/* Implementar configuração de horários */}
          </SecaoConfiguracao>
        );
      case "notificacoes":
        return (
          <SecaoConfiguracao
            titulo="Notificações"
            descricao="Gerencie as configurações de notificações do sistema."
          >
            {/* Implementar configurações de notificações */}
          </SecaoConfiguracao>
        );
      case "sistema":
        return (
          <SecaoConfiguracao
            titulo="Sistema"
            descricao="Configure as preferências gerais do sistema."
          >
            {/* Implementar configurações do sistema */}
          </SecaoConfiguracao>
        );
      case "seguranca":
        return (
          <SecaoConfiguracao
            titulo="Segurança"
            descricao="Gerencie as configurações de segurança e permissões."
          >
            {/* Implementar configurações de segurança */}
          </SecaoConfiguracao>
        );
      default:
        return null;
    }
  };

  return (
    <div className="configuracoes-container">
      <nav className="menu-configuracoes">
        <h2 className="menu-titulo">Configurações</h2>
        <ul className="menu-lista">
          {menuItems.map((item) => (
            <li key={item.id} className="menu-item">
              <a
                href={`#${item.id}`}
                className={`menu-link ${secaoAtiva === item.id ? "ativo" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setSecaoAtiva(item.id);
                }}
              >
                {item.icon}
                {item.titulo}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <main className="conteudo-configuracoes">{renderConteudoSecao()}</main>
    </div>
  );
}

export default Configuracoes;
