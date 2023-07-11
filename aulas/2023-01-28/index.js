function checarIMC() {
    const altura = prompt('Digite sua altura')
    const peso = prompt('Digite seu peso')

    const imc = (+peso) / (+altura) ** 2

    let classificacao;
  
    if (imc >= 40) classificacao = 'OBESIDADE GRAVE'
    else if (imc >= 30 && imc < 40) classificacao = 'OBESIDADE'
    else if (imc >= 25 && imc < 30) classificacao = 'SOBREPESO'
    else if (imc >= 18.5 && imc < 25) classificacao = 'NORMAL'
    else classificacao = 'MAGREZA'

    return alert(`Seu imc é ${imc.toFixed(2)} e sua classificação é ${classificacao}`)
}

function maiorIdade() {
    const idade = prompt('Digite sua idade')

    if (idade >= 18) {
        alert(`Você tem ${idade} anos então já pode beber`)
    }
    else {
        alert(`Seu imc é ${imc.toFixed(2)} e sua classificação é ${classificacao}`)
    }
}

function maiorEntreDois() {
    const primeiroNumero = prompt('Digite um número')
    const segundoNumero = prompt('Digite um outro número')

    alert(`O maior número entre ${primeiroNumero} e ${segundoNumero} é o ${Math.max(primeiroNumero, segundoNumero)}`)

}
