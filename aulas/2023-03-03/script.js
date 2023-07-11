document.querySelector("#calcular").addEventListener("click", function(e) {
    e.preventDefault(   )
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    var progresso = document.getElementById("progresso");

    var imc = peso / (altura * altura);
  
    var faixa;
    var mensagem;
    var alerta;
    var porcentagemProgresso;
    var idRow;
    var estiloRow;
    var porcentagemEstilo;
  
    if (imc < 18.5) {
      faixa = "Abaixo do peso";
      mensagem = "Seu IMC é " + imc.toFixed(2);
      porcentagemProgresso = 'width: 20%'
      porcentagemEstilo = 'bg-primary'
      idRow = "magreza"
      estiloRow = "table-primary"
      alerta = "alert alert-primary";
       
    } else if (imc < 25) {
      faixa = "Peso normal";
      mensagem = "Seu IMC é " + imc.toFixed(2);
      porcentagemProgresso = 'width: 40%'
      idRow = "normal"
      estiloRow = "table-success"
      porcentagemEstilo = 'bg-success'

      alerta = "alert alert-success";
    } else if (imc < 30) {
      faixa = "Sobrepeso";
      mensagem = "Seu IMC é " + imc.toFixed(2) + ". Você está com sobrepeso.";
      alerta = "alert alert-info";
    } else if (imc < 35) {
      faixa = "Obesidade grau 1";
      mensagem = "Seu IMC é " + imc.toFixed(2) + ". Você está com obesidade grau 1.";
      alerta = "alert alert-warning";
    } else if (imc < 40) {
      faixa = "Obesidade grau 2";
      mensagem = "Seu IMC é " + imc.toFixed(2) + ". Você está com obesidade grau 2.";
      alerta = "alert alert-danger";
    } else {
      faixa = "Obesidade grau 3";
      mensagem = "Seu IMC é " + imc.toFixed(2) + ". Você está com obesidade grau 3.";
      alerta = "alert alert-danger";
    }
    progresso.style = porcentagemProgresso
    progresso.classList.add(porcentagemEstilo)
    document.getElementById(idRow).classList.add(estiloRow)
    var resultado = document.querySelector("#resultado");
    resultado.innerHTML = "<div class='" + alerta + "'>" + "<h4>Classificação do IMC: " + faixa + "</h4>" + "<p>" + mensagem + "</p>" + "</div>";
  });
  