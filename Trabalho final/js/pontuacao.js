// pontuacao.js
export function calcularPontuacao(tabuleiro) {
    let pontuacao = 0;
    for (let i = 0; i < tabuleiro.length; i++) {
      for (let j = 0; j < tabuleiro[i].length; j++) {
        pontuacao += tabuleiro[i][j];
      }
    }
    return pontuacao;
  }
  