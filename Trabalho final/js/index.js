// Crie uma variável global para o elemento de áudio
var audio = new Audio('js/audio_file.mp3');

// Função para criar um novo tabuleiro com valores nulos
function criarTabuleiro() {
  const tabuleiro = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  return tabuleiro;
}

// Função para renderizar o tabuleiro na página HTML
function renderizarTabuleiro(tabuleiro, jogadorId) {
  // Obter o elemento do tabuleiro com base no jogadorId
  const tabuleiroElemento = document.getElementById(`jogador${jogadorId}-tabuleiro`);
  // Limpar o conteúdo atual do elemento
  tabuleiroElemento.innerHTML = '';

  // Iterar sobre as linhas do tabuleiro
  for (let i = 0; i < tabuleiro.length; i++) {
    // Criar um elemento div para representar uma linha
    const linhaElemento = document.createElement('div');
    linhaElemento.className = 'linha';

    // Iterar sobre as colunas da linha
    for (let j = 0; j < tabuleiro[i].length; j++) {
      // Criar um elemento div para representar uma célula
      const celulaElemento = document.createElement('div');
      celulaElemento.className = 'celula';

      // Atribuir o texto da célula com o valor presente no tabuleiro ou uma string vazia se for nulo
      celulaElemento.innerText = tabuleiro[i][j] || '';

      // Associar a função Clique ao evento de clique da célula
      celulaElemento.onclick = function () {
        Clique(jogadorId, i, j);
      };

      // Adicionar a célula à linha
      linhaElemento.appendChild(celulaElemento);
    }

    // Adicionar a linha ao tabuleiro
    tabuleiroElemento.appendChild(linhaElemento);
  }
}

// Função para calcular a pontuação total do tabuleiro
function calcularPontuacao(tabuleiro) {
  let pontuacao = 0;
  for (let i = 0; i < tabuleiro.length; i++) {
    for (let j = 0; j < tabuleiro[i].length; j++) {
      pontuacao += tabuleiro[i][j];
    }
  }
  return pontuacao;
}

// Função para verificar se um jogador atingiu a pontuação máxima
function verificarVencedor(tabuleiro, jogadorId, jogadas) {
  if (jogadas === 6) {
    const pontuacaoAtual = calcularPontuacao(tabuleiro);
    alert('Jogador ' + jogadorId + ' venceu com ' + pontuacaoAtual + ' pontos.');
  }
}

// Função chamada quando uma célula é clicada
function Clique(jogadorId, linha, coluna) {
  let tabuleiroAtual;
  let outroTabuleiro;

  // Determinar qual tabuleiro e jogadas pertencem ao jogador atual e ao adversário
  if (jogadorId === 1) {
    tabuleiroAtual = jogador1Tabuleiro;
    outroTabuleiro = jogador2Tabuleiro;
    jogador1Jogadas++;
  } else {
    tabuleiroAtual = jogador2Tabuleiro;
    outroTabuleiro = jogador1Tabuleiro;
    jogador2Jogadas++;
  }

  // Verificar se a célula está vazia
  if (!tabuleiroAtual[linha][coluna]) {
    // Gerar um número aleatório e atribuir à célula atual
    const numeroAleatorio = Math.floor(Math.random() * 9) + 1;
    tabuleiroAtual[linha][coluna] = numeroAleatorio;

    // Verificar se pelo menos um valor na linha do adversário é igual ao valor clicado
    const ValorIgual = outroTabuleiro[linha].includes(numeroAleatorio);

    // Se pelo menos um valor for igual, zera a linha do adversário
    if (ValorIgual) {
      for (let j = 0; j < outroTabuleiro[linha].length; j++) {
        outroTabuleiro[linha][j] = 0;
      }
    }

    // Reproduzir o áudio
    audio.play();
  }

  // Atualizar a representação visual do tabuleiro
  renderizarTabuleiro(tabuleiroAtual, jogadorId);

  // Verificar se há um vencedor
  if (jogadorId === 1) {
    verificarVencedor(tabuleiroAtual, jogadorId, jogador1Jogadas);
  } else {
    verificarVencedor(tabuleiroAtual, jogadorId, jogador2Jogadas);
  }
}

// Inicializar os tabuleiros e contadores de jogadas
let jogador1Tabuleiro = criarTabuleiro();
let jogador2Tabuleiro = criarTabuleiro();
let jogador1Jogadas = 0;
let jogador2Jogadas = 0;

// Renderizar os tabuleiros na página
renderizarTabuleiro(jogador1Tabuleiro, 1);
renderizarTabuleiro(jogador2Tabuleiro, 2);
