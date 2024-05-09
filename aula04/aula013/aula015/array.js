let num = [8,1,7,4,2,9]
let artur = 'bora ali'
artur.toUpperCase()
console.log(artur.toUpperCase())
// console.log(`Nosso vetor é o : ${num}`)
// num[3]= 6
// console.log(`Colocando o número 6 na posição 3: ${num}`)
// num.push(7)
// console.log(`Colocando o número 7 na ultima posição${num}`)
// console.log(`O vetor tem ${num.length} números`)
// console.log(`O vetor em ordem crescente fica assim? ${num.sort()}`)

// for (let pos=0;pos<num.length;pos++){
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
// }
// console.log('Fim, acabou, mete o pé meu jovem ')

for (pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
var t = (num.indexOf(8))
if (t<0){
    console.log('Esse valor não está na lista')
} else{
    console.log(`O valoror está na posição ${t}`)
}
