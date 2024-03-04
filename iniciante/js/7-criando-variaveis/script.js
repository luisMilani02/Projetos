var nomeCliente = prompt("Qual o seu nome?")

var emailCliente = prompt("Qual o seu email?")

let telefoneCliente = prompt("Qual o seu telefone?")

// emailCliente = "sergiogameplay321@gmail.com"

let pergunta = confirm("Seu nome é: "+nomeCliente+", seu email é: "+emailCliente +", seu telefone é: "+ telefoneCliente+"?")

function mudacor() {
    var corzinha = document.getElementById('cor').value;
    document.getElementById('titulo').style['color'] = corzinha;
}

