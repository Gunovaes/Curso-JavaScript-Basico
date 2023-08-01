function Carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas, `

    if (hora >= 0 && hora <= 12){
        msg.innerHTML += "Bom Dia!"
        img.src = "fotomanha.png"
        document.body.style.background = "#4d6b87"
    }else if (hora >= 12 && hora < 18){
        msg.innerHTML += "Boa Tarde!"
        img.src = "fototarde.png"
        document.body.style.background = "#ffc8c3"
    }else{
        msg.innerHTML += "Boa Noite!"
        img.src = "fotonoite.png"
        document.body.style.background = "#0f3b44"
    }
       
}