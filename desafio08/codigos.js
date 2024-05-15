function dez(){
    let titulo = document.getElementById('titulo')
    let res = document.getElementById('res')
    let nome =prompt('Qual o produto você quer comprar?')
    let valor= Number(prompt(`Qual é o valor de ${nome}.`))
    let desconto = valor*10/100
    let menos10 = valor-desconto
    titulo.innerHTML =`Calulando desconte de 10% para ${nome}`
    res.innerHTML = `O preço original era R$ ${valor.toFixed(2)}.<br><br>Você acaba de ganhar R$ ${desconto.toFixed(2)} de desconto (-10%).<br><br>No fim, você vai pagar R$ ${menos10.toFixed(2)} no produto ${nome}.`
}   