// describe('Jest', () => {
//   it('Bricando com expect', () => {
//     const expectA = expect(true).toBeTruthy();
//     const expectB = expect(Promise.resolve('Oi Tryber!')).resolves.toEqual('Oi Tryber!');
//     const expectC = expect(Promise.reject(new Error('ERROR')))
//       .rejects.toEqual(new Error('ERROR'));
//       console.log('expect', expectA);
//       console.log('expect.resolves', expectA);
//       console.log('expect.rejects', expectB);
//   })
// })


const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);

      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject(new Error('Não possui esse tipo de animal.'));
    }, 100);
  })
);

// test('Testando com async/await', async () => {
//   const listDogs = await findAnimalsByType('Dog');
//   expect(listDogs[0].name).toEqual('Dorminhoco');
//   expect(listDogs[1].name).toEqual('Soneca');
// });


// test('Testando com async/await, testando o reject', async () => {
//   try {
//     await findAnimalsByType('Lion');
//   } catch (error) {
//     expect(error).toEqual(new Error('Não possui esse tipo de animal.'))
//   }
// })