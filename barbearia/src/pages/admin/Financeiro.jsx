import React from "react";
import "./Financeiro.css";

const mockTransacoes = [
  {
    id: 1,
    data: "30/05/2025",
    tipo: "Receita",
    descricao: "Corte de cabelo",
    categoria: "Serviços",
    metodo: "Dinheiro",
    valor: 50.0,
    status: "Pago",
  },
  {
    id: 2,
    data: "30/05/2025",
    tipo: "Despesa",
    descricao: "Compra de produtos",
    categoria: "Estoque",
    metodo: "Cartão",
    valor: 120.0,
    status: "Pago",
  },
  {
    id: 3,
    data: "30/05/2025",
    tipo: "Receita",
    descricao: "Barba",
    categoria: "Serviços",
    metodo: "Pix",
    valor: 40.0,
    status: "Pendente",
  },
  {
    id: 4,
    data: "30/05/2025",
    tipo: "Despesa",
    descricao: "Conta de luz",
    categoria: "Despesas Fixas",
    metodo: "Boleto",
    valor: 200.0,
    status: "Cancelado",
  },
];

const resumo = {
  receitaMes: "R$ 2.500,00",
  despesaMes: "R$ 1.200,00",
  lucroLiquido: "R$ 1.300,00",
  transacoesDia: 4,
};

function Financeiro() {
  const handleDetalhes = (id) => {
    console.log(`Ver detalhes da transação ${id}`);
    // TODO: Implementar visualização detalhada da transação
  };

  return (
    <div className="financeiro-container">
      <div className="page-header">
        <h1 className="page-title">💰 Financeiro</h1>
        <button className="nova-transacao-btn">
          <span>+</span> Nova Transação
        </button>
      </div>

      <div className="cards-resumo">
        <div className="card receita">
          <span className="card-titulo">Receita do Mês</span>
          <span className="card-valor">{resumo.receitaMes}</span>
        </div>
        <div className="card despesa">
          <span className="card-titulo">Despesa do Mês</span>
          <span className="card-valor">{resumo.despesaMes}</span>
        </div>
        <div className="card lucro">
          <span className="card-titulo">Lucro Líquido</span>
          <span className="card-valor">{resumo.lucroLiquido}</span>
        </div>
        <div className="card transacoes">
          <span className="card-titulo">Transações do Dia</span>
          <span className="card-valor">{resumo.transacoesDia}</span>
        </div>
      </div>

      <div className="transacoes-grid">
        {mockTransacoes.map((transacao, index) => (
          <div key={index} className="transacao-card">
            <div className="transacao-header">
              <span className="transacao-data">{transacao.data}</span>
              <span
                className={`transacao-tipo tipo-${transacao.tipo.toLowerCase()}`}
              >
                {transacao.tipo}
              </span>
            </div>

            <div className="transacao-info">
              <div className="transacao-item">
                <span className="transacao-label">Descrição</span>
                <span className="transacao-valor">{transacao.descricao}</span>
              </div>

              <div className="transacao-item">
                <span className="transacao-label">Categoria</span>
                <span className="transacao-valor">{transacao.categoria}</span>
              </div>

              <div className="transacao-item">
                <span className="transacao-label">Valor</span>
                <span
                  className={`transacao-valor valor-${transacao.tipo.toLowerCase()}`}
                >
                  R$ {transacao.valor.toFixed(2)}
                </span>
              </div>

              <div className="transacao-item">
                <span className="transacao-label">Método</span>
                <span className="transacao-valor">{transacao.metodo}</span>
              </div>

              <div className="transacao-item">
                <span className="transacao-label">Status</span>
                <span
                  className={`status-badge status-${transacao.status.toLowerCase()}`}
                >
                  {transacao.status}
                </span>
              </div>
            </div>

            <div className="transacao-acoes">
              <button
                className="transacao-btn btn-detalhes"
                onClick={() => handleDetalhes(transacao.id)}
              >
                Ver Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Financeiro;
