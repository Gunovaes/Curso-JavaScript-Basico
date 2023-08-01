function Contador(){
    var inicio = document.getElementById("txtini")
    var passo = document.getElementById("txtpas")
    var final = document.getElementById("txtfim")
    var res = document.getElementById("res")

    if(inicio.value.length == 0 || passo.value.length == 0 || final.value.length == 0 ){
        window.alert ("[Erro], Preencha todos os campos!!")
    }else{
        res.innerHTML = "Contando... "
        var ini = Number(inicio.value)
        var pas = Number(passo.value)
        var fim = Number(final.value)
        
        if(pas <= 0){
            window.alert ("Passo inválido, Considerando passo = 1 ")
            pas = 1
        }
        if(ini < fim){
            for(let c = ini; c <= fim; c += pas){
                res.innerHTML += `\u{1F449} ${c} `
            }
        }else{
            for(let c = ini; c >= fim; c -= pas){
                res.innerHTML += `\u{1F449} ${c} `
            }
        }
        res.innerHTML += `\u{1F3C1}`

    }
}