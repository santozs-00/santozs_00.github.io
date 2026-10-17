import express from 'express';
import cors from 'cors';
import atividadeRoutes from './routes/atividadeRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', mensagem: 'API do Portfólio funcionando.' });
});

app.use('/api/atividades', atividadeRoutes);

app.use((req, res) => {
  res.status(404).json({ erro: 'Rota não encontrada.' });
});

app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});
