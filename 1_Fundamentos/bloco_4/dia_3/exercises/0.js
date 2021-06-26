let ast = "";
let space = " ";
let n = 5;

function repeater(n){
for (let j = 0; j < n; j++) {
  space = space + " ";
}
}

for (let j = 0; j < n; j++) {
  ast = ast + ""
  console.log(repeater(n) + ast);
}