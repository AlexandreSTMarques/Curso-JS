function verificar() {
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res =document.querySelector('div#res')
     if (fano.value.length == 0 || Number(fano.value) > ano){
      window.alert('[ERRO] verifique os dados e tente novamente!')  
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','garotinho.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'h-jovem.png')
            } else if (idade < 50){
             // adulto 
             img.setAttribute('src','homem.png')
            } else {
                // idoso
                img.setAttribute('src','senhor.png')
            }
        } else if(fsex[1].checked){
            gênero = 'mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','garotinha.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src','m-jovem.png')
            } else if (idade < 50){
             // adulto
             img.setAttribute('src','mulher.png') 
             } else {
                // idoso
                img.setAttribute('src','senhora.png')
             }
        
        }
        res.style.textAlign ='center'
        res.innerHTML = `detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)

    }
     
}
