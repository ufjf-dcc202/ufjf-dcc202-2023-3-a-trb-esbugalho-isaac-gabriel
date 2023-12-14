// index.js

import { criarTabuleiro, Clique, verificarVencedor } from './jogo.js';
import { renderizarTabuleiro } from './interface.js';

var audio = new Audio('js/audio_file.mp3');

var jogador1Tabuleiro = criarTabuleiro();
var jogador2Tabuleiro = criarTabuleiro();

renderizarTabuleiro(jogador1Tabuleiro, 1, jogador2Tabuleiro, audio);
renderizarTabuleiro(jogador2Tabuleiro, 2, jogador1Tabuleiro, audio);

document.getElementById('jogador1-tabuleiro').onclick = function () {
  Clique(1, jogador1Tabuleiro, jogador2Tabuleiro, audio);
  renderizarTabuleiro(jogador1Tabuleiro, 1, jogador2Tabuleiro, audio);
  verificarVencedor(jogador1Tabuleiro, 1);
};

document.getElementById('jogador2-tabuleiro').onclick = function () {
  Clique(2, jogador2Tabuleiro, jogador1Tabuleiro, audio);
  renderizarTabuleiro(jogador2Tabuleiro, 2, jogador1Tabuleiro, audio);
  verificarVencedor(jogador2Tabuleiro, 2);
};

document.getElementById('Reiniciar').onclick = function () {
  reiniciarJogo();
};

function reiniciarJogo() {
  jogador1Tabuleiro = criarTabuleiro();
  jogador2Tabuleiro = criarTabuleiro();

  // Renderize os tabuleiros novamente
  renderizarTabuleiro(jogador1Tabuleiro, 1, jogador2Tabuleiro, audio);
  renderizarTabuleiro(jogador2Tabuleiro, 2, jogador1Tabuleiro, audio);

}
