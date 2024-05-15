function verificar() {
    let anterior = Number(prompt("Qual é o preço anterior do produto?"))
    let atual = Number(prompt("Qual é o preço atual do produto?"))
    let titulo = document.getElementById('titulo')
    let res = document.getElementById('res')
    let n = document.getElementById('nada')
    n.innerHTML = ""
    let anteriorme = atual-anterior.toFixed(2)
    let anteriorma = anterior - atual.toFixed(2)
    let porcentageanma = anteriorme/anterior*100
    let porcentageanme = anteriorma/atual*100

    titulo.innerHTML = "Analisando os valores informados..."
    if (anterior < atual) {
        res.innerHTML = `O produto custava R$ ${anterior.toFixed(2)} e agora custa R$ ${atual.toFixed(2)}.<br><br>Hoje o produto está mais caro.<br><br>O preço subiu R$ ${anteriorme} em relação ao preço anterior.<br><br>Uma variação de ${porcentageanma.toFixed(0)}% para cima.`
    } else{
        res.innerHTML = `O produto custava R$ ${anterior.toFixed(2)} e agora custa R$ ${atual.toFixed(2)}.<br><br>Hoje o produto está mais barato.<br><br>O preço caiu R$ ${anteriorma} em relação ao preço anterior.<br><br>Uma variação de ${porcentageanme.toFixed(0)}% para baixo.`
    }
}