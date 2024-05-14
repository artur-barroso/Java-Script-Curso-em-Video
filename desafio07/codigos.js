function conversor(){
    nada = document.getElementById('nada')
    nada.innerHTML = ""
    let rel = document.getElementById('real')
    let real = Number(rel.value)
    let titulo = document.getElementById('titulo')
    let num = real/5.14
    titulo.innerHTML = `Você tem U$${num.toFixed(2)}`
}