function contar(){
    var res  = document.getElementById('res')
    res.innerHTML = ''
    var c = 10
    var lista= []
    for ( c=10; c>=1 ;c--){
        lista.push(` ${c} `);
        if (c==1){
            lista.push('fim')
        }
    }
    res.innerHTML += lista
}