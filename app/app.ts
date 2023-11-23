import { negociacaoExterna } from "./models/negociacao.js";
import { NegociacaoControllers } from "./controllers/negociacao-controllers.js";

const negociacao = new negociacaoExterna(new Date(), 10, 100);
negociacao.data;                                                                                                    
console.log(negociacao.volume);

