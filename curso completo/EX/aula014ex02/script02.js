function calcular() {
    var n = document.getElementById('taboada')
    var numero = Number(n.value)
    var res = document.getElementById('res')
    var c = 1
    if (numero.length == 0) {
        alert('Escreva um número.')
    } else {
        res.innerHTML = ' '
        for (numero; c <= 10; c++) {
            res.innerHTML += `${numero} x ${c} = ${numero * c}</br>`
        }
    }
}
