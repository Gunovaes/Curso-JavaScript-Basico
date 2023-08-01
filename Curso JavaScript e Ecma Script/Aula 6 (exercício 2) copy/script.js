function Verificar(){
    var sex = document.getElementsByName("txtsex")
    var fano = document.getElementById("txtano")
    var data = new Date()
    var ano = data.getFullYear()
    var nascimento = Number(fano.value)
    var idade = ano - nascimento
    var res = document.getElementById("res")
    var img = document.getElementById("img")
    let gênero = ""
    var fase = ""
    if(fano.value.length == 0 || fano.value > ano){
        window.alert ("[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE!")
    }else{
        if(sex[0].checked){
            gênero = "Homem"
            if(idade < 12){
                img.src = "criançamas.png"
                fase = "criança"
            }else if(idade < 18){
                img.src = "jovemmas.png"
                fase = "jovem"
            }else if(idade < 60){
                img.src = "adultomas.png"
                fase = "adulto"
            }else if(idade < 120){
                img.src = "idosomas.png"
                fase = "idoso"
            }
            else if(idade > 120){
                img.src = "titan.gif"
                fase = "titãn"
            }
            
        }else{
            gênero = "Mulher"
            if(idade < 12){
                img.src = "criançafem.png"
                fase = "criança"
            }else if(idade < 18){
                img.src = "jovemfem.png"
                fase = "jovem"
            }else if(idade < 60){
                img.src = "adultofem.png"
                fase = "adulta"
            }else if(idade < 120){
                img.src = "idosofem.png"
                fase = "idosa"
            }
            else if(idade > 120){
                img.src = "titan.gif"
                fase = "titãn"
            }
        }
        res.innerHTML = `Detectamos ${gênero} ${fase} com ${idade} anos!`
    }
    
}