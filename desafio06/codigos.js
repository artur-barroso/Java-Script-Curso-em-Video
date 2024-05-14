function conversor(){
    let graus =Number(prompt('Digite a temperatura em graus'))
    let titulo = document.getElementById('titulo')
    let res = document.getElementById('res')
    titulo.innerHTML = `A temperatura de ${graus}°C corresponde a...`
    res.innerHTML = `${graus+273.15}°K (Kelvin) <br><br> ${graus*1.8+32}°F (Farenheits)`
}