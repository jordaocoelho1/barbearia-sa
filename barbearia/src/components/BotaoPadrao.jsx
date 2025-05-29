import "./BotaoPadrao.css";

function BotaoPadrao({ texto, onClick }) {
  return (
    <button className="botao-padrao" onClick={onClick}>
      {texto}
    </button>
  );
}

export default BotaoPadrao;
