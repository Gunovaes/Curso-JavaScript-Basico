let num = [4, 6, 2, 8]
num.sort()
num.push(10)
num[4] = 12
console.log(`${num}`)

for(pos= 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o vetor ${num[pos]}`)
}

for(pos in num){
    console.log(`A posição ${pos} tem o vetor ${num[pos]}`)
}
