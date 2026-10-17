import '../css/selecao.css';

export default function Selecao({ onVoltar, onSelecionar }) {
  return (
    <main className="selecao-page">
      <div className="container">
        <h1>Escolha seu portal</h1>
        <h2>Qual área você deseja acessar?</h2>

        <div className="opcoes">
          <button className="botao botao-senai" onClick={() => onSelecionar('SENAI')}>
            SENAI
            <span className="descricao">Informática e atividades técnicas</span>
          </button>
          <button className="botao botao-sesi" onClick={() => onSelecionar('SESI')}>
            SESI
            <span className="descricao">Atividades e portfólio escolar</span>
          </button>
        </div>

        <button className="voltar-login" onClick={onVoltar}>Voltar ao login</button>
      </div>
    </main>
  );
}
