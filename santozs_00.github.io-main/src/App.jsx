import { useState } from 'react';
import Login from './pages/Login.jsx';
import Selecao from './pages/Selecao.jsx';
import Portfolio from './pages/Portfolio.jsx';

export default function App() {
  const [pagina, setPagina] = useState('login');
  const [tipo, setTipo] = useState('SESI');

  function entrar(usuario, senha) {
    if (!usuario.trim() || !senha.trim()) return false;
    setPagina('selecao');
    return true;
  }

  if (pagina === 'login') {
    return <Login onEntrar={entrar} />;
  }

  if (pagina === 'selecao') {
    return (
      <Selecao
        onVoltar={() => setPagina('login')}
        onSelecionar={(escola) => {
          setTipo(escola);
          setPagina('portfolio');
        }}
      />
    );
  }

  return (
    <Portfolio
      tipo={tipo}
      onVoltar={() => setPagina('selecao')}
    />
  );
}
