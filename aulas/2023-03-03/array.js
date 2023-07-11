const lista = ['Abacaxi', "caju", "benene", "damasco"]

// Essa função recebe um texto
function render(valorEmTexto) {

    //cria um elemento do tipo LI, nesse momento sem texto <li></li>
    const elementoLi = document.createElement('li')
    // Pegamos o elemento LI e inserimos o texto 
    // que a função recebe nele, <li>valorEmTexto</li>
    elementoLi.innerText = valorEmTexto

    // Buscamos o elemento <ul></ul> na pagina html pelo id e 
    // add o filho elemento Li 
    document.getElementById("lista").appendChild(elementoLi)
}

// Daqui 

function tudoMaiusculo(value) {

    return value.toUpperCase()
}

function mudaPara0() {

    return 0
}

function removePrimeiraLetra(palavra = "") {

    return palavra.charAt(0).toUpperCase() + palavra.slice(1)
}

// const listaModificada = lista.map(removePrimeiraLetra)
// // Até Aqui


// //Essa linha de código renderiza na tela a lista
// listaModificada.forEach(render)

function comecaComA(palavra) {

    // return palavra.charAt(0).toUpperCase() === "A"

    if (palavra.charAt(0).toUpperCase() === "A") {
        return true
    } else {
        return false
    }
}

function temANaPalavra(palavra = "") {

    const palavraMaiuscula = palavra.toUpperCase()

    if (palavraMaiuscula.includes("A")) {
        return true
    }
    else {
        return false
    }
}

const listaFiltrada = lista.filter(temANaPalavra)


listaFiltrada.forEach(render)




