function verificar() {
    let a = document.getElementById('ano')
    let ano = Number(a.value)
    let titulo = document.getElementById('titulo')
    let res = document.getElementById('res')
    let n = document.getElementById('nada')
    titulo.innerHTML = `Analizando o ano de ${ano}...`
    n.innerHTML = ""
    if (ano < 1000 || ano == "") {
        alert('Você tem certeza que isso é um ano?')
    } else if (ano % 100 == 0 && ano %400!= 0) {
        res.innerHTML = `O ano de ${ano} <strong class="c">Não é bissexto</strong>`
    } else if (ano %400== 0) {
        res.innerHTML = `O ano de ${ano} <strong class="b">é bissexto </strong>`
     }else{
         res.innerHTML = `O ano de ${ano} <strong class="b">é bissexto </strong>`
     }
}