function troco(){
    let produto = prompt('Qual produto você quer comprar?')
    let valor = Number(prompt(`Qual é o valor de ${produto}?`))
    let pago = Number(prompt(`O valor de ${produto} é R$${valor}\nCom quantos reais você vai pagar?`))
    let res = document.getElementById('res')
    res.innerHTML = `Você recebera R$${pago-valor} de troco.`
    
}