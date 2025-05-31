import { useState } from "react";
import "./PerfilBarbeiro.css";

function PerfilBarbeiro() {
  const [dataFiltro, setDataFiltro] = useState(
    new Date().toISOString().split("T")[0]
  );

  // Dados mockados para demonstração
  const resumoDia = {
    total: 8,
    confirmados: 5,
    pendentes: 3,
  };

  const faturamento = {
    dia: "R$ 450,00",
    semana: "R$ 2.800,00",
    mes: "R$ 12.500,00",
  };

  const mockAgendamentos = [
    {
      id: 1,
      horario: "09:00",
      cliente: "João Silva",
      servico: "Corte + Barba",
      valor: "R$ 75,00",
      status: "confirmado",
      telefone: "(85) 99999-9999",
    },
    {
      id: 2,
      horario: "10:30",
      cliente: "Pedro Santos",
      servico: "Corte Masculino",
      valor: "R$ 45,00",
      status: "pendente",
      telefone: "(85) 98888-8888",
    },
    {
      id: 3,
      horario: "14:00",
      cliente: "Carlos Oliveira",
      servico: "Barba",
      valor: "R$ 35,00",
      status: "confirmado",
      telefone: "(85) 97777-7777",
    },
  ];

  const handleConfirmar = (id) => {
    console.log(`Confirmar agendamento ${id}`);
    // TODO: Implementar confirmação
  };

  const handleCancelar = (id) => {
    console.log(`Cancelar agendamento ${id}`);
    // TODO: Implementar cancelamento
  };

  return (
    <div className="perfil-barbeiro">
      <div className="perfil-grid">
        {/* Card de Resumo do Dia */}
        <div className="resumo-container">
          <h2 className="resumo-titulo">Resumo do Dia</h2>
          <div className="resumo-grid">
            <div className="resumo-item">
              <div className="resumo-valor">{resumoDia.total}</div>
              <div className="resumo-label">Total</div>
            </div>
            <div className="resumo-item">
              <div className="resumo-valor">{resumoDia.confirmados}</div>
              <div className="resumo-label">Confirmados</div>
            </div>
            <div className="resumo-item">
              <div className="resumo-valor">{resumoDia.pendentes}</div>
              <div className="resumo-label">Pendentes</div>
            </div>
          </div>
        </div>

        {/* Card de Faturamento */}
        <div className="faturamento-container">
          <h2 className="faturamento-titulo">Resumo de Faturamento</h2>
          <div className="faturamento-grid">
            <div className="faturamento-item">
              <div className="faturamento-valor">{faturamento.dia}</div>
              <div className="faturamento-label">Hoje</div>
            </div>
            <div className="faturamento-item">
              <div className="faturamento-valor">{faturamento.semana}</div>
              <div className="faturamento-label">Esta Semana</div>
            </div>
            <div className="faturamento-item">
              <div className="faturamento-valor">{faturamento.mes}</div>
              <div className="faturamento-label">Este Mês</div>
            </div>
          </div>
        </div>
      </div>

      {/* Container de Agendamentos */}
      <div className="agendamentos-container">
        <div className="agendamentos-header">
          <h2 className="agendamentos-titulo">Agendamentos</h2>
          <input
            type="date"
            className="filtro-data"
            value={dataFiltro}
            onChange={(e) => setDataFiltro(e.target.value)}
          />
        </div>

        <div className="agendamentos-grid">
          {mockAgendamentos.map((agendamento) => (
            <div key={agendamento.id} className="agendamento-card">
              <div className="agendamento-horario">{agendamento.horario}</div>

              <div className="agendamento-info">
                <div className="agendamento-item">
                  <span className="agendamento-label">Cliente</span>
                  <span className="agendamento-valor">
                    {agendamento.cliente}
                  </span>
                </div>

                <div className="agendamento-item">
                  <span className="agendamento-label">Serviço</span>
                  <span className="agendamento-valor">
                    {agendamento.servico}
                  </span>
                </div>

                <div className="agendamento-item">
                  <span className="agendamento-label">Valor</span>
                  <span className="agendamento-valor">{agendamento.valor}</span>
                </div>

                <div className="agendamento-item">
                  <span className="agendamento-label">Telefone</span>
                  <span className="agendamento-valor">
                    {agendamento.telefone}
                  </span>
                </div>

                <div className="agendamento-item">
                  <span className="agendamento-label">Status</span>
                  <span className={`status-badge status-${agendamento.status}`}>
                    {agendamento.status.charAt(0).toUpperCase() +
                      agendamento.status.slice(1)}
                  </span>
                </div>
              </div>

              <div className="agendamento-acoes">
                {agendamento.status === "pendente" && (
                  <button
                    className="agendamento-btn btn-confirmar"
                    onClick={() => handleConfirmar(agendamento.id)}
                  >
                    Confirmar
                  </button>
                )}
                <button
                  className="agendamento-btn btn-cancelar"
                  onClick={() => handleCancelar(agendamento.id)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PerfilBarbeiro;
