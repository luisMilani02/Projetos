/* 
    function nomeDaFunca(){
        <bloco de execucao>
    }

    nomeDaFuncao()
*/

/*
function nomeDaFunca(parametro1, parametro2){
    <blo
    co de execucao>
}

nomeDaFuncao(parametro1, parametro2)
*/


function incentivar(nomeUsuario = 'Quester'){
    alert('parabens ' + nomeUsuario + '! Você já está aqui')
}

incentivar('Luis')



function soma(numero1, numero2){
    return numero1 + numero2
}

let resultadosDaSoma = soma(1, 3)
console.log(resultadosDaSoma)

resultadosDaSoma = soma(resultadosDaSoma, 10)
console.log(resultadosDaSoma)