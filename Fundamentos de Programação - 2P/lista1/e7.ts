let a:number = Number(prompt("Digite o primeiro valor"));
let b:number = Number(prompt("Digite o segundo valor"));

let c:number = 0;

c = a;
a = b;
b = c;

console.log("Valores trocados:");
console.log(a);
console.log(b);
