let paginaAtual:number = Number(prompt("Insira a página atual:"));
let paginasTotais:number = Number(prompt("Insira o total de páginas do livro:"));


let porcentagemTotal:number = (paginaAtual / paginasTotais) * 100;

console.log("O total da porcentagem concluída é de:")
console.log(porcentagemTotal + "%");