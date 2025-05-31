import React from "react";
import "./PerfilCliente.css";

// Mock de dados do cliente
const clienteData = {
  nome: "João Silva",
  email: "joao.silva@email.com",
  telefone: "(11) 98765-4321",
  cpf: "123.456.789-00",
  dataNascimento: "15/03/1990",
  endereco: "Rua Example, 123",
  pontos: 750,
  pontosProximoNivel: 1000,
  nivel: "Prata",
};

// Mock de promoções disponíveis
const promocoes = [
  {
    icon: "💇",
    titulo: "Corte Grátis",
    descricao: "Complete 10 cortes e ganhe 1 grátis",
  },
  {
    icon: "🎁",
    titulo: "Bônus de Aniversário",
    descricao: "Ganhe pontos em dobro no mês do seu aniversário",
  },
  {
    icon: "⭐",
    titulo: "Cliente VIP",
    descricao: "Acumule 2000 pontos e torne-se VIP",
  },
];

// Mock de agendamentos recentes
const ultimosAgendamentos = [
  {
    id: 1,
    data: "30/05/2025",
    servico: "Corte de Cabelo",
    profissional: "Carlos",
    valor: "R$ 50,00",
    status: "Finalizado",
  },
  {
    id: 2,
    data: "15/05/2025",
    servico: "Barba",
    profissional: "André",
    valor: "R$ 35,00",
    status: "Finalizado",
  },
  {
    id: 3,
    data: "01/06/2025",
    servico: "Corte + Barba",
    profissional: "Carlos",
    valor: "R$ 80,00",
    status: "Agendado",
  },
  {
    id: 4,
    data: "20/04/2025",
    servico: "Corte de Cabelo",
    profissional: "André",
    valor: "R$ 50,00",
    status: "Finalizado",
  },
  {
    id: 5,
    data: "05/04/2025",
    servico: "Barba",
    profissional: "Carlos",
    valor: "R$ 35,00",
    status: "Cancelado",
  },
];

function PerfilCliente() {
  // Calcula a porcentagem de progresso para o próximo nível
  const progressoFidelidade =
    (clienteData.pontos / clienteData.pontosProximoNivel) * 100;

  return (
    <div className="perfil-cliente">
      <div className="perfil-grid">
        {/* Container de Dados do Cliente */}
        <div className="dados-container">
          <div className="dados-header">
            <div className="avatar">👤</div>
            <div>
              <h2 className="dados-nome">{clienteData.nome}</h2>
              <p className="dados-email">{clienteData.email}</p>
            </div>
          </div>
          <div className="dados-info">
            <div className="info-item">
              <div className="info-label">Telefone</div>
              <div className="info-valor">{clienteData.telefone}</div>
            </div>
            <div className="info-item">
              <div className="info-label">CPF</div>
              <div className="info-valor">{clienteData.cpf}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Data de Nascimento</div>
              <div className="info-valor">{clienteData.dataNascimento}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Endereço</div>
              <div className="info-valor">{clienteData.endereco}</div>
            </div>
          </div>
        </div>

        {/* Container de Fidelidade */}
        <div className="fidelidade-container">
          <div className="fidelidade-header">
            <h3 className="fidelidade-titulo">Programa de Fidelidade</h3>
            <span className="pontos-badge">{clienteData.pontos} pontos</span>
          </div>

          <div className="progresso-container">
            <div className="progresso-info">
              <span>Nível {clienteData.nivel}</span>
              <span>
                {clienteData.pontos}/{clienteData.pontosProximoNivel} pontos
              </span>
            </div>
            <div className="progresso-barra">
              <div
                className="progresso-valor"
                style={{ width: `${progressoFidelidade}%` }}
              ></div>
            </div>
          </div>

          <div className="promocoes">
            {promocoes.map((promo, index) => (
              <div key={index} className="promocao-item">
                <span className="promocao-icon">{promo.icon}</span>
                <div className="promocao-info">
                  <h4>{promo.titulo}</h4>
                  <p>{promo.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Container de Agendamentos */}
      <div className="agendamentos-container">
        <div className="agendamentos-header">
          <h3 className="agendamentos-titulo">Últimos Agendamentos</h3>
          <a href="#" className="ver-todos">
            Ver todos
          </a>
        </div>

        <div className="container-historico">
          <div className="titulo-container">
            <h2>Histórico de Agendamentos</h2>
            <button className="btn-ver-todos">Ver todos</button>
          </div>

          <div className="agendamentos-grid">
            {ultimosAgendamentos.map((agendamento, index) => (
              <div key={index} className="agendamento-card">
                <div className="agendamento-data">{agendamento.data}</div>

                <div className="agendamento-info">
                  <div className="agendamento-item">
                    <span className="agendamento-label">Serviço</span>
                    <span className="agendamento-valor">
                      {agendamento.servico}
                    </span>
                  </div>

                  <div className="agendamento-item">
                    <span className="agendamento-label">Profissional</span>
                    <span className="agendamento-valor">
                      {agendamento.profissional}
                    </span>
                  </div>

                  <div className="agendamento-item">
                    <span className="agendamento-label">Horário</span>
                    <span className="agendamento-valor">
                      {agendamento.horario}
                    </span>
                  </div>

                  <div className="agendamento-item">
                    <span className="agendamento-label">Status</span>
                    <span
                      className={`status ${agendamento.status.toLowerCase()}`}
                    >
                      {agendamento.status}
                    </span>
                  </div>
                </div>

                <div className="agendamento-acoes">
                  <button className="agendamento-btn btn-reagendar">
                    Reagendar
                  </button>
                  <button className="agendamento-btn btn-cancelar">
                    Cancelar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilCliente;
