let num = [5, 8, 4]  //Para criar uma variável composta(vetor) Basta adicionar "[]" após a variável
num[3] = 6           //posição 3 = 6
num.push(7)          //última posição do vetor = 7
num.length           //Contador de posições 
console.log (`${num}`)
console.log (`${num.length}`)
let pos= num.indexOf(10)
if (pos = -1){
    console.log("O valor não foi encontrado")
}else{
    console.log (`O valor está na posição  ${pos}`)
}
