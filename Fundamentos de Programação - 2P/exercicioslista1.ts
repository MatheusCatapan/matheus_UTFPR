//1

let entradaMl: string | null = prompt("Digite a quantidade em ML");

if (entradaMl == null) {
    console.error("Insira uma entrada válida");
} else {
    let quantidadeMl: number = Number(entradaMl);

    let quantidadeGotas: number = quantidadeMl * 20;

    console.log(`Uma solução de ${quantidadeMl} equivale a ${quantidadeGotas}`);
    }





//2

let entrada1: string | null = prompt("Digite a primeira nota")
let entrada2: string | null = prompt("Digite a segunda nota")
let entrada3: string | null = prompt("Digite a terceira nota")
let entrada4: string | null = prompt("Digite a quarta nota")
let entrada1X: number = Number(entrada1);
let entrada2X: number = Number(entrada2);
let entrada3X: number = Number(entrada3);
let entrada4X: number = Number(entrada4);

if (entrada1 == null || entrada2 == null || entrada3 == null || entrada4 == null) {
    console.error("Insira uma entrada válida");
} else {
    let media: number = (entrada1X * 0.1) + (entrada2X * 0.2) + (entrada3X * 0.3) + (entrada4X * 0.4);

    console.log(`A média ponderada é ${media}`);
    }





//3


//entrada
let entrada: string | null = prompt("Digite um número");

//transforma a entrada em número
let horasAula: number = Number(entrada);

//transforma em horas relogio
let horasRelogio = (horasAula * 50) / 60;

console.log(`O número de horas de relógio é ${horasRelogio}`);




//4

//entrada

let e1: string | null = prompt("Digite a página atual");
let e2: string | null = prompt("Digite o total de páginas");

//transforma em numeros

let paginaAtual: number = Number(e1);
let totalPaginas: number = Number(e2);

//calcula o percentual concluido

let percentualConcluido: number = (paginaAtual / totalPaginas) * 100;

console.log(`O percentual concluído é ${percentualConcluido}%`);




//5

//entrada
let e3: string | null = prompt("Digite o valor do produto");
let valorProduto: number = Number(e3);

//calcula o valor do desconto
let valorDescontado: number = valorProduto * 0.65;

console.log(`O valor do produto com desconto é ${valorDescontado}`);





//6

//entrada
let valor: string | null = prompt("Digite o valor do produto");
let salario = Number(valor);

//calcula aumento

let salarioAumentado: number = salario * 1.125;

//imprime a
console.log(`O valor do produto com aumento é ${salarioAumentado}`);
