//1

const pessoasConfirmadas: number = 20;
const mediaBebida: number = 300;
const volumeML: number = 2000;

const volumeTotal: number = pessoasConfirmadas * mediaBebida;
const garrafasNecessarias: number = Math.ceil(volumeTotal / volumeML);

console.log(`Serão necessárias ${garrafasNecessarias} garrafas de 2 litros para atender a demanda de ${pessoasConfirmadas} pessoas.`);






//2