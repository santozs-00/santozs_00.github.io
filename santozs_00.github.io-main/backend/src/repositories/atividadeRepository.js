// Repositório temporário em memória para o MVP.
// Os dados são perdidos quando o servidor é reiniciado.
const atividades = [];

export const atividadeRepository = {
  listar() {
    return [...atividades];
  },

  adicionar(atividade) {
    atividades.push(atividade);
    return atividade;
  }
};
