let n = 5;
let tijolo = '';
let espaco = ' ';
let a = 0;
let b = '';
console.log(espaco);

for (let i = 1; i <= n; i += 1) {
  if((n-i) % 2 !== 0){
    b = tijolo += '*';
    b = b.repeat();
    a += 1; 
    console.log(espaco.repeat((4-a)),b,espaco.repeat(4-a));
    b = '';
    tijolo = '';
  }
}