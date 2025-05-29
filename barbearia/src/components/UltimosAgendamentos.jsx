import { useEffect, useState } from "react";
import "./UltimosAgendamentos.css"; // Estilos específicos para o componente
function UltimosAgendamentos() {
  const agendamentos = [
    {
      id: 1,
      cliente_nome: "João Silva",
      servico_nome: "Corte + Barba",
      data_horario: "10/06 - 14h",
    },
    {
      id: 2,
      cliente_nome: "Maria Oliveira",
      servico_nome: "Corte Feminino",
      data_horario: "10/06 - 15h",
    },
    {
      id: 3,
      cliente_nome: "Carlos Santos",
      servico_nome: "Barba Modelada",
      data_horario: "10/06 - 16h",
    },
  ];

  return (
    <div className="ultimos-agendamentos">
      <h2>Últimos Agendamentos 📅</h2>
      <ul>
        {agendamentos.map((agendamento) => (
          <li key={agendamento.id}>
            <strong>{agendamento.cliente_nome}</strong> -{" "}
            {agendamento.servico_nome} - {agendamento.data_horario}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UltimosAgendamentos;
