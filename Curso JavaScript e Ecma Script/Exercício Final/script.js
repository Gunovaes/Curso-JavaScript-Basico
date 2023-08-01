let num = document.getElementById("txtn")
let sel = document.getElementById("sellista")
let res = document.getElementById("res")
let valores = []

function isNumero(x){
if (Number(x) >=1 && Number(x) <=100){
    return true
}else{
    return false
}
}

function inLista(x, l){
    if(l.indexOf(Number(x)) != -1){
        return true
    }else{
        return false
    }
}

function Adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `O valor ${num.value} foi adicionado`
        sel.appendChild(item) 
    }else{
        window.alert("Número inválido ou já encontrado na lista")
    }
    num.focus()
    num.value = ""
}

function Finalizar(){
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores){
        if(maior < valores[pos]){
            maior = valores[pos]
        }if(menor > valores[pos]){
            menor = valores[pos]
        }
        soma += valores[pos]
        media = soma/total
    }
    res.innerHTML = `<p>O total de valores é de ${total}</p>`
    res.innerHTML += `<p>O maior valor encontrado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor encontrado foi ${menor}</p>`
    res.innerHTML += `<p>A média entre os valores é de ${media}</p>`
    res.innerHTML += `<p>O resultado da soma entre os valores é de ${soma}</p>`
    function Parimp(x){
        if(x %2 == 0){
            return "Par"
        }else{
            return "Impar"
        }
    }
    res.innerHTML += `A soma dos valores é ${Parimp(soma)}`
}