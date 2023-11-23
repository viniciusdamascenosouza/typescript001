import { negociacaoExterna } from "./models/negociacao.js";

const negociacao = new negociacaoExterna(new Date(), 10, 100);
console.log(
  `A negociação foi realizada ${negociacao.data}, quantidade: ${negociacao.quantidade}, cada uma com valor de ${negociacao.valor}, totalizando ${negociacao.volume}`
);
