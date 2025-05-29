import { useState } from "react";

function AgendarAtendimento() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [servico, setServico] = useState("");
  const [data, setData] = useState("");

  const confirmarAgendamento = () => {
    alert(
      `Agendamento confirmado para ${nome}, serviço: ${servico}, data: ${data}`
    );
  };

  return (
    <div className="agendar-atendimento">
      <h1>📅 Agende seu Atendimento</h1>

      <label>Nome:</label>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Seu nome..."
      />

      <label>Telefone:</label>
      <input
        type="tel"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        placeholder="Seu telefone..."
      />

      <label>Serviço:</label>
      <select value={servico} onChange={(e) => setServico(e.target.value)}>
        <option value="">Escolha um serviço...</option>
        <option value="Corte Masculino">Corte Masculino</option>
        <option value="Barba Completa">Barba Completa</option>
        <option value="Corte + Barba">Corte + Barba</option>
      </select>

      <label>Data:</label>
      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <button onClick={confirmarAgendamento}>✅ Confirmar Agendamento</button>
    </div>
  );
}

export default AgendarAtendimento;
