function calcular(){
    let a = Number(prompt('Qual é o valor de a?'))
    let b = Number(prompt('Qual é o valor de b?'))
    let c = Number(prompt('Qual é o valor de c?'))
    let calculo = b**2 - 4 *a*c
    let res = document.getElementById('nada')
    res.innerHTML = ''
    res.innerHTML = `O cálculo atual é <strong>${a}x² + ${b}x + ${c} = 0</strong> <br><br>O calculo realizado será <strong> Δ = ${b}² -4 . 3 . 2</strong><br><br>O valor calculado foi <strong> Δ = ${calculo}</strong>`

}