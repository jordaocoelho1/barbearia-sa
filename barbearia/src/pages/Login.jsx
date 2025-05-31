import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulação de login com verificação de admin
    if (email === "admin@barbearia.com" && senha === "admin123") {
      // Login como administrador
      const userData = {
        id: 1,
        email,
        name: "Administrador",
        role: "admin",
      };
      login(userData); // Usando a função login do contexto
      navigate("/admin");
    } else {
      // Aqui você pode adicionar uma mensagem de erro
      alert("Credenciais inválidas!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">💈</div>
          <h1 className="login-title">Barbearia SA</h1>
          <p className="login-subtitle">Faça login para continuar</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha" className="form-label">
              Senha
            </label>
            <input
              id="senha"
              type="password"
              className="form-input"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <div className="remember-forgot">
            <div className="remember-me">
              <input
                type="checkbox"
                id="lembrar"
                className="remember-checkbox"
                checked={lembrar}
                onChange={(e) => setLembrar(e.target.checked)}
              />
              <label htmlFor="lembrar" className="remember-label">
                Lembrar de mim
              </label>
            </div>{" "}
            <Link to="/recuperar-senha" className="forgot-link">
              Esqueceu a senha?
            </Link>
          </div>

          <button type="submit" className="login-btn">
            Entrar
          </button>
        </form>

        <div className="login-separator">
          <div className="separator-line"></div>
          <span>ou</span>
          <div className="separator-line"></div>
        </div>

        <div className="login-options">
          <button className="login-option-btn">
            <span className="login-option-icon">🔑</span>
            Entrar com o Google
          </button>
          <button className="login-option-btn">
            <span className="login-option-icon">📱</span>
            Entrar com o Telefone
          </button>
        </div>

        <div className="register-prompt">
          Não tem uma conta?{" "}
          <Link to="/cadastro" className="register-link">
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
