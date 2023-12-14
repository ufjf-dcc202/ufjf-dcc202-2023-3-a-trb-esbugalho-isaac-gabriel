

import { Clique } from './jogo.js';

function renderizarTabuleiro(tabuleiro, jogadorId, outroTabuleiro, audio) {
  const tabuleiroElemento = document.getElementById('jogador' + jogadorId + '-tabuleiro');
  tabuleiroElemento.innerHTML = '';

  for (let i = 0; i < tabuleiro.length; i++) {
    const linhaElemento = document.createElement('div');
    linhaElemento.className = 'linha';

    for (let j = 0; j < tabuleiro[i].length; j++) {
      const celulaElemento = document.createElement('div');
      celulaElemento.className = 'celula';

      const numero = tabuleiro[i][j];
      const numeroElemento = document.createElement('span');
      numeroElemento.innerText = numero !== null ? numero : '';

      celulaElemento.appendChild(numeroElemento);

      celulaElemento.onclick = function () {
        Clique(jogadorId, i, j, tabuleiro, outroTabuleiro, audio);
        renderizarTabuleiro(tabuleiro, jogadorId, outroTabuleiro, audio);
      };

      linhaElemento.appendChild(celulaElemento);
    }

    tabuleiroElemento.appendChild(linhaElemento);
  }
}

export { renderizarTabuleiro };
