function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value == 0) {
        alert('[Erro] Você não nasceu no ano 0?')
    } else if (fano.value > ano) {
        alert(`[ERRO]Nos estamos no ano de ${ano}, como você nasceu no ano de ${fano.value}?`)
    } else {
        var msex = document.getElementById('mas')
        var fsex = document.getElementById('fem')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (msex.checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','criança-homem.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','menino.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','homem.jpg')
            } else {
                //idoso
                img.setAttribute('src','idoso.jpg')
            }
        } else if (fsex.checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','criança-menina.jpg')

            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','menina.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src','idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}