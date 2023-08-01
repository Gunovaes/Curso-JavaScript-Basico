let sel = document.getElementById("seltab")
let num = document.getElementById("txtn")
let res = document.getElementById("res")
let valores = []

function adc(){
    if(isNumero(num.value) && ! inLista(num.value, valores)){ //revisar
        valores.push(Number(num.value)) //Revisar
        let item = document.createElement("option")
        item.text = `O valor ${num.value} foi adicionado!`
        sel.appendChild(item)
    }else{
        window.alert ("Valor inválido ou já encontrado na lista")
    }
    num.focus()
    num.value = "" //revisar
}

function isNumero(x){
    if(Number(x) >= 1 && Number(x) <=100){
        return true
    }else{
        return false
    }
}

function inLista(x, l){
    if(l.indexOf (Number(x)) != -1){
        return true
    }else{
        return false
    }
}

function Finalizar(){
    let maior = valores[0]
    let menor = valores[0]
    let total = valores.length
    let soma = 0 //revisar
    let media = 0 //revisar

    for(let pos in valores){
        if(valores[pos] > maior){
            maior = valores[pos]
        }if(valores[pos] < menor){
            menor = valores[pos]
        }
        soma += valores[pos] //revisar
    }

    let = media = soma / total //revisar
    res.innerHTML = `<p>Ao todo temos ${total} valores`
    res.innerHTML += `<p>O maior valor é ${maior}`
    res.innerHTML += `<p>O menor valor é ${menor}`
    res.innerHTML += `<p>A soma dos valores é ${soma}`
    res.innerHTML += `<p>A média dos valores é ${media}`

}
