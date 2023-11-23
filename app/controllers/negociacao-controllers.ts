import { negociacaoExterna } from "../models/negociacao.js";

export class NegociacaoController {
    private inputData;
    private inputQuantidade;
    private inputValor;

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }

    adiciona() {
        const negociacao = new negociacaoExterna(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        console.log(negociacao);
    }
}