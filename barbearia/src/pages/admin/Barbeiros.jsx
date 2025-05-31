import { useState } from "react";
import "./Funcionarios.css";

function Funcionarios() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cargoFilter, setCargoFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const handleNovoFuncionario = () => {
    // TODO: Implementar navegação para página de novo funcionário
    alert("Implementar criação de novo funcionário");
  };

  // Dados fictícios para demonstração
  const resumoFuncionarios = {
    total: 12,
    ativos: 10,
    producao: "R$ 15.400",
    comissao: "R$ 4.620",
  };

  // Lista de cargos para o filtro
  const cargos = [
    "Todos",
    "Barbeiro",
    "Cabeleireiro(a)",
    "Manicure",
    "Recepcionista",
    "Gerente",
  ];

  // Dados fictícios de funcionários
  const funcionarios = [
    {
      id: 1,
      nome: "João Silva",
      cargo: "Barbeiro",
      foto: "https://i.pravatar.cc/150?img=1",
      email: "joao.silva@email.com",
      telefone: "(85) 99999-9999",
      status: "ativo",
      atendimentos: 45,
      avaliacao: 4.8,
      producao: "R$ 3.500",
      comissao: "R$ 1.050",
    },
    {
      id: 2,
      nome: "Maria Santos",
      cargo: "Cabeleireira",
      foto: "https://i.pravatar.cc/150?img=2",
      email: "maria.santos@email.com",
      telefone: "(85) 98888-8888",
      status: "ferias",
      atendimentos: 38,
      avaliacao: 4.9,
      producao: "R$ 4.200",
      comissao: "R$ 1.260",
    },
    {
      id: 3,
      nome: "Carlos Lima",
      cargo: "Barbeiro",
      foto: "https://i.pravatar.cc/150?img=3",
      email: "carlos.lima@email.com",
      telefone: "(85) 97777-7777",
      status: "ativo",
      atendimentos: 42,
      avaliacao: 4.7,
      producao: "R$ 3.800",
      comissao: "R$ 1.140",
    },
    {
      id: 4,
      nome: "Ana Oliveira",
      cargo: "Manicure",
      foto: "https://i.pravatar.cc/150?img=4",
      email: "ana.oliveira@email.com",
      telefone: "(85) 96666-6666",
      status: "afastado",
      atendimentos: 25,
      avaliacao: 4.6,
      producao: "R$ 1.900",
      comissao: "R$ 570",
    },
    {
      id: 5,
      nome: "Pedro Santos",
      cargo: "Barbeiro",
      foto: "https://i.pravatar.cc/150?img=5",
      email: "pedro.santos@email.com",
      telefone: "(85) 95555-5555",
      status: "ativo",
      atendimentos: 40,
      avaliacao: 4.9,
      producao: "R$ 3.600",
      comissao: "R$ 1.080",
    },
  ];

  const handleEditar = (id) => {
    alert(`Editar funcionário ${id}`);
  };

  const handleHorarios = (id) => {
    alert(`Gerenciar horários do funcionário ${id}`);
  };

  return (
    <div className="funcionarios">
      {/* Cabeçalho da página */}
      <div className="page-header">
        <h1 className="page-title">Funcionários</h1>
        <button
          className="novo-funcionario-btn"
          onClick={handleNovoFuncionario}
        >
          ➕ Novo Funcionário
        </button>
      </div>

      {/* Cards de resumo */}
      <div className="cards-resumo">
        <div className="card total">
          <span className="card-titulo">Total de Funcionários</span>
          <span className="card-valor">{resumoFuncionarios.total}</span>
        </div>
        <div className="card ativos">
          <span className="card-titulo">Ativos</span>
          <span className="card-valor">{resumoFuncionarios.ativos}</span>
        </div>
        <div className="card producao">
          <span className="card-titulo">Produção do Mês</span>
          <span className="card-valor">{resumoFuncionarios.producao}</span>
        </div>
        <div className="card comissao">
          <span className="card-titulo">Comissões do Mês</span>
          <span className="card-valor">{resumoFuncionarios.comissao}</span>
        </div>
      </div>

      {/* Filtros */}
      <div className="filtros">
        <div className="campo-busca">
          <input
            type="text"
            placeholder="Buscar funcionário..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="campo-select">
          <select
            value={cargoFilter}
            onChange={(e) => setCargoFilter(e.target.value)}
          >
            <option value="">Cargo</option>
            {cargos.map((cargo) => (
              <option key={cargo} value={cargo}>
                {cargo}
              </option>
            ))}
          </select>
        </div>

        <div className="campo-select">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">Status</option>
            <option value="ativo">Ativo</option>
            <option value="ferias">Férias</option>
            <option value="afastado">Afastado</option>
          </select>
        </div>
      </div>

      {/* Tabela de Funcionários */}
      <div className="tabela-container">
        <table className="tabela-funcionarios">
          <thead>
            <tr>
              <th>Funcionário</th>
              <th>Contato</th>
              <th>Status</th>
              <th>Atendimentos</th>
              <th>Avaliação</th>
              <th>Produção</th>
              <th>Comissão</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {funcionarios.map((funcionario) => (
              <tr key={funcionario.id}>
                <td data-label="Funcionário">
                  <div className="avatar-container">
                    <img
                      src={funcionario.foto}
                      alt={funcionario.nome}
                      className="avatar"
                    />
                    <div className="funcionario-info">
                      <span className="funcionario-nome">
                        {funcionario.nome}
                      </span>
                      <span className="funcionario-cargo">
                        {funcionario.cargo}
                      </span>
                    </div>
                  </div>
                </td>
                <td data-label="Contato">
                  <div className="funcionario-info">
                    <span>{funcionario.telefone}</span>
                    <span className="funcionario-cargo">
                      {funcionario.email}
                    </span>
                  </div>
                </td>
                <td data-label="Status">
                  <span className={`status-badge status-${funcionario.status}`}>
                    {funcionario.status.charAt(0).toUpperCase() +
                      funcionario.status.slice(1)}
                  </span>
                </td>
                <td data-label="Atendimentos">
                  <div className="metricas">
                    <span className="metrica-valor">
                      {funcionario.atendimentos}
                    </span>
                    <span className="metrica-label">este mês</span>
                  </div>
                </td>
                <td data-label="Avaliação">
                  <div className="metricas">
                    <span className="metrica-valor">
                      ⭐ {funcionario.avaliacao}
                    </span>
                    <span className="metrica-label">média</span>
                  </div>
                </td>
                <td data-label="Produção">
                  <div className="metricas">
                    <span className="metrica-valor">
                      {funcionario.producao}
                    </span>
                    <span className="metrica-label">este mês</span>
                  </div>
                </td>
                <td data-label="Comissão">
                  <div className="metricas">
                    <span className="metrica-valor">
                      {funcionario.comissao}
                    </span>
                    <span className="metrica-label">este mês</span>
                  </div>
                </td>
                <td data-label="Ações">
                  <button
                    className="acoes-btn editar-btn"
                    onClick={() => handleEditar(funcionario.id)}
                  >
                    ✏️ Editar
                  </button>
                  <button
                    className="acoes-btn horarios-btn"
                    onClick={() => handleHorarios(funcionario.id)}
                  >
                    🕒 Horários
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Funcionarios;
