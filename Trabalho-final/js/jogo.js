// Importe a função renderizarTabuleiro aqui, se necessário

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

    // Calcular a pontuação da coluna
    let pontuacaoColuna = 0;
    for (let i = 0; i < tabuleiroAtual.length; i++) {
      pontuacaoColuna += tabuleiroAtual[i][coluna];
    }

    // Multiplicar pela quantidade de dados de mesmo valor na coluna
    let quantidadeDados = 0;
    for (let i = 0; i < tabuleiroAtual.length; i++) {
      if (tabuleiroAtual[i][coluna] === numeroAleatorio) {
        quantidadeDados++;
      }
    }

    pontuacaoColuna *= quantidadeDados;

    // Atualizar a pontuação total
    let pontuacaoTotal = calcularPontuacao(tabuleiroAtual);

    // Atualizar a pontuação do jogador
    pontuacaoTotal -= pontuacaoColuna;
    pontuacaoTotal += pontuacaoColuna;

    // Atualizar o tabuleiro do oponente
    if (outroTabuleiro && outroTabuleiro[linha]) {
      for (let i = 0; i < outroTabuleiro[linha].length; i++) {
        if (outroTabuleiro[linha][i] === numeroAleatorio) {
          outroTabuleiro[linha][i] = null;
        }
      }
    }

    // Reproduzir o áudio se disponível
    if (audio && typeof audio.play === 'function') {
      audio.play();
    }

    // Renderizar os tabuleiros após a atualização
    renderizarTabuleiro(tabuleiroAtual, jogadorId, outroTabuleiro, audio);
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
