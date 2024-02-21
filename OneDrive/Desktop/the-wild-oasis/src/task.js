const arr = [12, 34, 1, 56, 78, 9];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[i] < arr[j]) {

      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
}

console.log(arr);
console.log('array sort--> ',arr.sort(a,b)=>{ 
  return a-b
});