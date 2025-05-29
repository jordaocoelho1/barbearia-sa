import { useState, useEffect } from "react";
import "./CardProximosAgendamentos.css"; // Importando o CSS para estilização

function CardProximosAgendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    // Simulação de agendamentos próximos
    const agendamentosFicticios = [
      {
        id: 1,
        cliente: "João Silva",
        servico: "Corte + Barba",
        horario: "14:00",
      },
      {
        id: 2,
        cliente: "Maria Oliveira",
        servico: "Corte Feminino",
        horario: "14:30",
      },
      {
        id: 3,
        cliente: "Carlos Santos",
        servico: "Barba Modelada",
        horario: "15:00",
      },
    ];

    setAgendamentos(agendamentosFicticios);
  }, []);

  return (
    <div className="card-agendamentos">
      <h3>🔜 Próximos Agendamentos</h3>
      <ul>
        {agendamentos.map((agendamento) => (
          <li key={agendamento.id}>
            <strong>{agendamento.cliente}</strong> - {agendamento.servico} - 🕒{" "}
            {agendamento.horario}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardProximosAgendamentos;
