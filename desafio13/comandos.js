function notas() {
    var nome = prompt('Nome do aluno.')
    var nota1 = prompt(`Primeira nota de ${nome}`)
    var nota2 = prompt(`Segunda nota de ${nome}`)
    var n1 = Number(nota1)
    var n2 = Number(nota2)
    var re = sit.innerHTML = "Reprovado"
    if (nota1 == "" || nota2 == "") {
        alert('Digite uma nota valida.')
    } else {
        let res = document.getElementById('res')
        let m = (n1 + n2) / 2
        let media = Number(m)
        if (media > 6) {
            sit.style.color = "green";
            res.innerHTML = `A média de ${nome} é ${media}: `
            sit.innerHTML = 'APROVADO.'
        } else if (media>3 && media <6){
            sit.style.color = "yellow";
            res.innerHTML = `A média de ${nome} é ${media}`
            sit.innerHTML = "RECUPERAÇÃO"
        } else {
            sit.style.color = "red";
            res.innerHTML = `A média de ${nome} é ${media}` 
            sit.innerHTML = 'REPROVADO.'
            
        }
    }
}