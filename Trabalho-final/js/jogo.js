

function criarTabuleiro() {
  const tabuleiro = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  return tabuleiro;
}

function Clique(jogadorId, linha, coluna, tabuleiroAtual, outroTabuleiro, audio) {
  
  if (!tabuleiroAtual[linha][coluna]) {
    const numeroAleatorio = Math.floor(Math.random() * 9) + 1;
    tabuleiroAtual[linha][coluna] = numeroAleatorio;

    const valorIgual = outroTabuleiro[linha].includes(numeroAleatorio);

    if (valorIgual) {
      for (let j = 0; j < outroTabuleiro[linha].length; j++) {
        outroTabuleiro[linha][j] = 0;
      }
    }

    audio.play();
  }
}

function calcularPontuacao(tabuleiro) {
  let pontuacao = 0;
  for (let i = 0; i < tabuleiro.length; i++) {
    for (let j = 0; j < tabuleiro[i].length; j++) {
      pontuacao += tabuleiro[i][j];
    }
  }
  return pontuacao;
}


function verificarVencedor(tabuleiro, jogadorId) {
  const jogadas = contarJogadas(tabuleiro);
  if (jogadas === 6) {
    const pontuacaoAtual = calcularPontuacao(tabuleiro);
    alert('Jogador ' + jogadorId + ' venceu com ' + pontuacaoAtual + ' pontos.');
  }
}

function contarJogadas(tabuleiro) {
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


export { criarTabuleiro, Clique, verificarVencedor, contarJogadas, calcularPontuacao };
