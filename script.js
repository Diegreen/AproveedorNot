function verificarAprovacao() {
    let nome = prompt("Digite o nome do aluno:");
    let presenca = parseInt(prompt("Digite a presença do aluno (0 a 10):"));
  
    // Verificar se o nome tem menos de 5 caracteres
    if (nome.length < 5) {
      return "Nome inválido!";
    }
  
    // Verificar se a presença é inválida
    if (presenca < 0 || presenca > 10 || isNaN(presenca)) {
      return "Presença inválida!";
    }
  
    let notas = [];
    for (let i = 1; i <= 10; i++) {
      let nota = parseFloat(prompt(`Digite a nota ${i} do aluno:`));
  
      // Verificar se alguma nota é inválida
      if (nota < 0 || nota > 10 || isNaN(nota)) {
        return "Nota inválida!";
      }
  
      notas.push(nota);
    }
  
    // Calcular a média das notas
    let somaNotas = notas.reduce((acc, nota) => acc + nota, 0);
    let media = somaNotas / notas.length;
  
    // Verificar se o aluno foi aprovado ou reprovado
    if (media >= 8 && presenca >= 6) {
      return `A nota do aluno ${nome} é de ${media.toFixed(2)} e sua presença é de ${presenca}: Aluno aprovado!`;
    } else {
      return `A nota do aluno ${nome} é de ${media.toFixed(2)} e sua presença é de ${presenca}: Aluno reprovado!`;
    }
  }
  
  // Exemplo de uso da função
  let resultado = verificarAprovacao();
  console.log(resultado);