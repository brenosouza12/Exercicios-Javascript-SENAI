// Função para gerar um número aleatório entre 1 e 20
function rolarD20() {
    return Math.floor(Math.random() * 20) + 1;
  }
  
  // Solicitar o número de jogadores
  let numJogadores = Number(prompt("Digite o número de jogadores:"));
  
  // Vetores para armazenar os dados de cada jogador
  let jogadores = [];
  let pontuacoes = [];
  
  // Loop para cada jogador
  for (i = 0; i < numJogadores; i++) {
    let jogador = prompt("Digite o nome do jogador " + (i + 1) + ":");
    let jogadas = [];
    
    // Loop para cada jogada
    for ( j = 0; j < 4; j++) {
       let jogada = 0;
      
      // Loop para garantir que o valor digitado esteja entre 1 e 20
      while (jogada < 1 || jogada > 20) {
        jogada = Number(prompt("Jogador " + jogador + ", digite o valor da jogada " + (j + 1) + ":"));
      }
      
      jogadas.push(jogada);
    }
    
    jogadores.push(jogador);
    pontuacoes.push(jogadas[1] + jogadas[2]);
  }
  
  // Exibir pontuações dos jogadores e suas posições
  alert("Pontuações dos jogadores:");
  for (var i = 0; i < numJogadores; i++) {
    alert(jogadores[i] + ": " + pontuacoes[i]);
  }
  