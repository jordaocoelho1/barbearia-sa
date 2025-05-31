import React from "react";
import "./Funcionarios.css";

const mockFuncionarios = [
  {
    id: 1,
    nome: "João Silva",
    cargo: "Barbeiro Senior",
    status: "Ativo",
    email: "joao.silva@email.com",
    telefone: "(11) 99999-9999",
    dataAdmissao: "15/03/2023",
    especialidades: ["Barba", "Corte Masculino", "Coloração"],
    avatar: null,
  },
  // ... mais funcionários
];

function Funcionarios() {
  return (
    <div className="funcionarios-container">
      <div className="page-header">
        <h1>👥 Funcionários</h1>
        <button className="btn-adicionar">+ Adicionar Funcionário</button>
      </div>

      <div className="funcionarios-grid">
        {mockFuncionarios.map((funcionario, index) => (
          <div key={index} className="funcionario-card">
            <div className="funcionario-header">
              <div className="funcionario-avatar">
                {funcionario.avatar ? (
                  <img src={funcionario.avatar} alt={funcionario.nome} />
                ) : (
                  funcionario.nome.charAt(0)
                )}
              </div>

              <div className="funcionario-nome-cargo">
                <h3 className="funcionario-nome">{funcionario.nome}</h3>
                <span className="funcionario-cargo">{funcionario.cargo}</span>
              </div>

              <span
                className={`funcionario-status status-${funcionario.status.toLowerCase()}`}
              >
                {funcionario.status}
              </span>
            </div>

            <div className="funcionario-info">
              <div className="info-item">
                <span className="info-label">Email</span>
                <span className="info-valor">{funcionario.email}</span>
              </div>

              <div className="info-item">
                <span className="info-label">Telefone</span>
                <span className="info-valor">{funcionario.telefone}</span>
              </div>

              <div className="info-item">
                <span className="info-label">Data de Admissão</span>
                <span className="info-valor">{funcionario.dataAdmissao}</span>
              </div>
            </div>

            <div className="funcionario-especialidades">
              {funcionario.especialidades.map((esp, idx) => (
                <span key={idx} className="especialidade-tag">
                  {esp}
                </span>
              ))}
            </div>

            <div className="funcionario-acoes">
              <button className="funcionario-btn btn-editar">Editar</button>
              <button className="funcionario-btn btn-excluir">Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Funcionarios;
