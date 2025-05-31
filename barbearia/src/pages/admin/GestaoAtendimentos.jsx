import { useState } from "react";
import "./GestaoAtendimentos.css";

function GestaoAtendimentos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [barbeiroFilter, setBarbeiroFilter] = useState("");

  const handleNovoAgendamento = () => {
    // TODO: Implementar navegação para página de novo agendamento
    alert("Implementar criação de novo agendamento");
  };

  // Dados fictícios para demonstração
  const resumoAgendamentos = {
    total: 150,
    confirmados: 95,
    pendentes: 45,
    cancelados: 10,
  };

  // Lista de barbeiros fictícia para o filtro
  const barbeiros = [
    { id: 1, nome: "João Silva" },
    { id: 2, nome: "Carlos Santos" },
    { id: 3, nome: "Pedro Oliveira" },
  ];

  // Dados fictícios de agendamentos
  const agendamentos = [
    {
      id: 1,
      cliente: "Maria Silva",
      servico: "Corte Feminino",
      barbeiro: "João Silva",
      data: "2024-02-20",
      horario: "09:00",
      status: "confirmado",
      valor: "R$ 50,00",
    },
    {
      id: 2,
      cliente: "José Santos",
      servico: "Corte + Barba",
      barbeiro: "Carlos Santos",
      data: "2024-02-20",
      horario: "10:00",
      status: "pendente",
      valor: "R$ 70,00",
    },
    {
      id: 3,
      cliente: "Ana Oliveira",
      servico: "Corte Feminino",
      barbeiro: "Pedro Oliveira",
      data: "2024-02-20",
      horario: "11:00",
      status: "cancelado",
      valor: "R$ 50,00",
    },
    {
      id: 4,
      cliente: "Carlos Mendes",
      servico: "Barba",
      barbeiro: "João Silva",
      data: "2024-02-20",
      horario: "14:00",
      status: "confirmado",
      valor: "R$ 35,00",
    },
    {
      id: 5,
      cliente: "Paulo Roberto",
      servico: "Corte Masculino",
      barbeiro: "Carlos Santos",
      data: "2024-02-20",
      horario: "15:00",
      status: "pendente",
      valor: "R$ 40,00",
    },
  ];

  const handleEditar = (id) => {
    alert(`Editar agendamento ${id}`);
  };

  const handleExcluir = (id) => {
    alert(`Excluir agendamento ${id}`);
  };

  // Formatar data para exibição
  const formatarData = (data) => {
    return new Date(data).toLocaleDateString("pt-BR");
  };

  return (
    <div className="gestao-atendimentos">
      {/* Cabeçalho da página */}
      <div className="page-header">
        <h1 className="page-title">Gestão de Agendamentos</h1>
        <button
          className="novo-agendamento-btn"
          onClick={handleNovoAgendamento}
        >
          ➕ Novo Agendamento
        </button>
      </div>

      {/* Cards de resumo */}
      <div className="cards-resumo">
        <div className="card total">
          <span className="card-titulo">Total de Agendamentos</span>
          <span className="card-valor">{resumoAgendamentos.total}</span>
        </div>
        <div className="card confirmados">
          <span className="card-titulo">Confirmados</span>
          <span className="card-valor">{resumoAgendamentos.confirmados}</span>
        </div>
        <div className="card pendentes">
          <span className="card-titulo">Pendentes</span>
          <span className="card-valor">{resumoAgendamentos.pendentes}</span>
        </div>
        <div className="card cancelados">
          <span className="card-titulo">Cancelados</span>
          <span className="card-valor">{resumoAgendamentos.cancelados}</span>
        </div>
      </div>

      {/* Filtros */}
      <div className="filtros">
        <div className="campo-busca">
          <input
            type="text"
            placeholder="Buscar agendamento..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="campo-select">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">Status</option>
            <option value="confirmado">Confirmado</option>
            <option value="pendente">Pendente</option>
            <option value="cancelado">Cancelado</option>
          </select>
        </div>

        <div className="campo-select">
          <select
            value={barbeiroFilter}
            onChange={(e) => setBarbeiroFilter(e.target.value)}
          >
            <option value="">Barbeiro</option>
            {barbeiros.map((barbeiro) => (
              <option key={barbeiro.id} value={barbeiro.id}>
                {barbeiro.nome}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tabela de Agendamentos */}
      <div className="tabela-container">
        <table className="tabela-agendamentos">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Serviço</th>
              <th>Barbeiro</th>
              <th>Data</th>
              <th>Horário</th>
              <th>Status</th>
              <th>Valor</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {agendamentos.map((agendamento) => (
              <tr key={agendamento.id}>
                <td data-label="Cliente">{agendamento.cliente}</td>
                <td data-label="Serviço">{agendamento.servico}</td>
                <td data-label="Barbeiro">{agendamento.barbeiro}</td>
                <td data-label="Data">{formatarData(agendamento.data)}</td>
                <td data-label="Horário">{agendamento.horario}</td>
                <td data-label="Status">
                  <span className={`status-badge status-${agendamento.status}`}>
                    {agendamento.status.charAt(0).toUpperCase() +
                      agendamento.status.slice(1)}
                  </span>
                </td>
                <td data-label="Valor">{agendamento.valor}</td>
                <td data-label="Ações">
                  <button
                    className="acoes-btn editar-btn"
                    onClick={() => handleEditar(agendamento.id)}
                  >
                    ✏️ Editar
                  </button>
                  <button
                    className="acoes-btn excluir-btn"
                    onClick={() => handleExcluir(agendamento.id)}
                  >
                    🗑️ Excluir
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

export default GestaoAtendimentos;
