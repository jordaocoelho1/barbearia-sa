import { useState, useEffect } from "react";

function PerfilBarbeiro() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    fetch("/api/agendamentos-barbeiro") // API que busca agendamentos do barbeiro logado
      .then((res) => res.json())
      .then((data) => setAgendamentos(data));
  }, []);

  return (
    <div>
      <h1>Bem-vindo ao seu painel, Barbeiro! 💈</h1>
      <h2>Seus Agendamentos:</h2>
      <ul>
        {agendamentos.map((agendamento) => (
          <li key={agendamento.id}>
            Cliente: {agendamento.cliente_nome} - Serviço:{" "}
            {agendamento.servico_nome} - Data: {agendamento.data_horario}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PerfilBarbeiro;
