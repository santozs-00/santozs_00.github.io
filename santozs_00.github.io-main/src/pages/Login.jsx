import { useState } from 'react';
import '../css/login.css';

export default function Login({ onEntrar }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (!usuario.trim() || !senha.trim()) {
      setMensagem('Preencha o usuário e a senha.');
      return;
    }
    setMensagem('');
    onEntrar(usuario, senha);
  }

  return (
    <main className="login-container">
      <section className="login-card">
        <header className="login-header">
          <h1>Bem-vindo!</h1>
          <p>Entre para acessar seu portal escolar.</p>
        </header>

        <form id="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="usuario">Usuário</label>
            <input
              id="usuario"
              name="usuario"
              autoComplete="username"
              value={usuario}
              onChange={(event) => setUsuario(event.target.value)}
              placeholder="Digite seu usuário"
            />
          </div>

          <div className="input-group">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              name="senha"
              type="password"
              autoComplete="current-password"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              placeholder="Digite sua senha"
            />
          </div>

          <p id="mensagem" role="alert">{mensagem}</p>
          <button type="submit">Entrar</button>
        </form>
      </section>
    </main>
  );
}
