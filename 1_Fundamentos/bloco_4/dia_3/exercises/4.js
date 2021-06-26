let n = 20;
let symbol = '*';
let inputLine = '';
let midLine = (n + 1) / 2;
let spaceLeft = midLine;
let spaceRigth = midLine;

for (let index = 0; index <= midLine; index += 1) {
  for (let columnIndex = 1; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > spaceRigth && columnIndex < spaceLeft) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  spaceRigth -= 1;
  spaceLeft += 1;
}

// for (let index = midLine; index >= 0; index -= 1) {
//   for (let columnIndex = n; columnIndex >= 1; columnIndex -= 1) {
//     if (columnIndex > spaceRigth && columnIndex < spaceLeft) {
//       inputLine = inputLine + symbol;
//     } else {
//       inputLine = inputLine + ' ';
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   spaceRigth += 1;
//   spaceLeft -= 1;
// }