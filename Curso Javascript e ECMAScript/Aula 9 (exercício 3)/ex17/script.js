function Tabuada(){
    let num = document.getElementById("txtnum")
    let tab = document.getElementById("seltab")
    if(num.value.length == 0){
        window.alert("Número Inválido ou inexistente!")
    }else{
    let n = Number(num.value)
    tab.innerHTML = ""
        for (c = 1; c <= 10;c++){
            let item = document.createElement("option")
            tab.appendChild(item)
            item.text = `${n} x ${c} = ${n*c}` 
        }
    }
}