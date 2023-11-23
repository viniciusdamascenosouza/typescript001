import { negociacaoExterna } from "./models/negociacao.js";

const negociacao = new negociacaoExterna(new Date(), 10, 100);
 console.log(negociacao);
 negociacao.quantidade = 1000;
 console.log(negociacao);