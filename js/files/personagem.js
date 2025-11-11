// exportação nomeada
// import { Personagem } from ...
export class Personagem {
    constructor(nome, poder) {
        this.nome = nome;
        this.poder = poder;
    }

    getInfo() {
        return `${this.nome} - Poder: ${this.poder}`
    }
}
