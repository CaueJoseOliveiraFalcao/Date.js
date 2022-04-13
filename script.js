
// Elemento sem Data previa
let r1 = document.querySelector('.resultado1')

const AtualH = new Date()
let horas = AtualH.getUTCHours()// pega o horario global
horas = AtualH.getHours()//pega o horario local
r1.innerHTML = horas

console.log(AtualH)

