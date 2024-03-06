// switch(parametro){
//   case valor 1:
//      <bloco de declaracao>
//   case valor 2:
//      <bloco de declaracao>
// }

let nomeFilme = 'Vingadores'

switch(nomeFilme){
    case 'Vingadores':
        console.log('É o Vingadores')
        break
    case 'batman':
        console.log('É o Batman')
        break
    case 'Homem aranha':
        console.log('É o miranha')
        break
}

let notaFilme = 1

switch (notaFilme) {
    case 1:
    case 2:
        console.log('Filme Ruim')
        break;
    case 3:
    case 4:
        console.log('Filme medio')
        break;
    case 5:
        console.log('Filme Bom')
        break;
    default: 
        console.log('Nota invalida')
}