import React, { useState } from "react";
import "./Relatorios.css";

const mockRelatorios = [
  {
    id: 1,
    data: "01/05/2025",
    tipo: "Receita",
    descricao: "Corte de cabelo",
    valor: "R$ 50,00",
    responsavel: "João",
    status: "Pago",
  },
  {
    id: 2,
    data: "02/05/2025",
    tipo: "Despesa",
    descricao: "Compra de produtos",
    valor: "R$ 120,00",
    responsavel: "Maria",
    status: "Pago",
  },
  {
    id: 3,
    data: "03/05/2025",
    tipo: "Receita",
    descricao: "Barba",
    valor: "R$ 40,00",
    responsavel: "Carlos",
    status: "Pendente",
  },
  {
    id: 4,
    data: "04/05/2025",
    tipo: "Despesa",
    descricao: "Conta de luz",
    valor: "R$ 200,00",
    responsavel: "Admin",
    status: "Cancelado",
  },
];

const resumo = {
  vendas: "R$ 5.000,00",
  despesas: "R$ 2.000,00",
  lucro: "R$ 3.000,00",
  clientes: 120,
};

function Relatorios() {
  const [filtros, setFiltros] = useState({
    dataInicio: "",
    dataFim: "",
    tipo: "todos",
  });

  return (
    <div className="relatorios-container">
      <div className="metricas-grid">
        <div className="metrica-card">
          <div className="metrica-header">
            <div className="metrica-icon icon-receita">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <div className="metrica-info">
              <h3>Receita Total</h3>
              <div className="metrica-valor">R$ 15.750,00</div>
              <div className="metrica-comparacao comparacao-positiva">
                <i className="fas fa-arrow-up"></i>
                <span>12% vs. mês anterior</span>
              </div>
            </div>
          </div>
        </div>

        <div className="metrica-card">
          <div className="metrica-header">
            <div className="metrica-icon icon-agendamentos">
              <i className="fas fa-calendar"></i>
            </div>
            <div className="metrica-info">
              <h3>Agendamentos</h3>
              <div className="metrica-valor">284</div>
              <div className="metrica-comparacao comparacao-positiva">
                <i className="fas fa-arrow-up"></i>
                <span>8% vs. mês anterior</span>
              </div>
            </div>
          </div>
        </div>

        <div className="metrica-card">
          <div className="metrica-header">
            <div className="metrica-icon icon-clientes">
              <i className="fas fa-users"></i>
            </div>
            <div className="metrica-info">
              <h3>Novos Clientes</h3>
              <div className="metrica-valor">45</div>
              <div className="metrica-comparacao comparacao-positiva">
                <i className="fas fa-arrow-up"></i>
                <span>15% vs. mês anterior</span>
              </div>
            </div>
          </div>
        </div>

        <div className="metrica-card">
          <div className="metrica-header">
            <div className="metrica-icon icon-servicos">
              <i className="fas fa-cut"></i>
            </div>
            <div className="metrica-info">
              <h3>Serviços Realizados</h3>
              <div className="metrica-valor">312</div>
              <div className="metrica-comparacao comparacao-negativa">
                <i className="fas fa-arrow-down"></i>
                <span>3% vs. mês anterior</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="graficos-grid">
        <div className="grafico-card">
          <div className="grafico-header">
            <h3 className="grafico-titulo">Receita Mensal</h3>
            <div className="grafico-filtros">
              <button className="filtro-btn ativo">7 dias</button>
              <button className="filtro-btn">30 dias</button>
              <button className="filtro-btn">12 meses</button>
            </div>
          </div>
          <div className="grafico-container">
            {/* Aqui vai o componente de gráfico */}
          </div>
        </div>

        <div className="grafico-card">
          <div className="grafico-header">
            <h3 className="grafico-titulo">Serviços mais Populares</h3>
            <div className="grafico-filtros">
              <button className="filtro-btn ativo">Mês</button>
              <button className="filtro-btn">Ano</button>
            </div>
          </div>
          <div className="grafico-container">
            {/* Aqui vai o componente de gráfico */}
          </div>
        </div>
      </div>

      <div className="filtros">
        <input
          type="date"
          value={filtros.dataInicio}
          onChange={(e) =>
            setFiltros({ ...filtros, dataInicio: e.target.value })
          }
          placeholder="Data inicial"
        />
        <input
          type="date"
          value={filtros.dataFim}
          onChange={(e) => setFiltros({ ...filtros, dataFim: e.target.value })}
          placeholder="Data final"
        />
        <select
          value={filtros.tipo}
          onChange={(e) => setFiltros({ ...filtros, tipo: e.target.value })}
        >
          <option value="todos">Todos os Tipos</option>
          <option value="Receita">Receita</option>
          <option value="Despesa">Despesa</option>
          <option value="Lucro">Lucro</option>
          <option value="Clientes">Clientes</option>
        </select>
      </div>

      <div className="tabela-container">
        <table className="tabela-relatorios">
          <thead>
            <tr>
              <th>Data</th>
              <th>Tipo</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Responsável</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {mockRelatorios.map((r) => (
              <tr key={r.id}>
                <td data-label="Data">{r.data}</td>
                <td data-label="Tipo">{r.tipo}</td>
                <td data-label="Descrição">{r.descricao}</td>
                <td data-label="Valor">{r.valor}</td>
                <td data-label="Responsável">{r.responsavel}</td>
                <td data-label="Status">
                  <span
                    className={`status-badge status-${r.status.toLowerCase()}`}
                  >
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Relatorios;
