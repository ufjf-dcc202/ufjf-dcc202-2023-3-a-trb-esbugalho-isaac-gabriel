// Função para criar um tabuleiro vazio de 3x3
function criarTabuleiroVazio() {
  return Array.from({ length: 3 }, () => Array(3).fill(null));
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
  // Determina o tabuleiro atual e o tabuleiro do oponente com base no jogador
  const tabuleiroAtual = jogadorId === 1 ? jogador1Tabuleiro : jogador2Tabuleiro;
  const tabuleiroOponente = jogadorId === 1 ? jogador2Tabuleiro : jogador1Tabuleiro;

  // Gera um número aleatório de 1 a 9 e preenche a célula clicada
  if (!tabuleiroAtual[linha][coluna]) {
    tabuleiroAtual[linha][coluna] = Math.floor(Math.random() * 9) + 1;
  }

  // Se o valor na célula atual for igual ao do oponente, zera a linha correspondente no tabuleiro do oponente
  if (tabuleiroAtual[linha][coluna] === tabuleiroOponente[linha][coluna]) {
    tabuleiroOponente[linha].fill(0);
  }

  // Atualiza a renderização dos tabuleiros na interface
  renderizarTabuleiro(jogador1Tabuleiro, 1);
  renderizarTabuleiro(jogador2Tabuleiro, 2);

  // Verifica se o jogo chegou ao fim
  if (tabuleiroAtual.every(linha => linha.every(celula => celula !== null))) {
    // Calcula a pontuação final de cada jogador
    const pontuacaoJogador1 = tabuleiroAtual.flat().reduce((acc, valor) => acc + (valor || 0), 0);
    const pontuacaoJogador2 = tabuleiroOponente.flat().reduce((acc, valor) => acc + (valor || 0), 0);

    // Exibe uma mensagem de pontuação final
    alert(`Pontuação Final: \nJogador 1: ${pontuacaoJogador1}\nJogador 2: ${pontuacaoJogador2}`);

    // Reinicia o jogo
    reiniciarJogo();
  }
}

// Função para reiniciar o jogo
function reiniciarJogo() {
  // Cria tabuleiros vazios para ambos os jogadores
  jogador1Tabuleiro = criarTabuleiroVazio();
  jogador2Tabuleiro = criarTabuleiroVazio();
  // Atualiza a renderização dos tabuleiros na interface
  renderizarTabuleiro(jogador1Tabuleiro, 1);
  renderizarTabuleiro(jogador2Tabuleiro, 2);
}

// Inicialização dos tabuleiros e renderização inicial na interface
let jogador1Tabuleiro = criarTabuleiroVazio();
let jogador2Tabuleiro = criarTabuleiroVazio();
renderizarTabuleiro(jogador1Tabuleiro, 1);
renderizarTabuleiro(jogador2Tabuleiro, 2);
