function ajuste(){
    let nome = prompt('Qual o nome do funcionario?')
    let atual = Number(prompt(`Qual é o salario atual de ${nome}?`))
    let ajuste = Number(prompt(`O salario de ${nome} var ser reajustado em quantos porcento?`))
    let desconto = atual*ajuste/100
    let total = desconto+atual
    let titulo = document.getElementById('titulo')
    let res = document.getElementById('res')
    titulo.innerHTML = `${nome} recebeu um aumento salarial!!`
    res.innerHTML = `O salário atual era de R$ ${atual.toFixed(2)}.<br><br>Com um aumento  de ${ajuste}%, o salário vai aumentar R$ ${desconto.toFixed(2)} no proximo mês<br><br>E a partir daí, ${nome} vai passar a ganhar R$ ${total.toFixed(2)}`
}