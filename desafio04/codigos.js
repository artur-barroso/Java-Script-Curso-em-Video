function desafio() {
    let nome = prompt('Qual é o seu nome?')
    let idade = prompt(`Quantos anos você tem ${nome}?`)
    if (idade == "" || nome == "") {
        alert('Você esqueceu de prencher os parametros.')
    } else {
        let fom = alert(`Eu acabei de conhecer ${nome}, que tem ${idade} anos de idade!`)
    }
}