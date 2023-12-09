// Função para criar um tabuleiro vazio de 3x3
function criarTabuleiroVazio() {
  // Inicializa um array 3x3 preenchido com valores nulos
  const tabuleiro = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  return tabuleiro;
}

// Função para renderizar o tabuleiro na interface
function renderizarTabuleiro(tabuleiro, jogadorId) {
  // Obtém o elemento HTML do tabuleiro do jogador
  const tabuleiroElemento = document.getElementById(`jogador${jogadorId}-tabuleiro`);
  // Limpa o conteúdo do elemento
  tabuleiroElemento.innerHTML = '';

  // Loop para percorrer as linhas do tabuleiro
  for (let i = 0; i < tabuleiro.length; i++) {
    // Cria um elemento de linha para cada linha do tabuleiro
    const linhaElemento = document.createElement('div');
    linhaElemento.className = 'linha';

    // Loop para percorrer as colunas do tabuleiro
    for (let j = 0; j < tabuleiro[i].length; j++) {
      // Cria um elemento de célula para cada célula do tabuleiro
      const celulaElemento = document.createElement('div');
      celulaElemento.className = 'celula';
      
      // Define o texto da célula com o valor do tabuleiro ou uma string vazia se for nulo
      celulaElemento.innerText = tabuleiro[i][j] || '';
      
      // Adiciona um evento de clique para lidar com a interação do jogador
      celulaElemento.onclick = () => lidarClique(jogadorId, i, j);
      
      // Adiciona a célula à linha
      linhaElemento.appendChild(celulaElemento);
    }

    // Adiciona a linha ao tabuleiro
    tabuleiroElemento.appendChild(linhaElemento);
  }
}

// Função para lidar com o clique do jogador em uma célula
function lidarClique(jogadorId, linha, coluna) {
  // Obtém o tabuleiro do jogador atual
  const tabuleiroAtual = jogadorId === 1 ? jogador1Tabuleiro : jogador2Tabuleiro;

  // Se a célula estiver vazia, preenche com um número aleatório de 1 a 9
  if (!tabuleiroAtual[linha][coluna]) {
    tabuleiroAtual[linha][coluna] = Math.floor(Math.random() * 9) + 1;
  }

  // Atualiza a renderização do tabuleiro na interface
  renderizarTabuleiro(tabuleiroAtual, jogadorId);
}

// Inicialização dos tabuleiros e renderização inicial na interface
let jogador1Tabuleiro = criarTabuleiroVazio();
let jogador2Tabuleiro = criarTabuleiroVazio();
renderizarTabuleiro(jogador1Tabuleiro, 1);
renderizarTabuleiro(jogador2Tabuleiro, 2);
