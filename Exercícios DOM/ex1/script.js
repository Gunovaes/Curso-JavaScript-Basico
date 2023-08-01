// Exercício 1 (1 – Calcule a média de diversas notas digitadas pelo usuário.) 
// http://professor.leonardomeirelles.com/wp/lista-de-exercicios-javascript/ 

var nota1 = document.getElementById("n1")
var nota2 = document.getElementById("n2")
var nota3 = document.getElementById("n3")
var nota4 = document.getElementById("final")
var res = document.getElementById("res")
var sit = document.getElementById("sit")

function Media(){
    if(nota1.value.length == 0 || nota2.value.length == 0 || nota3.value.length == 0 || nota4.value.length == 0){
        window.alert("[ERRO] Digite todos os valores para continuar!")
    }else if(nota1.value > 10 || nota2.value > 10|| nota3.value > 10 || nota4.value > 10){
        window.alert("O maior valor possível é 10!")
    }
    else{
        n1 = Number(nota1.value)
        n2 = Number(nota2.value)
        n3 = Number(nota3.value)
        n4 = Number(nota4.value)
        var media = (n1 + n2 + n3 + n4)/4
        res.innerHTML = `A sua média final foi de ${media} pontos`
        if(media > 4){
            sit.innerHTML = "Você foi Aprovado"
            sit.style.color = "green"
        }else{

            sit.innerHTML = "Você está Reprovado"
            sit.style.color = "red"
        }
    }
    nota1.value = ""
    nota2.value = ""
    nota3.value = ""
    nota4.value = ""
}
