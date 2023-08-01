var num = document.getElementById ("txtnum")
var sel = document.getElementById ("seltab")
var res = document.getElementById ("res")
var valores = []
function Adicionar(){
    if(isNumero(num.value) && ! inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `O Valor ${num.value} foi adicionado`
        sel.appendChild(item)
    }else{
        window.alert("Número inválido ou já encontrado na lista!")
    }
    num.focus()
    num.value = ""
}

function isNumero(x){
    if(Number(x) >= 1 && Number(x) <=100){
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

function Finalizar(){
    let total = valores.length
    let maior = valores[0]
    let menor = valores [0]
    let soma = 0
    let media = total / soma

    for (pos in valores){
        if(valores[pos] > maior){
            maior = valores[pos]
        }if(valores[pos] < menor){
            menor = valores[pos]
        }
        soma += valores[pos] 

    }
    res.innerHTML = `A Quantidade total de valores é ${total}`
    res.innerHTML += `<p> O maior valor encontrado é ${maior}`
    res.innerHTML += `<p> O menor valor encontrado é ${menor}`
    res.innerHTML += `<p> A soma entre os valores foi de ${soma}`
    res.innerHTML += `<p> A média entre os valores foi de ${media}`
}