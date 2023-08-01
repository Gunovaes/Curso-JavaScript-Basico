function contar(){
    var ini = document.getElementById("txtini")
    var passos = document.getElementById("txtpasso")
    var fim = document.getElementById("txtfim")
    var res = document.getElementById("res")
    if(ini.value.length == 0 || fim.value.length == 0 || passos.value.length== 0){
        window.alert ("[Erro, prrencha os campos vazios]")
    }else{
        res.innerHTML = "Contando..."
        let inicio = Number(ini.value)
        let passo = Number(passos.value)
        let final = Number(fim.value)
        if (passo <= 0){
            window.alert ("[ Passo Inválido, Considerando Passo = 1 ]")
            passo = 1
        }
    if(inicio < final){ //Contagem crescente
        for(let c = inicio; c <= final; c += passo){
            res.innerHTML += `\u{1F449} ${c} 	`
        }
    }else{ //Contagem regressiva
        for(let c = inicio; c >= final; c-=passo){
            res.innerHTML += `\u{1F449}  ${c} `
        }
    }
       
    }res.innerHTML += `\u{1F3C1}`
    
}