let arrayList = [ 1, 4, 11, 2, 37, -4];

let max = arrayList[0];
for (let i = 1; i < arrayList.length; ++i){
    if (arrayList[i] > max) {
        max = arrayList[i]
    }
}

let min = arrayList[0];
for (let i = 1; i < arrayList.length; ++i){
    if (arrayList[i] < min) {
        min = arrayList[i]
    }
}

console.log(min,max);


let banana = [28, 43, -12, 30, 4, 0, -36];

let smallest = [0];
let largest = [0];

for (let i = 0; i <banana.length +1; ++i){
    if (smallest > banana[i]){
        smallest = banana[i]
    }else if (largest < banana[i]){
        largest = banana[i]
    }
}

console.log(smallest,largest);


let superNum = 25

if(superNum < 50){
    superNum *= 5
} else if(superNum > 75){
    superNum -= 15
}

if(superNum < 150 && superNum > 75){
    superNum /= 25
} else {
    superNum += 5
}

for(i = 0; i < superNum; i++){
    console.log(i)
}

let words = ["purple","blue","orange","green","yellow"]

let colorStr = "Some colors I like are "

for(i = 0; i < words.length; i++){
    if(i % 2 && i != 0 && i != words.length){
        colorStr += `${words[i]}, `
    } else if(i === words.length){
        colorStr += `and ${words[i]}.`
    }
}

console.log(colorStr)