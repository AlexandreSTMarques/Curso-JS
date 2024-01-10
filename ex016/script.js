function contar(){
    let inicio = document.getElementById ('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resul = document.getElementById('resul')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        resul.innerHTML = 'Impossível contar'
       //window.alert('[ERRO] faltam dados!')
    } else {
        resul.innerHTML = 'Contando: <br>' 
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('[PASSO INVÁLIDO!] considerando passo 1') 
            p = 1
        }
     if(i < f){
        // contagem crescente
         for(let c = i; c <= f;c += p){
        resul.innerHTML += `${c} \u{1F449}`
      }
      resul.innerHTML += `\u{1F44A}`
      
     }else{
        // contagem regressiva
        for(let c = i; c >= f; c -= p ){
            resul.innerHTML += `${c} \u{1F449}`
        }
     }
     resul.innerHTML += `${c} \u{1F3C1}`
     
    }
}