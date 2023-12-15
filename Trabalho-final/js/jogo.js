// Função para criar um novo tabuleiro vazio
export function criarTabuleiro() {
  const tabuleiro = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  return tabuleiro;
}

// Função chamada quando um jogador realiza um clique no tabuleiro
export function Clique(jogadorId, linha, coluna, tabuleiroAtual, outroTabuleiro, audio) {
  // Verifica se a célula clicada está vazia
  if (tabuleiroAtual && tabuleiroAtual[linha] && tabuleiroAtual[linha][coluna] === null) {
    // Gera um número aleatório para preencher a célula clicada
    const numeroAleatorio = Math.floor(Math.random() * 9) + 1;
    tabuleiroAtual[linha][coluna] = numeroAleatorio;

    // Verifica se o número aleatório está presente no tabuleiro do adversário
    if (outroTabuleiro && outroTabuleiro[linha] && outroTabuleiro[linha].includes(numeroAleatorio)) {
      // Se presente, limpa essa célula no tabuleiro do adversário
      for (let j = 0; j < outroTabuleiro[linha].length; j++) {
        outroTabuleiro[linha][j] = null;
      }
    }

    // Reproduz o áudio (se disponível)
    if (audio && typeof audio.play === 'function') {
      audio.play();
    }
  }
}

// Função para calcular a pontuação total do tabuleiro
export function calcularPontuacao(tabuleiro) {
  let pontuacao = 0;
  for (let i = 0; i < tabuleiro.length; i++) {
    for (let j = 0; j < tabuleiro[i].length; j++) {
      pontuacao += tabuleiro[i][j];
    }
  }
  return pontuacao;
}

// Função para contar o número de jogadas realizadas no tabuleiro
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

// Função para verificar se um jogador venceu (por exemplo, ao completar 6 jogadas)
export function verificarVencedor(tabuleiro, jogadorId) {
  // Conta o número total de jogadas no tabuleiro
  let jogadas = contarJogadas(tabuleiro);

  // Verifica se o jogador atingiu a condição de vitória (por exemplo, 6 jogadas)
  if (jogadas === 6) {
    // Calcula a pontuação atual do jogador
    const pontuacaoAtual = calcularPontuacao(tabuleiro);

    // Exibe um alerta indicando que o jogador venceu com a pontuação obtida
    alert('Jogador ' + jogadorId + ' venceu com ' + pontuacaoAtual + ' pontos.');
  }
}
