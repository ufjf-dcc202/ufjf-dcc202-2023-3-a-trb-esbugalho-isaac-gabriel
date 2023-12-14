// index.js
import { criarTabuleiro, renderizarTabuleiro } from './tabuleiro.js';
import { calcularPontuacao } from './pontuacao.js';
import { verificarVencedor } from './vencedor.js';
import { Clique } from './clique.js';
import { audio } from './audio.js';

let jogador1Tabuleiro = criarTabuleiro();
let jogador2Tabuleiro = criarTabuleiro();
let jogador1Jogadas = 0;
let jogador2Jogadas = 0;

renderizarTabuleiro(jogador1Tabuleiro, 1);
renderizarTabuleiro(jogador2Tabuleiro, 2);
