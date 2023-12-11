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
function Clique(jogadorId, linha, coluna) {
  let tabuleiroAtual;
  let outroTabuleiro;

  if (jogadorId === 1) {
    tabuleiroAtual = jogador1Tabuleiro;
    outroTabuleiro = jogador2Tabuleiro;
  } else {
    tabuleiroAtual = jogador2Tabuleiro;
    outroTabuleiro = jogador1Tabuleiro;
  }

  if (!tabuleiroAtual[linha][coluna]) {
    const numeroAleatorio = Math.floor(Math.random() * 9) + 1;
    tabuleiroAtual[linha][coluna] = numeroAleatorio;

    // Verificar se pelo menos um valor na linha do adversário é igual ao valor clicado
    const temValorIgual = outroTabuleiro[linha].some((numero) => numero === numeroAleatorio);

    if (temValorIgual) {
      // Se pelo menos um valor for igual, zera a linha do adversário
      for (let j = 0; j < outroTabuleiro[linha].length; j++) {
        outroTabuleiro[linha][j] = 0;
      }
    }
  }

  renderizarTabuleiro(tabuleiroAtual, jogadorId);
}


let jogador1Tabuleiro = criarTabuleiro();
let jogador2Tabuleiro = criarTabuleiro();

renderizarTabuleiro(jogador1Tabuleiro, 1);
renderizarTabuleiro(jogador2Tabuleiro, 2);





