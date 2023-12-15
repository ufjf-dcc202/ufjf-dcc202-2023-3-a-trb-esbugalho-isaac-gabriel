// Importa a função 'Clique' do arquivo 'jogo.js'
import { Clique } from './jogo.js';

// Função para renderizar o tabuleiro na interface do usuário
export function renderizarTabuleiro(tabuleiro, jogadorId, outroTabuleiro, audio) {
  // Obtém o elemento HTML onde o tabuleiro será renderizado
  const tabuleiroElemento = document.getElementById('jogador' + jogadorId + '-tabuleiro');

  // Limpa o conteúdo anterior do elemento para renderizar o novo tabuleiro
  tabuleiroElemento.innerHTML = '';

  // Loop para percorrer cada linha do tabuleiro
  for (let i = 0; i < tabuleiro.length; i++) {
    // Cria um elemento div para representar uma linha do tabuleiro
    const linhaElemento = document.createElement('div');
    linhaElemento.className = 'linha';

    // Loop para percorrer cada célula da linha do tabuleiro
    for (let j = 0; j < tabuleiro[i].length; j++) {
      // Cria um elemento div para representar uma célula do tabuleiro
      const celulaElemento = document.createElement('div');
      celulaElemento.className = 'celula';

      // Obtém o número presente na célula
      const numero = tabuleiro[i][j];

      // Cria um elemento span para exibir o número na célula (ou vazio se for null)
      const numeroElemento = document.createElement('span');
      numeroElemento.innerText = numero !== null ? numero : '';

      // Adiciona o elemento de número à célula
      celulaElemento.appendChild(numeroElemento);

      // Adiciona um evento de clique à célula
      celulaElemento.onclick = function () {
        // Chama a função 'Clique' do arquivo 'jogo.js' ao clicar na célula
        Clique(jogadorId, i, j, tabuleiro, outroTabuleiro, audio);
        // Após o clique, renderiza novamente o tabuleiro
        renderizarTabuleiro(tabuleiro, jogadorId, outroTabuleiro, audio);
      };

      // Adiciona a célula à linha do tabuleiro
      linhaElemento.appendChild(celulaElemento);
    }

    // Adiciona a linha completa ao elemento do tabuleiro
    tabuleiroElemento.appendChild(linhaElemento);
  }
}
