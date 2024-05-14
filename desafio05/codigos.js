function converter(){
    let metros = Number(prompt('Digite o valor em metros (m)'))
    let titulo = document.getElementById('titulo')
    let res = document.getElementById('res')
    titulo.innerHTML = `A distancia de ${metros} metros, corresponde a...`
    res.innerHTML = `${metros/1000} quilometros (KM)<br><br>${metros/100} hectômetros (HM)<br><br>${metros*10} dêcametros (DAM)<br><br>${metros*100} centímetros (CM)<br><br>${metros*1000} mílimetros (MM)`
}