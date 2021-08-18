// test('Não deveria passar!', () => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//   }, 500);
// });

// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//     done();
//   }, 500);
// });


// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     try { // Se for true
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//       done(); // break, feito, Termina!
//     } catch (error) { // Se for false
//       done(); // break, feito, Termina!
//     }
//   }, 500);
// });

test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done(error); // Alteramos esta linha // CERTo, tratar o erro.
    }
  }, 500);
});