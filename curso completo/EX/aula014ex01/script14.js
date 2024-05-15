function contar() {
    var i = document.getElementById('inico')
    var inicio = Number(i.value)
    var f = document.getElementById('fim')
    var fim = Number(f.value)
    var p = document.getElementById('passo')
    var passo = Number(p.value)
    var res = document.getElementById('res')
    res.innerHTML = ''
    if (passo == 0) {
        alert('Não consigo contar com o passo 0, então seu valor passa a ser 1')
        passo = 1
    }
     else if (inicio.length == 0 || fim.length == 0) {
        res.innerHTML = 'Não posso contar'
        alert('Com os valores iguais a 0 não posso contar.')
    } else {
        for (c = inicio; c <= fim; c += passo) {
            res.innerHTML += c + ' \u{27A1} '

        }
    }
    if (inicio > fim) {
        for (c = inicio; c >= fim; c -= passo) {
            res.innerHTML += c + ' \u{27A1}  '

        }
    }
    res.innerHTML += '\u{2705} '


}
