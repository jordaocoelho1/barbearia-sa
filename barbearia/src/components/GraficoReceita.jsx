import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

function GraficoReceita() {
  const dadosReceita = {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    datasets: [
      {
        label: "Receita (R$)",
        data: [
          8400, 9200, 8700, 9400, 8900, 9100, 8600, 8800, 9000, 9500, 9200,
          9700,
        ],
        backgroundColor: "#007bff",
      },
    ],
  };

  return (
    <div className="grafico-receita">
      <h3>📊 Receita por Mês</h3>
      <Bar data={dadosReceita} />
    </div>
  );
}

export default GraficoReceita;
