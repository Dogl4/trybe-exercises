const fatorial = (number) => {
  let seuFatorial;
  for (let i = number; i > 1; i -= 1) {
   number === i ? seuFatorial = i * (i - 1) : seuFatorial = seuFatorial * (i - 1);
  }
  return seuFatorial;
};

console.log(fatorial(5));
