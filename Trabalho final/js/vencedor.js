// vencedor.js
import { calcularPontuacao } from './pontuacao.js';

export function verificarVencedor(tabuleiro, jogadorId, jogadas) {
  if (jogadas === 6) {
    const pontuacaoAtual = calcularPontuacao(tabuleiro);
    alert('Jogador ' + jogadorId + ' venceu com ' + pontuacaoAtual + ' pontos.');
  }
}
