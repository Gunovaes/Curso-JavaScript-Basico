function Passos(){
    //Inicio = X
    //Final = Y
    //Distância = Z
    var X = 5
    var Y = 40
    var passos = document.getElementsByName ("radpasso")
    var cam = document.getElementById ("Caminho")
    if(passos[0].checked){
        //window.alert ("Um passo")
        while (X <= 40){
            var D = document.g
            cam.innerHTML += ` Kilômetro ${X}`
            X = D + X
        }if(X >= 10){
            window.alert ("Parabêns Você chegou")
            
        }

    }else if(passos[1].checked){
        //window.alert ("Dois passos")
    }else{
        window.alert ("Você deve selecionar uma opção!")
    }

}