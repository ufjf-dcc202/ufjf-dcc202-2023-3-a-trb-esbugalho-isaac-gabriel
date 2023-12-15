// Importa funções do arquivo 'jogo.js' e 'interface.js'
import { criarTabuleiro, Clique, verificarVencedor } from './jogo.js';
import { renderizarTabuleiro } from './interface.js';

// Inicializa um objeto de áudio com um arquivo de áudio específico
var audio = new Audio('js/audio_file.mp3');

// Inicializa tabuleiros para jogadores 1 e 2
var jogador1Tabuleiro = criarTabuleiro();
var jogador2Tabuleiro = criarTabuleiro();

// Renderiza os tabuleiros na interface
renderizarTabuleiro(jogador1Tabuleiro, 1, jogador2Tabuleiro, audio);
renderizarTabuleiro(jogador2Tabuleiro, 2, jogador1Tabuleiro, audio);

// Adiciona evento de clique para o tabuleiro do jogador 1
document.getElementById('jogador1-tabuleiro').onclick = function () {
  // Chama a função 'Clique' para o jogador 1
  Clique(1, jogador1Tabuleiro, jogador2Tabuleiro, audio);
  // Após o clique, renderiza novamente o tabuleiro e verifica se há um vencedor
  renderizarTabuleiro(jogador1Tabuleiro, 1, jogador2Tabuleiro, audio);
  verificarVencedor(jogador1Tabuleiro, 1);
};

// Adiciona evento de clique para o tabuleiro do jogador 2
document.getElementById('jogador2-tabuleiro').onclick = function () {
  // Chama a função 'Clique' para o jogador 2
  Clique(2, jogador2Tabuleiro, jogador1Tabuleiro, audio);
  // Após o clique, renderiza novamente o tabuleiro e verifica se há um vencedor
  renderizarTabuleiro(jogador2Tabuleiro, 2, jogador1Tabuleiro, audio);
  verificarVencedor(jogador2Tabuleiro, 2);
};

// Adiciona evento de clique para o botão de reinício
document.getElementById('Reiniciar').onclick = function () {
  // Chama a função para reiniciar o jogo
  reiniciarJogo();
};

// Função para reiniciar o jogo
function reiniciarJogo() {
  // Cria novos tabuleiros para jogadores 1 e 2
  jogador1Tabuleiro = criarTabuleiro();
  jogador2Tabuleiro = criarTabuleiro();

  // Renderiza os tabuleiros reiniciados na interface
  renderizarTabuleiro(jogador1Tabuleiro, 1, jogador2Tabuleiro, audio);
  renderizarTabuleiro(jogador2Tabuleiro, 2, jogador1Tabuleiro, audio);
}
