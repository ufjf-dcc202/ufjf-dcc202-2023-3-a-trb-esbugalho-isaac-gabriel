//jogo
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
    const numeroAleatorio = Math.floor(Math.random() * 9) + 1;
    tabuleiroAtual[linha][coluna] = numeroAleatorio;

    if (outroTabuleiro && outroTabuleiro[linha] && outroTabuleiro[linha].includes(numeroAleatorio)) {
      for (let j = 0; j < outroTabuleiro[linha].length; j++) {
        outroTabuleiro[linha][j] = null;
      }
    }

    if (audio && typeof audio.play === 'function') {
      audio.play();
    }
  }
}

export function calcularPontuacao(tabuleiro) {
  let pontuacao = 0;
  for (let i = 0; i < tabuleiro.length; i++) {
    for (let j = 0; j < tabuleiro[i].length; j++) {
      pontuacao += tabuleiro[i][j];
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
  let jogadas = contarJogadas(tabuleiro);
  if (jogadas === 6) {
    const pontuacaoAtual = calcularPontuacao(tabuleiro);
    alert('Jogador ' + jogadorId + ' venceu com ' + pontuacaoAtual + ' pontos.');
  }
}