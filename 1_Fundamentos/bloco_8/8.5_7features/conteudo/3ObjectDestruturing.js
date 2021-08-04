// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };

// // const { name } = product;
// // console.log(name);

// const { name, seller} = product

// console.log(name);
// console.log(seller);


// const student = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: '?Matemática',
// };
// const { a: name, b: classAssigned, c: subject} = student;
// console.log(name); // Maria
// console.log(classAssigned); // Turma B
// console.log(Subject); // MAtemática


const product = {
  name: 'Smart TV Crytal UHD',
  price: '1899.05',
  seller: 'Casas de ?Minas',
};

const printProductDetails = ({name, price, seller}) => (`Promoção ${name} por ${price} é só aqui: ${seller}`);

console.log(printProductDetails(product));
// Coloca como parâmetro o objeto inteiro, se não dá erro.