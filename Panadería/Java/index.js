let myArray = [2,67,13,67,78,23,5,2,23];
let maxNumber = myArray[0];

for(let i = 1; i < myArray.length; i++) {
    if(myArray[i] > maxNumber) {
        maxNumber = myArray[i];
    }
}

console.log(maxNumber);
