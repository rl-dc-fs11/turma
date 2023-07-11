
// Crie uma função que recebe um valor e retornar se é Truthy

// function verificaValor(valor) {
    
//     const resposta = valor ? "É Truthy" : "É Falsy"

//     return resposta
// }

// const entrada = +prompt("digite um numero")
// const retorno = verificaValor(entrada);


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

// function perimetroQuadrado(lado) {

//     return lado * 4
// }

// alert(perimetroQuadrado(prompt("digite o lado de quadrado")))


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

// function nomeCompleto(nome, sobrenome) {
//     return nome+" "+sobrenome
// }


// alert(nomeCompleto("Ronier", "Lima"))

// Crie uma função que verifica se um número é par

// function ehPar(numero) {

//     const resto = numero % 2;

//     if(resto === 0) {
//         return true
//     } else {
//         return false
//     }

// }

// function ehPar(numero) {

//     return numero % 2 === 0

// }

// ehPar(5)

// ehPar(6)

// Crie uma função que retorne o tipo de
// dado do argumento passado nela


function queTipoEh(valor) {
    return typeof valor;
}

queTipoEh("string");

// Crie uma função que recebe dois parâmetros o 
// primeiro é um preço e o outro um valor de desconto e 
// retorna quanto fica o preço após o desconto

// function desconto(preco, percentualDesconto) {

//     let valorFinal = preco - (preco * percentualDesconto/100)

//     return valorFinal;
// }

// function desconto(preco, percentualDesconto) {

//     let valorFinal = preco * ((100 - percentualDesconto) /100)

//     return valorFinal;
// }

alert(desconto(1000, 30))



 







