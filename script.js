/* Solicita a idade do usuário e guarda na variável idadeStr
   no formato string (é necessário converter para inteiro depois) */
let idadeStr = prompt("Qual é a idade no documento?");

// Converte idadeStr para um número inteiro e guarda na variável idade
let idade = parseInt(idadeStr);

console.log("A idade que o sujeito informou foi: " + idade);

// Caso a idade seja maior ou igual a 18, deixa o cara entrar na festa!
if (idade >= 18) {
  console.log("O sujeito é maior de idade");
  alert("Pode entrar!");
} else {
  console.log("O sujeito é menor de idade");
  alert("Vai pra casa!");
}