function parinpar(n){
    if (n % 2 == 0){
        return "par"
    } else {
        return 'ímpar'
    }
}
let b = 233
let a = parinpar(b)
console.log(`O número ${b} é ${a}.`) 