function notas() {
    var nome = prompt('Nome do aluno.')
    var nota1 = prompt(`Primeira nota de ${nome}`)
    var nota2 = prompt(`Segunda nota de ${nome}`)
    var n1 = Number(nota1)
    var n2 = Number(nota2)
    if (nota1 == "" || nota2 == "") {
        alert('Digite uma nota valida.')
    } else {
        let res = document.getElementById('res')
        let m = (n1 + n2) / 2
        let media = Number(m)
        let n = document.getElementById('nada')
        n.innerHTML = ""
        res.innerHTML = ""
        if (media > 6) {
            res.innerHTML = `A média de ${nome} é ${media}: <strong class="g"> APROVADO</strong>`
        } else if (media>3 && media <6){
            res.innerHTML = `A média de ${nome} é ${media}:  <strong class="y"> RECUPERÇÃO </strong>`
        } else {
            res.innerHTML = `A média de ${nome} é ${media}: <strong class="r"> REPROVADO </strong>` 

            
        }
    }
}