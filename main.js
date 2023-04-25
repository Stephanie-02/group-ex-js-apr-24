let dataArr = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

function isPrime(num) {
  if (num == 2 || num == 3) return true;
  if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
  for (let i = 5; i * i <= num; i += 6)
    if (num % i == 0 || num % (i + 2) == 0) return false;
  return true;
}

function getMax(arr) {
  let sorted = arr.sort((a, b) => a - b)
  return sorted[sorted.length - 1]
}

function getMin(arr) {
  let sorted = arr.sort((a, b) => a - b)
  return sorted[0]
}

function getMinMax(arr) {
  let min= getMin(arr);
  let max= getMax(arr);
  return [min, max];
}

console.log(getMinMax(dataArr));

let [minNr1, maxNr2] = getMinMax(dataArr);

console.log([minNr1, maxNr2]);

class Great {
  min;
  max;
  constructor(minVal, maxVal) {
    this.min= minVal;
    this.max= maxVal;
  }
}

let values= new Great(minNr1,maxNr2);
console.log(values);

function addMinMax({min, max}){
  return min + max;
}

console.log(addMinMax(values));

let tString= `Our object has min ${minNr1} and max ${maxNr2}, with a total of ${(addMinMax(values))}`

console.log(tString);

let converted= JSON.stringify(tString);

console.log(converted);

let jsonObj= JSON.stringify(values);

console.log(jsonObj);
