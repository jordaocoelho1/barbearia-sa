import "./CardAcoes.css";

function CardAcoes() {
  return (
    <div className="card-acoes">
      <h3>⚡ Ações Rápidas</h3>
      <div className="botoes">
        <button onClick={() => alert("Criar Agendamento!")}>
          ➕ Criar Agendamento
        </button>
        <button onClick={() => alert("Gerenciar Estoque!")}>
          📦 Gerenciar Estoque
        </button>
        <button onClick={() => alert("Ver Relatórios!")}>📊 Relatórios</button>
        <button onClick={() => alert("Adicionar Cliente!")}>
          👥 Novo Cliente
        </button>
      </div>
    </div>
  );
}

export default CardAcoes;
