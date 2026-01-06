let arr = [3, 5, 3, 2, 7, 10, 1, 2, 7];
let res = [];

for (let i = 0; i < arr.length; i++) {
  if (!res.includes(arr[i])) {
    res.push(arr[i]);
  }
}

console.log(res);

