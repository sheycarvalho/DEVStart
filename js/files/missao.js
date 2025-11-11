export class Missao {
    constructor(titulo) {
        this.titulo = titulo;
        this.herois = [];
    }

    adicionarHeroi(heroi) {
        this.herois.push(heroi)
    }

    forcaDaEquipe() {
        let total = this.herois.reduce(function (contador, heroi) {
            return contador + heroi.calcularMediaPontos()
        }, 0)

        return total;
    }

    getResumo() {
        console.log(`Missão: ${this.titulo}`)
        // this.herois.getInfo()
        console.log(`🔥 Força total: ${this.forcaDaEquipe()}`)
    }
}
