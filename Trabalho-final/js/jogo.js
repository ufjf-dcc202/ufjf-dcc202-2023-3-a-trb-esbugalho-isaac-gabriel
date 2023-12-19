import { renderizarTabuleiro } from './interface.js';

export function criarTabuleiro() {
  const tabuleiro = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  return tabuleiro;
}


export function Clique(jogadorId, linha, coluna, tabuleiroAtual, outroTabuleiro, audio) {
  
  if ( tabuleiroAtual &&tabuleiroAtual[linha] &&tabuleiroAtual[linha][coluna] === null  ) {
    const numeroAleatorio = Math.floor(Math.random() * 6) + 1;

    tabuleiroAtual[linha][coluna] = numeroAleatorio;


    atualizarTabuleiroOponente(outroTabuleiro, coluna, numeroAleatorio);

    if (audio && typeof audio.play === 'function') {
      audio.play();
    } 

    renderizarTabuleiro(tabuleiroAtual, jogadorId, outroTabuleiro, audio);

    if (contarJogadas(tabuleiroAtual) === 9) {
      verificarVencedor(tabuleiroAtual, jogadorId);
    }
  }
}

 export function calcularPontuacaoColuna(tabuleiro, coluna, numeroAleatorio) {
  let contador = 0;
  for (let i = 0; i < tabuleiro.length; i++) {
    if (tabuleiro[i][coluna] === numeroAleatorio) {
      contador++;
    }
  }
  return numeroAleatorio * contador;
}

export function atualizarTabuleiroOponente(tabuleiro, coluna, numeroAleatorio) {
  for (let i = 0; i < tabuleiro.length; i++) {
    for (let j = 0; j < tabuleiro[i].length; j++) {
      if (tabuleiro[i][j] === numeroAleatorio) {
        tabuleiro[i][j] = null;
      }
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
    alert('Jogador' + jogadorId + 'venceu com' + pontuacaoAtual+ 'pontos.');
  }
}


