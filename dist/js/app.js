import { negociacaoExterna } from "./models/negociacao.js";
const negociacao = new negociacaoExterna(new Date(), 10, 100);
negociacao.data;
console.log(negociacao.volume);
