var audio = new Audio('js/audio_file.mp3');

function criarTabuleiro() {
  const tabuleiro = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  return tabuleiro;
}

function renderizarTabuleiro(tabuleiro, jogadorId) {
  const tabuleiroElemento = document.getElementById(`jogador${jogadorId}-tabuleiro`);
  tabuleiroElemento.innerHTML = '';

  for (let i = 0; i < tabuleiro.length; i++) {
    const linhaElemento = document.createElement('div');
    linhaElemento.className = 'linha';

    for (let j = 0; j < tabuleiro[i].length; j++) {
      const celulaElemento = document.createElement('div');
      celulaElemento.className = 'celula';

      celulaElemento.innerText = tabuleiro[i][j] || '';

      celulaElemento.onclick = function () {
        Clique(jogadorId, i, j);
      };

      linhaElemento.appendChild(celulaElemento);
    }

    tabuleiroElemento.appendChild(linhaElemento);
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

function verificarVencedor(tabuleiro, jogadorId, jogadas) {
  if (jogadas === 6) {
    const pontuacaoAtual = calcularPontuacao(tabuleiro);
    alert('Jogador ' + jogadorId + ' venceu com ' + pontuacaoAtual + ' pontos.');
  }
}

function Clique(jogadorId, linha, coluna) {
  let tabuleiroAtual;
  let outroTabuleiro;

  if (jogadorId === 1) {
    tabuleiroAtual = jogador1Tabuleiro;
    outroTabuleiro = jogador2Tabuleiro;
    jogador1Jogadas++;
  } else {
    tabuleiroAtual = jogador2Tabuleiro;
    outroTabuleiro = jogador1Tabuleiro;
    jogador2Jogadas++;
  }

  if (!tabuleiroAtual[linha][coluna]) {
    const numeroAleatorio = Math.floor(Math.random() * 9) + 1;
    tabuleiroAtual[linha][coluna] = numeroAleatorio;

    const ValorIgual = outroTabuleiro[linha].includes(numeroAleatorio);

    if (ValorIgual) {
      for (let j = 0; j < outroTabuleiro[linha].length; j++) {
        outroTabuleiro[linha][j] = 0;
      }
    }

    audio.play();
  }

  renderizarTabuleiro(tabuleiroAtual, jogadorId);

  if (jogadorId === 1) {
    verificarVencedor(tabuleiroAtual, jogadorId, jogador1Jogadas);
  } else {
    verificarVencedor(tabuleiroAtual, jogadorId, jogador2Jogadas);
  }
}

let jogador1Tabuleiro = criarTabuleiro();
let jogador2Tabuleiro = criarTabuleiro();
let jogador1Jogadas = 0;
let jogador2Jogadas = 0;

renderizarTabuleiro(jogador1Tabuleiro, 1);
renderizarTabuleiro(jogador2Tabuleiro, 2);
