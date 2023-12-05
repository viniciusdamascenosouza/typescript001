import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> {
        return [...this.negociacoes];
    }

}

const negociacoes = new Negociacoes();
negociacoes.lista().forEach(n => {
    n.volume;
})