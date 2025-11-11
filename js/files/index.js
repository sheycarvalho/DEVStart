// personagem
// heroi
// missão
// liga
// import, export ....
// import { Personagem } from './personagem.js'
// let batman = new Personagem("Batman", "Filantropia noturna e planejamento exagerado") //  classe (model) => objeto
// -------
import { Heroi } from './heroi.js'
import { Missao } from './missao.js'

// let batman = new Heroi(
//     "Batman",
//     "Filantropia noturna e planejamento exagerado",
//     [100, 54, 23, 33, 55, 180]
// )

// let flash = new Heroi("Flash", "Entrega antes do prazo", [60, 80, 90, 95, 100])

// console.log(batman)
// console.log(batman.getInfo())
// console.log(batman.calcularMediaPontos())
// console.log(batman.classificar())

// console.log(flash.calcularMediaPontos())
// console.log(flash.classificar())
const herois = [
    { nome: "Batman", poder: "Filantropia noturna", pontos: [80, 95, 88, 100, 60] },
    { nome: "Homem de Ferro", poder: "Riqueza infinita", pontos: [90, 92, 85, 70, 100] },
    { nome: "Hulk", poder: "Raiva produtiva", pontos: [60, 80, 90, 95, 100] },
    { nome: "Flash", poder: "Entrega antes do prazo", pontos: [100, 98, 95, 97, 99] },
    { nome: "Homem-Aranha", poder: "Procrastinação com estilo", pontos: [70, 75, 85, 60, 80] },
];

let missao = new Missao("Projeto Liga de Herois")

herois.forEach(function (heroi) {
    let heroiObjeto = new Heroi(heroi.nome, heroi.poder, heroi.pontos)

    missao.adicionarHeroi(heroiObjeto)
})

missao.getResumo()
