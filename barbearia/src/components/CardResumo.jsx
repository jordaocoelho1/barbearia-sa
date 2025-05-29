import "./CardResumo.css";

function CardResumo({ titulo, valor, icone }) {
  return (
    <div className="card-resumo">
      <span className="icone">{icone}</span>
      <h3>{titulo}</h3>
      <p>{valor}</p>
    </div>
  );
}

export default CardResumo;
