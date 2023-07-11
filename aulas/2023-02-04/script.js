// document.body.innerText = "Bom dia"
const saudacao = document.getElementById("saudacao")

const horaMomento = new Date().getHours()
const nomeUsuario = "Ronier"

if(horaMomento < 12) {
    saudacao.innerText = "Bom dia"
} else if(horaMomento > 17) {
    saudacao.innerText = "Boa noite"
} else {
    saudacao.innerText = "Boa Tarde"
}

const lista = ["Ivan", "Ari", "Rangel", "Amar"]


// for (let i = 0; i < lista.length; i++) {
//     console.log(lista[i])
// }

function concatenaUM(valor) {
    alert(valor)
}

lista.forEach(concatenaUM)




