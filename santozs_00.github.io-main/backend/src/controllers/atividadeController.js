import { Atividade } from '../models/Atividade.js';
import { atividadeRepository } from '../repositories/atividadeRepository.js';

export function listarAtividades(req, res) {
  return res.status(200).json({
    total: atividadeRepository.listar().length,
    dados: atividadeRepository.listar()
  });
}

export function criarAtividade(req, res) {
  try {
    const atividade = new Atividade(req.body);
    const criada = atividadeRepository.adicionar(atividade);

    return res.status(201).json({
      mensagem: 'Atividade cadastrada com sucesso.',
      dados: criada
    });
  } catch (erro) {
    return res.status(400).json({ erro: erro.message });
  }
}
