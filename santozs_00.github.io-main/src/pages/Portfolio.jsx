import { useEffect, useState } from 'react';
import '../css/portfolio.css';

const API_URL = 'http://localhost:3000/api/atividades';

export default function Portfolio({ tipo, onVoltar }) {
  const nome = tipo === 'SENAI' ? 'Portfólio SENAI' : 'Portfólio SESI';
  const [atividades, setAtividades] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [materia, setMateria] = useState('');
  const [tipoAtividade, setTipoAtividade] = useState('atividade');
  const [mensagem, setMensagem] = useState('');
  const [carregando, setCarregando] = useState(true);

  async function carregarAtividades() {
    try {
      const resposta = await fetch(API_URL);
      if (!resposta.ok) throw new Error('Não foi possível carregar as atividades.');
      const resultado = await resposta.json();
      setAtividades(resultado.dados);
      setMensagem('');
    } catch {
      setMensagem('Não foi possível conectar à API. Confira se o backend está rodando na porta 3000.');
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregarAtividades();
  }, []);

  async function cadastrar(event) {
    event.preventDefault();
    setMensagem('');
    try {
      const resposta = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo, descricao, materia, tipo: tipoAtividade })
      });
      const resultado = await resposta.json();
      if (!resposta.ok) throw new Error(resultado.erro || 'Erro ao cadastrar.');
      setAtividades((atuais) => [...atuais, resultado.dados]);
      setTitulo('');
      setDescricao('');
      setMateria('');
      setTipoAtividade('atividade');
      setMensagem('Atividade cadastrada com sucesso!');
    } catch (erro) {
      setMensagem(erro.message || 'Não foi possível cadastrar a atividade.');
    }
  }

  return (
    <div className={`portfolio-page ${tipo.toLowerCase()}`}>
      <header className="portfolio-header">
        <button className="botao-voltar" onClick={onVoltar}>← Voltar</button>
        <h1>{nome}</h1>
        <p>Organize aqui suas atividades, projetos e reflexões.</p>
      </header>

      <main className="portfolio-main">
        <section className="portfolio-card">
          <h2>Identificação do estudante</h2>
          <dl>
            <dt>Nome</dt><dd>Preencha com seu nome</dd>
            <dt>Turma</dt><dd>Preencha com sua turma</dd>
            <dt>Instituição</dt><dd>{tipo}</dd>
          </dl>
        </section>

        <section className="portfolio-card">
          <h2>Cadastrar atividade</h2>
          <form className="atividade-form" onSubmit={cadastrar}>
            <label htmlFor="atividade-titulo">Título</label>
            <input id="atividade-titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} minLength={3} required placeholder="Ex.: Pesquisa de Ciências" />
            <label htmlFor="atividade-descricao">Descrição</label>
            <textarea id="atividade-descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} rows={3} placeholder="Descreva a atividade (opcional)" />
            <label htmlFor="atividade-materia">Matéria</label>
            <input id="atividade-materia" value={materia} onChange={(e) => setMateria(e.target.value)} placeholder="Ex.: Matemática" />
            <label htmlFor="atividade-tipo">Tipo</label>
            <select id="atividade-tipo" value={tipoAtividade} onChange={(e) => setTipoAtividade(e.target.value)}>
              <option value="atividade">Atividade</option>
              <option value="projeto">Projeto</option>
              <option value="reflexao">Reflexão</option>
            </select>
            <button type="submit">Salvar atividade</button>
          </form>
          {mensagem && <p role="status" className="api-mensagem">{mensagem}</p>}
        </section>

        <section className="portfolio-card">
          <h2>Atividades cadastradas</h2>
          {carregando ? <p>Carregando atividades...</p> : atividades.length === 0 ? <p>Nenhuma atividade cadastrada ainda.</p> : (
            <ul className="atividade-lista">
              {atividades.map((atividade) => (
                <li key={atividade.id}>
                  <h3>{atividade.titulo}</h3>
                  {atividade.materia && <p><strong>Matéria:</strong> {atividade.materia}</p>}
                  <p>{atividade.descricao || 'Sem descrição.'}</p>
                  <small>{atividade.tipo} · {new Date(atividade.criadaEm).toLocaleString('pt-BR')}</small>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
