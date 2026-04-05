let mcdu:number = Number(prompt("Insira o valor:"));

let milhar = Math.floor(mcdu / 1000);
let centena = Math.floor((mcdu % 1000) / 100);
let dezena = Math.floor((mcdu % 100) / 10);
let unidade = mcdu % 10;



console.log(milhar);
console.log(centena);
console.log(dezena);
console.log(unidade);