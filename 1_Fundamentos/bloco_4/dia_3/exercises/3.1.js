let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for(let index = 0; index <= n; index += 1) {
  for(let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
}