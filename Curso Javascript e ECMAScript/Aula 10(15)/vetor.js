let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)
valores.sort()
/*console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])*/

console.log ("Usando o primeiro método")

for(let pos = 0;pos < valores.length; pos++){                            //Usando o método for(repetição)
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log ("Usando o próximo método")


/*for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/