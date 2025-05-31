import { useState } from "react";
import "./Estoque.css";

function Estoque() {
  // Mock data para produtos em estoque
  const [produtos] = useState([
    {
      id: 1,
      nome: "Shampoo Profissional",
      categoria: "Cabelo",
      preco: "R$ 45,00",
      quantidade: 15,
      estoqueMinimo: 20,
      icon: "🧴",
    },
    {
      id: 2,
      nome: "Gel Modelador",
      categoria: "Finalização",
      preco: "R$ 25,00",
      quantidade: 8,
      estoqueMinimo: 10,
      icon: "💈",
    },
    {
      id: 3,
      nome: "Máquina de Corte",
      categoria: "Equipamentos",
      preco: "R$ 250,00",
      quantidade: 5,
      estoqueMinimo: 3,
      icon: "✂️",
    },
    {
      id: 4,
      nome: "Pente Profissional",
      categoria: "Acessórios",
      preco: "R$ 15,00",
      quantidade: 25,
      estoqueMinimo: 15,
      icon: "🧹",
    },
    {
      id: 5,
      nome: "Óleo para Barba",
      categoria: "Barba",
      preco: "R$ 35,00",
      quantidade: 12,
      estoqueMinimo: 15,
      icon: "🧔",
    },
  ]);

  const [filtro, setFiltro] = useState({
    categoria: "todas",
    status: "todos",
    busca: "",
  });

  // Função para calcular o status do produto
  const calcularStatus = (quantidade, minimo) => {
    if (quantidade === 0) return "Esgotado";
    if (quantidade <= minimo * 0.5) return "Crítico";
    if (quantidade <= minimo) return "Baixo";
    return "Normal";
  };

  // Calcula os valores para os cards de resumo
  const resumo = {
    total: produtos.length,
    critico: produtos.filter(
      (p) => calcularStatus(p.quantidade, p.estoqueMinimo) === "Crítico"
    ).length,
    baixo: produtos.filter(
      (p) => calcularStatus(p.quantidade, p.estoqueMinimo) === "Baixo"
    ).length,
    valorTotal: produtos
      .reduce(
        (acc, p) =>
          acc +
          parseFloat(p.preco.replace("R$ ", "").replace(",", ".")) *
            p.quantidade,
        0
      )
      .toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
  };

  // Filtra os produtos baseado nos critérios
  const produtosFiltrados = produtos.filter((produto) => {
    const status = calcularStatus(produto.quantidade, produto.estoqueMinimo);
    return (
      (filtro.categoria === "todas" ||
        produto.categoria === filtro.categoria) &&
      (filtro.status === "todos" || status === filtro.status) &&
      (filtro.busca === "" ||
        produto.nome.toLowerCase().includes(filtro.busca.toLowerCase()))
    );
  });

  // Classes para os badges de status
  const getStatusBadgeClass = (quantidade, minimo) => {
    const status = calcularStatus(quantidade, minimo);
    if (status === "Crítico") return "status-badge status-critico";
    if (status === "Baixo") return "status-badge status-baixo";
    return "status-badge status-normal";
  };

  return (
    <div className="estoque-container">
      {/* Header */}
      <div className="estoque-header">
        <h1>📦 Gestão de Estoque</h1>
        <button className="btn-novo">
          <span>+</span> Novo Produto
        </button>
      </div>

      {/* Cards de Resumo */}
      <div className="cards-resumo">
        <div className="card total">
          <span className="card-titulo">Total de Produtos</span>
          <span className="card-valor">{resumo.total}</span>
        </div>
        <div className="card critico">
          <span className="card-titulo">Estoque Crítico</span>
          <span className="card-valor">{resumo.critico}</span>
        </div>
        <div className="card baixo">
          <span className="card-titulo">Estoque Baixo</span>
          <span className="card-valor">{resumo.baixo}</span>
        </div>
        <div className="card valor">
          <span className="card-titulo">Total em Valor</span>
          <span className="card-valor">{resumo.valorTotal}</span>
        </div>
      </div>

      {/* Filtros */}
      <div className="filtros">
        <div className="busca">
          <input
            type="text"
            placeholder="Buscar produto..."
            value={filtro.busca}
            onChange={(e) => setFiltro({ ...filtro, busca: e.target.value })}
          />
        </div>
        <select
          value={filtro.categoria}
          onChange={(e) => setFiltro({ ...filtro, categoria: e.target.value })}
        >
          <option value="todas">Todas as Categorias</option>
          <option value="Cabelo">Cabelo</option>
          <option value="Barba">Barba</option>
          <option value="Finalização">Finalização</option>
          <option value="Equipamentos">Equipamentos</option>
          <option value="Acessórios">Acessórios</option>
        </select>
        <select
          value={filtro.status}
          onChange={(e) => setFiltro({ ...filtro, status: e.target.value })}
        >
          <option value="todos">Todos os Status</option>
          <option value="Normal">Normal</option>
          <option value="Baixo">Baixo</option>
          <option value="Crítico">Crítico</option>
        </select>
      </div>

      {/* Grid de Produtos */}
      <div className="produtos-grid">
        {produtosFiltrados.map((produto, index) => (
          <div key={index} className="produto-card">
            <div className="produto-header">
              <h3 className="produto-nome">{produto.nome}</h3>
              <span
                className={`produto-status status-${calcularStatus(
                  produto.quantidade,
                  produto.estoqueMinimo
                ).toLowerCase()}`}
              >
                {calcularStatus(produto.quantidade, produto.estoqueMinimo)}
              </span>
            </div>

            <div className="produto-info">
              <div className="produto-item">
                <span className="produto-label">Categoria</span>
                <span className="produto-valor">{produto.categoria}</span>
              </div>

              <div className="produto-item">
                <span className="produto-label">Preço</span>
                <span className="produto-valor">
                  {produto.preco.replace("R$ ", "R$")}
                </span>
              </div>

              <div className="produto-item">
                <span className="produto-label">Quantidade</span>
                <span className="produto-valor">{produto.quantidade}</span>
              </div>

              <div className="produto-item">
                <span className="produto-label">Estoque Mínimo</span>
                <span className="produto-valor">{produto.estoqueMinimo}</span>
              </div>
            </div>

            <div className="produto-acoes">
              <button className="produto-btn btn-editar" title="Editar">
                ✏️
              </button>
              <button className="produto-btn btn-excluir" title="Excluir">
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Estoque;
