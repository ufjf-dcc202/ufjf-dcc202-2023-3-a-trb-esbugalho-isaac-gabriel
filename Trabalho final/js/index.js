class JogoEsbugalhado {
  // Construtor da classe, chamado ao criar uma nova instância do jogo
  constructor() {
    // Inicializa os tabuleiros para ambos os jogadores
    this.tabuleiros = Array.from({ length: 2 }, () => this.criarTabuleiroVazio());
    // Renderiza os tabuleiros iniciais na interface
    this.renderizarTabuleiros();
  }

  // Função para criar um tabuleiro vazio de 3x3
  criarTabuleiroVazio() {
    return Array.from({ length: 3 }, () => Array(3).fill(null));
  }

  // Função para renderizar os tabuleiros na interface
  renderizarTabuleiros() {
    // Itera sobre os tabuleiros de ambos os jogadores
    this.tabuleiros.forEach((tabuleiro, jogadorId) => {
      // Obtém o elemento HTML do tabuleiro do jogador
      const tabuleiroElemento = document.getElementById(`jogador${jogadorId + 1}-tabuleiro`);
      // Limpa o conteúdo do elemento
      tabuleiroElemento.innerHTML = '';

      // Loop para percorrer as linhas do tabuleiro
      tabuleiro.forEach((linha, i) => {
        // Cria um elemento de linha para cada linha do tabuleiro
        const linhaElemento = document.createElement('div');
        linhaElemento.className = 'linha';

        // Loop para percorrer as colunas do tabuleiro
        linha.forEach((celula, j) => {
          // Cria um elemento de célula para cada célula do tabuleiro
          const celulaElemento = document.createElement('div');
          celulaElemento.className = 'celula';
          celulaElemento.innerText = celula || ''; // Define o texto da célula com o valor do tabuleiro ou uma string vazia se for nulo
          celulaElemento.onclick = () => this.lidarClique(jogadorId, i, j); // Adiciona um evento de clique para lidar com a interação do jogador
          linhaElemento.appendChild(celulaElemento);
        });

        // Adiciona a linha ao tabuleiro
        tabuleiroElemento.appendChild(linhaElemento);
      });
    });
  }

  // Função para lidar com o clique do jogador em uma célula
  lidarClique(jogadorId, linha, coluna) {
    // Determina o tabuleiro atual e o tabuleiro do oponente com base no jogador
    const tabuleiroAtual = this.tabuleiros[jogadorId];
    const tabuleiroOponente = this.tabuleiros[1 - jogadorId];

    // Gera um número aleatório de 1 a 9 e preenche a célula clicada
    if (!tabuleiroAtual[linha][coluna]) {
      tabuleiroAtual[linha][coluna] = Math.floor(Math.random() * 9) + 1;
    }

    // Se o valor na célula atual for igual ao do oponente, zera a linha correspondente no tabuleiro do oponente
    if (tabuleiroAtual[linha][coluna] === tabuleiroOponente[linha][coluna]) {
      tabuleiroOponente[linha].fill(0);
    }

    // Atualiza a renderização dos tabuleiros na interface
    this.renderizarTabuleiros();

    // Verifica se o jogo chegou ao fim
    if (tabuleiroAtual.every(linha => linha.every(celula => celula !== null))) {
      // Calcula a pontuação final de cada jogador
      const pontuacaoAtual = tabuleiroAtual.flat().reduce((acc, valor) => acc + (valor || 0), 0);
      const pontuacaoOponente = tabuleiroOponente.flat().reduce((acc, valor) => acc + (valor || 0), 0);

      // Exibe uma mensagem de pontuação final
      alert(`Pontuação Final:\nJogador Atual: ${pontuacaoAtual}\nJogador Oponente: ${pontuacaoOponente}`);

      // Reinicia o jogo
      this.reiniciarJogo();
    }
  }

  // Função para reiniciar o jogo
  reiniciarJogo() {
    // Cria tabuleiros vazios para ambos os jogadores
    this.tabuleiros = Array.from({ length: 2 }, () => this.criarTabuleiroVazio());
    // Atualiza a renderização dos tabuleiros na interface
    this.renderizarTabuleiros();
  }
}

// Cria uma instância do jogo
const jogo = new JogoEsbugalhado();
