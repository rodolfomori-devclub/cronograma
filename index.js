// const diasEl = document.getElementById("dias")
// const horasEl = document.getElementById("horas")
// const minutosEl = document.getElementById("minutos")
// const segundosEl = document.getElementById("segundos")

// const diasEl1 = document.getElementById("dias1")
// const horasEl1 = document.getElementById("horas1")
// const minutosEl1 = document.getElementById("minutos1")
// const segundosEl1 = document.getElementById("segundos1")

// function contadorDias(){
//     const dataCurso = new Date("31 Jan 2023 19:00:00")
//     const dataAtual = new Date()

//     const totalSegundos = (dataCurso - dataAtual) / 1000
//     const dias = Math.floor(totalSegundos / 3600 / 24)
//     const horas = Math.floor(totalSegundos / 3600) % 24
//     const minutos = Math.floor(totalSegundos / 60) % 60
//     const segundos = Math.floor(totalSegundos) % 60

//     diasEl.innerHTML = dias
//     horasEl.innerHTML = formatacaoTempo(horas)
//     minutosEl.innerHTML = formatacaoTempo(minutos)
//     segundosEl.innerHTML = formatacaoTempo(segundos)
// }
// // function contadorDias2(){

// //     const totalSegundos = (dataCurso - dataAtual) / 1000
// //     const dias = Math.floor(totalSegundos / 3600 / 24)
// //     const horas = Math.floor(totalSegundos / 3600) % 24
// //     const minutos = Math.floor(totalSegundos / 60) % 60
// //     const segundos = Math.floor(totalSegundos) % 60

// //     diasEl1.innerHTML = dias
// //     horasEl1.innerHTML = formatacaoTempo(horas)
// //     minutosEl1.innerHTML = formatacaoTempo(minutos)
// //     segundosEl1.innerHTML = formatacaoTempo(segundos)
// // }


// function formatacaoTempo(tempo){
//     return tempo < 10 ? `0${tempo}` : tempo
// }
// contadorDias()
// // contadorDias2()
// setInterval(contadorDias, 1000)
