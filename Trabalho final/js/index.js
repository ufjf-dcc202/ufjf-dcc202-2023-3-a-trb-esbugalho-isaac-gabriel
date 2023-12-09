// Função para criar um tabuleiro vazio 3x3
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
      celulaElemento.onclick = () => Clique(jogadorId, i, j);

      // Adicionar a célula à linha
      linhaElemento.appendChild(celulaElemento);
    }

    // Adicionar a linha ao tabuleiro
    tabuleiroElemento.appendChild(linhaElemento);
  }
}

// Função chamada quando uma célula é clicada
function Clique(jogadorId, linha, coluna) {
  // Obter o tabuleiro atual e o tabuleiro do jogador adversário
  const tabuleiroAtual = jogadorId === 1 ? jogador1Tabuleiro : jogador2Tabuleiro;
  const outroTabuleiro = jogadorId === 1 ? jogador2Tabuleiro : jogador1Tabuleiro;

  // Verificar se a célula está vazia
  if (!tabuleiroAtual[linha][coluna]) {
    // Gerar um número aleatório de 1 a 9 e atribuir à célula
    const numeroAleatorio = Math.floor(Math.random() * 9) + 1;
    tabuleiroAtual[linha][coluna] = numeroAleatorio;

    // Verificar se existe um número igual na linha do outro jogador
    for (let i = 0; i < outroTabuleiro.length; i++) {
      const linhaAdversario = outroTabuleiro[i];
      // Se houver um número igual, zerar toda a linha do adversário
      if (linhaAdversario.includes(numeroAleatorio)) {
        for (let j = 0; j < linhaAdversario.length; j++) {
          linhaAdversario[j] = 0;
        }
      }
    }
  }

  // Renderizar o tabuleiro atualizado na página
  renderizarTabuleiro(tabuleiroAtual, jogadorId);
}

// Criar os tabuleiros para os dois jogadores
let jogador1Tabuleiro = criarTabuleiro();
let jogador2Tabuleiro = criarTabuleiro();

// Inicialmente, renderizar os tabuleiros na página
renderizarTabuleiro(jogador1Tabuleiro, 1);
renderizarTabuleiro(jogador2Tabuleiro, 2);
