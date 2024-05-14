function contador(){
    let n = prompt('Digitem um número')
    let num = Number(n)
    alert(`Antes de ${num}, temos o número ${num-1}\nE depois de ${num}, temos o número ${num+1}.`)
    let res = document.getElementById('res')
    res.innerHTML = `Antes de ${num}, temos o número ${num-1}<br>E depois de ${num}, temos o número ${num+1}.`
}
