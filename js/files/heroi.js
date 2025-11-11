import { Personagem } from './personagem.js'
// extends [nome da classe]
export class Heroi extends Personagem {
    constructor(nome, poder, pontos) {
        // super()
        super(nome, poder)
        this.pontos = pontos; // [1,2,3]
    }

    // calcularMediaPontos
    calcularMediaPontos() {
        // ordenar
        let pontosOrdenados = []
        // sort
        if (this.pontos) {
            pontosOrdenados = this.pontos.sort(function (a, b) {
                return a - b
            })
        }
        // 5 - fatiar essa lista
        // slice
        let pontosValidos = pontosOrdenados.slice(0, 5)

        let soma = pontosValidos.reduce(function (contador, ponto) {
            return contador + ponto
        }, 0)

        return soma / pontosValidos.length
    }
    // classificar
    classificar() {
        let media = this.calcularMediaPontos()

        if (media <= 30) {
            return "Iniciante"
        }

        if (media <= 70) {
            return "Intermediário";
        }

        return "Lendário";

    }
    // getResumo
}
