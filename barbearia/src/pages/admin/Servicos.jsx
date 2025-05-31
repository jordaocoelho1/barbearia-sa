import { useState } from "react";
import "./Servicos.css";

function Servicos() {
  // Mock data para serviços
  const [servicos] = useState([
    {
      id: 1,
      nome: "Corte Masculino",
      preco: "R$ 45,00",
      categoria: "Cabelo",
      status: "Ativo",
      icon: "✂️",
      duracao: 30,
      descricao: "Corte de cabelo masculino com máquina e tesoura.",
      profissionais: ["João", "Maria"],
    },
    {
      id: 2,
      nome: "Barba",
      preco: "R$ 35,00",
      categoria: "Barba",
      status: "Ativo",
      icon: "🪒",
      duracao: 15,
      descricao: "Aparar e modelar barba.",
      profissionais: ["José"],
    },
    {
      id: 3,
      nome: "Corte + Barba",
      preco: "R$ 70,00",
      categoria: "Combo",
      status: "Ativo",
      icon: "💈",
      duracao: 45,
      descricao: "Corte de cabelo e barba.",
      profissionais: ["João", "José"],
    },
    {
      id: 4,
      nome: "Coloração",
      preco: "R$ 120,00",
      categoria: "Cabelo",
      status: "Inativo",
      icon: "🎨",
      duracao: 60,
      descricao: "Coloração completa dos fios.",
      profissionais: ["Maria"],
    },
    {
      id: 5,
      nome: "Hidratação",
      preco: "R$ 80,00",
      categoria: "Tratamento",
      status: "Ativo",
      icon: "💧",
      duracao: 30,
      descricao: "Hidratação profunda para cabelos.",
      profissionais: ["João"],
    },
  ]);

  const [filtro, setFiltro] = useState({
    categoria: "todas",
    status: "todos",
    busca: "",
  });

  const servicosFiltrados = servicos.filter((servico) => {
    return (
      (filtro.categoria === "todas" ||
        servico.categoria === filtro.categoria) &&
      (filtro.status === "todos" || servico.status === filtro.status) &&
      (filtro.busca === "" ||
        servico.nome.toLowerCase().includes(filtro.busca.toLowerCase()))
    );
  });

  // Dados para os cards de resumo
  const resumo = {
    total: servicos.length,
    ativos: servicos.filter((s) => s.status === "Ativo").length,
    categorias: [...new Set(servicos.map((s) => s.categoria))].length,
    valorMedio:
      servicos
        .filter((s) => s.status === "Ativo")
        .reduce(
          (acc, s) =>
            acc + parseFloat(s.preco.replace("R$ ", "").replace(",", ".")),
          0
        ) / servicos.filter((s) => s.status === "Ativo").length,
  };

  const getStatusBadgeClass = (status) => {
    return status === "Ativo" ? "status-ativo" : "status-inativo";
  };

  return (
    <div className="servicos-container">
      {/* Header */}
      <div className="servicos-header">
        <h1>💈 Gestão de Serviços</h1>
        <button className="btn-novo">
          <span>+</span> Novo Serviço
        </button>
      </div>

      {/* Cards de Resumo */}
      <div className="cards-resumo">
        <div className="card total">
          <span className="card-titulo">Total de Serviços</span>
          <span className="card-valor">{resumo.total}</span>
        </div>
        <div className="card categorias">
          <span className="card-titulo">Categorias</span>
          <span className="card-valor">{resumo.categorias}</span>
        </div>
        <div className="card ativos">
          <span className="card-titulo">Ativos</span>
          <span className="card-valor">{resumo.ativos}</span>
        </div>
        <div className="card inativos">
          <span className="card-titulo">Valor Médio</span>
          <span className="card-valor">R$ {resumo.valorMedio.toFixed(2)}</span>
        </div>
      </div>

      {/* Filtros */}
      <div className="filtros">
        <div className="busca">
          <input
            type="text"
            placeholder="Buscar serviço..."
            value={filtro.busca}
            onChange={(e) => setFiltro({ ...filtro, busca: e.target.value })}
          />
        </div>
        <select
          value={filtro.categoria}
          onChange={(e) => setFiltro({ ...filtro, categoria: e.target.value })}
        >
          <option value="todas">Categoria: Todas</option>
          <option value="Cabelo">Cabelo</option>
          <option value="Barba">Barba</option>
          <option value="Combo">Combos</option>
          <option value="Tratamento">Tratamentos</option>
        </select>
        <select
          value={filtro.status}
          onChange={(e) => setFiltro({ ...filtro, status: e.target.value })}
        >
          <option value="todos">Status: Todos</option>
          <option value="Ativo">Ativos</option>
          <option value="Inativo">Inativos</option>
        </select>
      </div>
      {/* Grid de Serviços */}
      <div className="servicos-grid">
        {servicosFiltrados.map((servico, index) => (
          <div key={index} className="servico-card">
            <div className="servico-header">
              <h3 className="servico-nome">{servico.nome}</h3>
              <span className="servico-duracao">{servico.duracao} min</span>
            </div>

            <div className="servico-info">
              <div className="servico-item">
                <span className="servico-label">Preço</span>
                <span className="servico-valor">
                  R${" "}
                  {parseFloat(
                    servico.preco.replace("R$ ", "").replace(",", ".")
                  )
                    .toFixed(2)
                    .replace(".", ",")}
                </span>
              </div>

              <div className="servico-item">
                <span className="servico-label">Categoria</span>
                <span className="servico-valor">{servico.categoria}</span>
              </div>
            </div>

            <p className="servico-descricao">{servico.descricao}</p>

            <div className="servico-profissionais">
              {servico.profissionais.map((profissional, idx) => (
                <span key={idx} className="profissional-tag">
                  {profissional}
                </span>
              ))}
            </div>

            <div className="servico-acoes">
              <button
                className="servico-btn btn-editar"
                onClick={() => handleEditar(servico)}
              >
                Editar
              </button>
              <button
                className="servico-btn btn-excluir"
                onClick={() => handleExcluir(servico.id)}
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicos;
