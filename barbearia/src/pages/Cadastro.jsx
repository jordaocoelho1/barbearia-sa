import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Cadastro.css";

function Cadastro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
    tipoConta: "cliente",
    aceitarTermos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implementar lógica de cadastro
    console.log(formData);

    // Simulação de cadastro - depois será substituída pela lógica real
    if (isFormValid()) {
      // Redirecionar com base no tipo de conta
      const redirectPath =
        formData.tipoConta === "barbeiro"
          ? "/perfil-barbeiro"
          : "/perfil-cliente";
      navigate(redirectPath);
    }
  };

  const isFormValid = () => {
    return (
      formData.nome &&
      formData.sobrenome &&
      formData.email &&
      formData.telefone &&
      formData.senha &&
      formData.senha === formData.confirmarSenha &&
      formData.aceitarTermos
    );
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
        <div className="cadastro-header">
          <div className="cadastro-logo">💈</div>
          <h1 className="cadastro-title">Crie sua conta</h1>
          <p className="cadastro-subtitle">Comece sua jornada conosco</p>
        </div>

        <form className="cadastro-form" onSubmit={handleSubmit}>
          <div className="tipo-conta">
            <label className="tipo-conta-option">
              <input
                type="radio"
                name="tipoConta"
                value="cliente"
                checked={formData.tipoConta === "cliente"}
                onChange={handleChange}
                className="tipo-conta-radio"
              />
              <div className="tipo-conta-label">
                <span className="tipo-conta-icon">👤</span>
                <span className="tipo-conta-text">Cliente</span>
              </div>
            </label>

            <label className="tipo-conta-option">
              <input
                type="radio"
                name="tipoConta"
                value="barbeiro"
                checked={formData.tipoConta === "barbeiro"}
                onChange={handleChange}
                className="tipo-conta-radio"
              />
              <div className="tipo-conta-label">
                <span className="tipo-conta-icon">💇‍♂️</span>
                <span className="tipo-conta-text">Barbeiro</span>
              </div>
            </label>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nome" className="form-label">
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                className="form-input"
                placeholder="Digite seu nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="sobrenome" className="form-label">
                Sobrenome
              </label>
              <input
                id="sobrenome"
                name="sobrenome"
                type="text"
                className="form-input"
                placeholder="Digite seu sobrenome"
                value={formData.sobrenome}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-input"
              placeholder="Digite seu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefone" className="form-label">
              Telefone
            </label>
            <input
              id="telefone"
              name="telefone"
              type="tel"
              className="form-input"
              placeholder="(00) 00000-0000"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="senha" className="form-label">
                Senha
              </label>
              <input
                id="senha"
                name="senha"
                type="password"
                className="form-input"
                placeholder="Digite sua senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmarSenha" className="form-label">
                Confirmar Senha
              </label>
              <input
                id="confirmarSenha"
                name="confirmarSenha"
                type="password"
                className="form-input"
                placeholder="Confirme sua senha"
                value={formData.confirmarSenha}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="termos">
            <input
              type="checkbox"
              id="aceitarTermos"
              name="aceitarTermos"
              className="termos-checkbox"
              checked={formData.aceitarTermos}
              onChange={handleChange}
              required
            />
            <label htmlFor="aceitarTermos" className="termos-text">
              Li e aceito os{" "}
              <a href="#" className="termos-link">
                Termos de Uso
              </a>{" "}
              e a{" "}
              <a href="#" className="termos-link">
                Política de Privacidade
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="cadastro-btn"
            disabled={!isFormValid()}
          >
            Criar Conta
          </button>
        </form>

        <div className="login-redirect">
          Já tem uma conta?{" "}
          <Link to="/login" className="login-link">
            Faça login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
