function Tabuada(){
    var sel = document.getElementById("seltab")
    var num = document.getElementById("txtnum")
    
    if(num.value.length == 0){
        window.alert("Por favor digite úm número")
    }
    let n = Number(num.value)
    
    for(c = 1; c<=10; c++){
        var item = document.createElement("option")
        sel.appendChild(item)
        item.text = `${n} X ${c} = ${n*c}`
    }
}