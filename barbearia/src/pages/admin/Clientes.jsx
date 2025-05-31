import { useState, useEffect } from "react";
import { getClientes, getResumoClientes } from "../../services/clienteService";
import "./Clientes.css";

function Clientes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [mostrarAtivos, setMostrarAtivos] = useState(true);
  const [mostrarInativos, setMostrarInativos] = useState(true);
  const [mostrarAniversariantes, setMostrarAniversariantes] = useState(false);
  const [clientes, setClientes] = useState([]);
  const [resumoClientes, setResumoClientes] = useState({
    total: 0,
    ativos: 0,
    novos: 0,
    aniversariantes: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const [clientesData, resumoData] = await Promise.all([
          getClientes(),
          getResumoClientes(),
        ]);

        setClientes(clientesData);
        setResumoClientes(resumoData);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        // TODO: Adicionar notificação de erro
      } finally {
        setLoading(false);
      }
    };

    carregarDados();
  }, []);

  const handleNovoCliente = () => {
    // TODO: Implementar navegação para página de novo cliente
    alert("Implementar criação de novo cliente");
  };

  const handleEditar = (id) => {
    alert(`Editar cliente ${id}`);
  };

  const handleAgendar = (id) => {
    alert(`Agendar para cliente ${id}`);
  };

  // Formatar data para exibição
  const formatarData = (data) => {
    if (!data) return "Não registrado";
    return new Date(data).toLocaleDateString("pt-BR");
  };

  // Filtrar clientes
  const clientesFiltrados = clientes.filter((cliente) => {
    const matchesSearch =
      cliente.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cliente.telefone?.includes(searchTerm);
    const matchesStatus =
      (mostrarAtivos && cliente.status) || (mostrarInativos && !cliente.status);
    const matchesAniversariante =
      !mostrarAniversariantes ||
      (cliente.data_nascimento &&
        new Date(cliente.data_nascimento).getMonth() === new Date().getMonth());

    return matchesSearch && matchesStatus && matchesAniversariante;
  });

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <div className="clientes">
      {/* Cabeçalho da página */}
      <div className="page-header">
        <h1 className="page-title">Clientes</h1>
        <button className="novo-cliente-btn" onClick={handleNovoCliente}>
          ➕ Novo Cliente
        </button>
      </div>

      {/* Cards de resumo */}
      <div className="cards-resumo">
        <div className="card total">
          <span className="card-titulo">Total de Clientes</span>
          <span className="card-valor">{resumoClientes.total}</span>
        </div>
        <div className="card ativos">
          <span className="card-titulo">Clientes Ativos</span>
          <span className="card-valor">{resumoClientes.ativos}</span>
        </div>
        <div className="card novos">
          <span className="card-titulo">Novos Clientes</span>
          <span className="card-valor">{resumoClientes.novos}</span>
        </div>
        <div className="card aniversariantes">
          <span className="card-titulo">Aniversariantes</span>
          <span className="card-valor">{resumoClientes.aniversariantes}</span>
        </div>
      </div>

      {/* Filtros */}
      <div className="filtros">
        <div className="campo-busca">
          <input
            type="text"
            placeholder="Buscar cliente..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filtros-rapidos">
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={mostrarAtivos}
                onChange={(e) => setMostrarAtivos(e.target.checked)}
              />
              Ativos
            </label>
          </div>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={mostrarInativos}
                onChange={(e) => setMostrarInativos(e.target.checked)}
              />
              Inativos
            </label>
          </div>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={mostrarAniversariantes}
                onChange={(e) => setMostrarAniversariantes(e.target.checked)}
              />
              Aniversariantes do Mês
            </label>
          </div>
        </div>
      </div>

      {/* Grid de Cards de Clientes */}
      <div className="clientes-grid">
        {clientesFiltrados.map((cliente) => (
          <div key={cliente.id} className="cliente-card">
            <div className="cliente-header">
              <div className="cliente-avatar">{cliente.nome.charAt(0)}</div>
              <div className="cliente-nome-status">
                <h3 className="cliente-nome">{cliente.nome}</h3>
                <div className="cliente-pontos">
                  <span className="pontos-badge">
                    <span className="pontos-icon">⭐</span>
                    {cliente.pontos || 0} pontos
                  </span>
                </div>
              </div>
            </div>

            <div className="cliente-info">
              <div className="info-item">
                <span className="info-label">Telefone</span>
                <span className="info-valor">
                  {cliente.telefone || "Não cadastrado"}
                </span>
              </div>

              <div className="info-item">
                <span className="info-label">Última Visita</span>
                <span className="info-valor">
                  {formatarData(cliente.ultima_visita)}
                </span>
              </div>

              <div className="info-item">
                <span className="info-label">Nível</span>
                <span className="info-valor">{cliente.nivel || "Bronze"}</span>
              </div>

              <div className="info-item">
                <span className="info-label">Status</span>
                <span
                  className={`status-badge status-${
                    cliente.status ? "ativo" : "inativo"
                  }`}
                >
                  {cliente.status ? "Ativo" : "Inativo"}
                </span>
              </div>
            </div>

            <div className="cliente-acoes">
              <button
                className="cliente-btn btn-editar"
                onClick={() => handleEditar(cliente.id)}
              >
                ✏️ Editar
              </button>
              <button
                className="cliente-btn btn-agendar"
                onClick={() => handleAgendar(cliente.id)}
              >
                📅 Agendar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clientes;
