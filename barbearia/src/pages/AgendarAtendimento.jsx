import { useState, useEffect } from "react";
import "./AgendarAtendimento.css";

function AgendarAtendimento() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    servico: "",
    data: "",
    horario: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false); // Adicione este estado

  // Define a data atual quando o componente monta
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setFormData((prev) => ({
      ...prev,
      data: today,
    }));
  }, []);

  const servicos = [
    {
      id: "corte-masculino",
      nome: "Corte Masculino",
      preco: "R$ 25,00",
      duracao: "30 min",
    },
    {
      id: "barba-completa",
      nome: "Barba Completa",
      preco: "R$ 20,00",
      duracao: "25 min",
    },
    {
      id: "corte-barba",
      nome: "Corte + Barba",
      preco: "R$ 40,00",
      duracao: "50 min",
    },
    {
      id: "sobrancelha",
      nome: "Sobrancelha",
      preco: "R$ 15,00",
      duracao: "15 min",
    },
    { id: "bigode", nome: "Bigode", preco: "R$ 10,00", duracao: "10 min" },
  ];

  const horarios = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
  ];

  const steps = [
    { number: 1, title: "Dados Pessoais", icon: "👤" },
    { number: 2, title: "Serviço", icon: "✂️" },
    { number: 3, title: "Data e Horário", icon: "📅" },
    { number: 4, title: "Confirmação", icon: "✅" },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Limpa erro do campo quando usuário começa a digitar
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const formatTelefone = (value) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
    return value;
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!formData.nome.trim()) {
          newErrors.nome = "Nome é obrigatório";
        }
        if (!formData.telefone.trim()) {
          newErrors.telefone = "Telefone é obrigatório";
        } else if (formData.telefone.replace(/\D/g, "").length < 10) {
          newErrors.telefone = "Telefone deve ter pelo menos 10 dígitos";
        }
        break;

      case 2:
        if (!formData.servico) {
          newErrors.servico = "Selecione um serviço";
        }
        break;

      case 3:
        if (!formData.data) {
          newErrors.data = "Data é obrigatória";
        } else {
          const selectedDate = new Date(formData.data);
          const today = new Date();
          today.setHours(0, 0, 0, 0);

          if (selectedDate < today) {
            newErrors.data = "Data não pode ser anterior a hoje";
          }
        }
        if (!formData.horario) {
          newErrors.horario = "Selecione um horário";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
    setErrors({});
  };

  const confirmarAgendamento = async () => {
    setShowModal(true); // Mostra o modal antes de confirmar
  };

  const handleConfirmModal = async () => {
    setShowModal(false);
    setIsLoading(true);

    try {
      // Simula chamada da API
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const servicoSelecionado = servicos.find(
        (s) => s.id === formData.servico
      );

      alert(`🎉 Agendamento confirmado!
      
📋 Resumo:
• Nome: ${formData.nome}
• Telefone: ${formData.telefone}
• Serviço: ${servicoSelecionado?.nome}
• Data: ${new Date(formData.data).toLocaleDateString("pt-BR")}
• Horário: ${formData.horario}
• Valor: ${servicoSelecionado?.preco}`);

      // Reset do formulário
      setFormData({
        nome: "",
        telefone: "",
        servico: "",
        data: new Date().toISOString().split("T")[0],
        horario: "",
      });
      setCurrentStep(1);
    } catch (error) {
      alert("❌ Erro ao confirmar agendamento. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  // Adicione o componente Modal
  const Modal = () => {
    if (!showModal) return null;

    return (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <h3>⚠️ Informações Importantes</h3>
          </div>
          <div className="modal-content">
            <ul>
              <li>
                <span>🕐</span>
                <span>
                  Por favor, chegue com pelo menos 10 minutos de antecedência
                </span>
              </li>
              <li>
                <span>❌</span>
                <span>
                  Em caso de impossibilidade de comparecer, nos avise com
                  antecedência
                </span>
              </li>
              <li>
                <span>📱</span>
                <span>
                  Cancelamentos podem ser feitos através do nosso WhatsApp
                </span>
              </li>
            </ul>
          </div>
          <div className="modal-actions">
            <button
              className="modal-btn modal-btn-confirm"
              onClick={handleConfirmModal}
            >
              ✓ Confirmar
            </button>
            <button
              className="modal-btn modal-btn-cancel"
              onClick={() => setShowModal(false)}
            >
              ✕ Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  };

  const servicoSelecionado = servicos.find((s) => s.id === formData.servico);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-content">
            <div className="step-header">
              <h2>📋 Vamos começar!</h2>
              <p>Primeiro, precisamos dos seus dados para contato</p>
            </div>

            <div className="form-group">
              <label htmlFor="nome">
                <span className="icon">👤</span>
                Nome Completo
              </label>
              <input
                id="nome"
                type="text"
                value={formData.nome}
                onChange={(e) => handleInputChange("nome", e.target.value)}
                placeholder="Digite seu nome completo"
                className={errors.nome ? "error" : ""}
                autoFocus
              />
              {errors.nome && (
                <span className="error-message">{errors.nome}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="telefone">
                <span className="icon">📱</span>
                Telefone
              </label>
              <input
                id="telefone"
                type="tel"
                value={formData.telefone}
                onChange={(e) =>
                  handleInputChange("telefone", formatTelefone(e.target.value))
                }
                placeholder="(85) 99999-9999"
                className={errors.telefone ? "error" : ""}
              />
              {errors.telefone && (
                <span className="error-message">{errors.telefone}</span>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="step-content">
            <div className="step-header">
              <h2>✂️ Escolha seu serviço</h2>
              <p>Selecione o serviço que deseja realizar</p>
            </div>

            <div className="services-grid">
              {servicos.map((servico) => (
                <div
                  key={servico.id}
                  className={`service-card ${
                    formData.servico === servico.id ? "selected" : ""
                  }`}
                  onClick={() => handleInputChange("servico", servico.id)}
                >
                  <div className="service-icon">✂️</div>
                  <h3>{servico.nome}</h3>
                  <div className="service-details">
                    <span className="price">{servico.preco}</span>
                    <span className="duration">{servico.duracao}</span>
                  </div>
                </div>
              ))}
            </div>
            {errors.servico && (
              <span className="error-message">{errors.servico}</span>
            )}
          </div>
        );

      case 3:
        return (
          <div className="step-content">
            <div className="step-header">
              <h2>📅 Data e Horário</h2>
              <p>Escolha quando você quer ser atendido</p>
            </div>

            <div className="datetime-container">
              <div className="form-group">
                <label htmlFor="data">
                  <span className="icon">📅</span>
                  Data do Atendimento
                </label>
                <input
                  id="data"
                  type="date"
                  value={formData.data}
                  onChange={(e) => handleInputChange("data", e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className={errors.data ? "error" : ""}
                />
                {errors.data && (
                  <span className="error-message">{errors.data}</span>
                )}
              </div>

              <div className="form-group">
                <label>
                  <span className="icon">🕐</span>
                  Horário Disponível
                </label>
                <div className="horarios-grid">
                  {horarios.map((horario) => (
                    <button
                      key={horario}
                      type="button"
                      className={`horario-btn ${
                        formData.horario === horario ? "selected" : ""
                      }`}
                      onClick={() => handleInputChange("horario", horario)}
                    >
                      {horario}
                    </button>
                  ))}
                </div>
                {errors.horario && (
                  <span className="error-message">{errors.horario}</span>
                )}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="step-content">
            <div className="step-header">
              <h2>✅ Confirmar Agendamento</h2>
              <p>Revise seus dados antes de confirmar</p>
            </div>

            <div className="confirmation-card">
              <div className="confirmation-header">
                <span className="icon">📋</span>
                <h3>Resumo do Agendamento</h3>
              </div>

              <div className="confirmation-details">
                <div className="detail-row">
                  <span className="label">👤 Nome:</span>
                  <span className="value">{formData.nome}</span>
                </div>
                <div className="detail-row">
                  <span className="label">📱 Telefone:</span>
                  <span className="value">{formData.telefone}</span>
                </div>
                <div className="detail-row">
                  <span className="label">✂️ Serviço:</span>
                  <span className="value">{servicoSelecionado?.nome}</span>
                </div>
                <div className="detail-row">
                  <span className="label">📅 Data:</span>
                  <span className="value">
                    {new Date(formData.data).toLocaleDateString("pt-BR")}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="label">🕐 Horário:</span>
                  <span className="value">{formData.horario}</span>
                </div>
                <div className="detail-row total">
                  <span className="label">💰 Valor:</span>
                  <span className="value">{servicoSelecionado?.preco}</span>
                </div>
              </div>
            </div>

            <div className="payment-info">
              <p>💳 Pagamento será realizado no local</p>
              <p>📱 Você receberá confirmação via WhatsApp</p>
            </div>

            {/* Adicione esta nova div com as informações importantes */}
            <div className="important-info">
              <h4>⚠️ Informações Importantes:</h4>
              <ul>
                <li>🕐 Chegue com pelo menos 10 minutos de antecedência</li>
                <li>
                  ❌ Em caso de impossibilidade de comparecer, por favor nos
                  avise com antecedência
                </li>
                <li>
                  📞 Cancelamentos podem ser feitos através do nosso WhatsApp
                </li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="agendar-container">
      <div className="agendar-card">
        <div className="header">
          <div className="header-icon">✂️</div>
          <h1>Agendar Atendimento</h1>
          <p>Siga os passos para agendar seu horário</p>
        </div>

        {/* Progress Steps */}
        <div className="progress-steps">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`step ${currentStep >= step.number ? "active" : ""} ${
                currentStep === step.number ? "current" : ""
              }`}
            >
              <div className="step-circle">
                {currentStep > step.number ? "✓" : step.icon}
              </div>
              <span className="step-title">{step.title}</span>
            </div>
          ))}
        </div>

        <form className="form" onSubmit={(e) => e.preventDefault()}>
          {renderStepContent()}

          <div className="form-actions">
            {currentStep > 1 && (
              <button
                type="button"
                className="btn-secondary"
                onClick={prevStep}
              >
                ← Voltar
              </button>
            )}

            {currentStep < 4 ? (
              <button type="button" className="btn-primary" onClick={nextStep}>
                Próximo →
              </button>
            ) : (
              <button
                type="button"
                className={`confirm-btn ${isLoading ? "loading" : ""}`}
                onClick={confirmarAgendamento}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner"></span>
                    Confirmando...
                  </>
                ) : (
                  <>
                    <span className="icon">✅</span>
                    Confirmar Agendamento
                  </>
                )}
              </button>
            )}
          </div>
        </form>

        <div className="footer-info">
          <div className="info-item">
            <span className="icon">📍</span>
            <span>Rua das Flores, 123 - Centro</span>
          </div>
          <div className="info-item">
            <span className="icon">📞</span>
            <span>(85) 3333-4444</span>
          </div>
        </div>
      </div>

      <Modal />
    </div>
  );
}

export default AgendarAtendimento;
