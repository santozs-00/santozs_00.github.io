export class Atividade {
  constructor({ titulo, descricao = '', materia = '', tipo = 'atividade' }) {
    if (typeof titulo !== 'string' || titulo.trim().length < 3) {
      throw new Error('O título deve ter pelo menos 3 caracteres.');
    }

    if (typeof descricao !== 'string') {
      throw new Error('A descrição deve ser um texto.');
    }

    if (typeof materia !== 'string') {
      throw new Error('A matéria deve ser um texto.');
    }

    const tiposPermitidos = ['atividade', 'projeto', 'reflexao'];
    if (!tiposPermitidos.includes(tipo)) {
      throw new Error('O tipo deve ser atividade, projeto ou reflexao.');
    }

    this.id = crypto.randomUUID();
    this.titulo = titulo.trim();
    this.descricao = descricao.trim();
    this.materia = materia.trim();
    this.tipo = tipo;
    this.criadaEm = new Date().toISOString();
  }
}
