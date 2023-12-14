// clique.js
import { audio } from './audio.js';
import { renderizarTabuleiro, verificarVencedor } from './tabuleiro.js';

export function Clique(jogadorId, linha, coluna, jogador1Tabuleiro, jogador2Tabuleiro, jogador1Jogadas, jogador2Jogadas) {
  let tabuleiroAtual;
  let outroTabuleiro;

  if (jogadorId === 1) {
    tabuleiroAtual = jogador1Tabuleiro;
    outroTabuleiro = jogador2Tabuleiro;
    jogador1Jogadas++;
  } else {
    tabuleiroAtual = jogador2Tabuleiro;
    outroTabuleiro = jogador1Tabuleiro;
    jogador2Jogadas++;
  }

  if (!tabuleiroAtual[linha][coluna]) {
    const numeroAleatorio = Math.floor(Math.random() * 9) + 1;
    tabuleiroAtual[linha][coluna] = numeroAleatorio;

    const ValorIgual = outroTabuleiro[linha].includes(numeroAleatorio);

    if (ValorIgual) {
      for (let j = 0; j < outroTabuleiro[linha].length; j++) {
        outroTabuleiro[linha][j] = 0;
      }
    }

    audio.play();
  }

  renderizarTabuleiro(tabuleiroAtual, jogadorId);

  if (jogadorId === 1) {
    verificarVencedor(tabuleiroAtual, jogadorId, jogador1Jogadas);
  } else {
    verificarVencedor(tabuleiroAtual, jogadorId, jogador2Jogadas);
  }
}
