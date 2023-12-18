<<<<<<< HEAD
import { renderizarTabuleiro } from './interface.js';

=======
>>>>>>> parent of 71efdba (nada)
export function criarTabuleiro() {
  const tabuleiro = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  return tabuleiro;
}

export function Clique(jogadorId, linha, coluna, tabuleiroAtual, outroTabuleiro, audio) {
  if (tabuleiroAtual && tabuleiroAtual[linha] && tabuleiroAtual[linha][coluna] === null) {
    const numeroAleatorio = Math.floor(Math.random() * 6) + 1;

    tabuleiroAtual[linha][coluna] = numeroAleatorio;

    let pontuacaoColuna = 0;
    for (let i = 0; i < tabuleiroAtual.length; i++) {
      pontuacaoColuna += tabuleiroAtual[i][coluna];
    }

    pontuacaoColuna *= contarDadosNaColuna(tabuleiroAtual, coluna, numeroAleatorio);

    let pontuacaoTotal = calcularPontuacao(tabuleiroAtual) - pontuacaoColuna + pontuacaoColuna;

    atualizarTabuleiroOponente(outroTabuleiro, linha, numeroAleatorio);

    if (audio && typeof audio.play === 'function') {
      audio.play();
    }

    renderizarTabuleiro(tabuleiroAtual, jogadorId, outroTabuleiro, audio);

    if (contarJogadas(tabuleiroAtual) === 9) {
      verificarVencedor(tabuleiroAtual, jogadorId);
    }
  }
}

function contarDadosNaColuna(tabuleiro, coluna, numeroAleatorio) {
  let count = 0;
  for (let i = 0; i < tabuleiro.length; i++) {
    if (tabuleiro[i][coluna] === numeroAleatorio) {
      count++;
    }
  }
  return count;
}

function atualizarTabuleiroOponente(tabuleiro, linha, numeroAleatorio) {
  for (let i = 0; i < tabuleiro[linha].length; i++) {
    const index = tabuleiro[linha].indexOf(numeroAleatorio);
    if (index !== -1) {
      tabuleiro[linha][index] = null;
    }
  }
}

export function calcularPontuacao(tabuleiro) {
  let pontuacao = 0;
  for (let i = 0; i < tabuleiro.length; i++) {
    for (let j = 0; j < tabuleiro[i].length; j++) {
      pontuacao += tabuleiro[i][j] || 0;
    }
  }
  return pontuacao;
}

export function contarJogadas(tabuleiro) {
  let jogadas = 0;
  for (let i = 0; i < tabuleiro.length; i++) {
    for (let j = 0; j < tabuleiro[i].length; j++) {
      if (tabuleiro[i][j] !== null) {
        jogadas++;
      }
    }
  }
  return jogadas;
}

export function verificarVencedor(tabuleiro, jogadorId) {
  let todasAsCasasPreenchidas = true;

  for (let i = 0; i < tabuleiro.length; i++) {
    for (let j = 0; j < tabuleiro[i].length; j++) {
      if (tabuleiro[i][j] === null) {
        todasAsCasasPreenchidas = false;
        break;
      }
    }
    if (!todasAsCasasPreenchidas) {
      break;
    }
  }

  if (todasAsCasasPreenchidas) {
    const pontuacaoAtual = calcularPontuacao(tabuleiro);
    alert('Jogador ' + jogadorId + ' venceu com ' + pontuacaoAtual + ' pontos.');
  }
}
