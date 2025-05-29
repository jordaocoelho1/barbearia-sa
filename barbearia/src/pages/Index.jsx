import CardAcoes from "../components/CardAcoes";
import CardResumo from "../components/CardResumo";
import CardProximosAgendamentos from "../components/CardProximosAgendamentos";
import GraficoReceita from "../components/GraficoReceita";

function Index() {
  return (
    <div className="home-container">
      <h1>Dashboard 📊</h1>

      <div className="cards-resumo">
        <CardResumo titulo="📅 Agendamentos Hoje" valor="12" icone="📅" />
        <CardResumo titulo="👥 Total de Clientes" valor="128" icone="👥" />
        <CardResumo titulo="💰 Receita do Mês" valor="R$ 8.450" icone="💰" />
        <CardResumo titulo="🔄 Serviços Realizados" valor="52" icone="🔄" />
      </div>

      <CardAcoes />
      <CardProximosAgendamentos />

      {/* Gráfico de receita por mês */}
      <GraficoReceita />
    </div>
  );
}

export default Index;
