//1

let pessoasConfirmadas: number = Number(prompt("Insira a quantidade de pessoas"));
const MEDIABEBIDA: number = 300;
const VOLUMEML: number = 2000;

const volumeTotal: number = pessoasConfirmadas * MEDIABEBIDA;
const garrafasNecessarias: number = Math.ceil(volumeTotal / VOLUMEML);

console.log(`Serão necessárias ${garrafasNecessarias} garrafas de 2 litros para atender a demanda de ${pessoasConfirmadas} pessoas.`);






//2