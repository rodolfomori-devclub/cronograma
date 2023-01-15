const diasEl = document.getElementById("dias1")
const horasEl = document.getElementById("horas1")
const minutosEl = document.getElementById("minutos1")
const segundosEl = document.getElementById("segundos1")

function contadorDias(){
    const dataCurso = new Date("31 Jan 2023 20:00:00")
    const dataAtual = new Date()

    const totalSegundos = (dataCurso - dataAtual) / 1000
    const dias = Math.floor(totalSegundos / 3600 / 24)
    const horas = Math.floor(totalSegundos / 3600) % 24
    const minutos = Math.floor(totalSegundos / 60) % 60
    const segundos = Math.floor(totalSegundos) % 60

    diasEl.innerHTML = dias
    horasEl.innerHTML = formatacaoTempo(horas)
    minutosEl.innerHTML = formatacaoTempo(minutos)
    segundosEl.innerHTML = formatacaoTempo(segundos)
}

function formatacaoTempo(tempo){
    return tempo < 10 ? `0${tempo}` : tempo
}

contadorDias()
setInterval(contadorDias, 1000)
