import { negociacaoExterna } from "./models/negociacao.js";

const negociacao = new negociacaoExterna(new Date());
console.log(negociacao.volume)