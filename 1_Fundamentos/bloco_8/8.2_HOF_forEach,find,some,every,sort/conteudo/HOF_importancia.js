// const button = document.getElementById('button');
// button.addEventListener('click', () => {
//   console.log('Clicou no botão!');
// })


// const students = [{
//   name: 'Marte',
//   grade: 70,
//   approved: ''
// }, {
//   name: 'José',
//   grade: '56',
//   approved: ''
// }, {
//   name: 'Roberto',
//   grade: 90,
//   approved: ''
// }, {
//   name: 'Ana',
//   grade: 90,
//   approved: ''
// }];

// function verifyGrades() {
//   for (let index = 0; index < students.length; index += 1) {
//     const student = students[index];
//     if(student.grade >= 60){
//       student.approved = 'Aprovado';
//     } else {
//       student.approved = 'Recuperação';
//     }
//   }
// }

// verifyGrades();

// const verifyGrades = () => {
//   for (let key in students) {
//     students[key].grade >= 60 ? students[key].approved = 'Aprovado' : students[key].approved = 'Recuperação';
//   }
// };

// verifyGrades();

// console.log(students);

const students = [{
    name: 'Maria',
    grade: 70,
    aproved: ''
  },
  {
    name: 'José',
    grade: 56,
    approved: ''
  },
  {
    name: 'Roberto',
    grade: 90,
    approved: ''
  },
  {
    name: 'Ana',
    grade: 81,
    approved: ''
  }
];

const verifyGrades = () => {
  students.forEach((student, index) => {
    students[index].grade >= 60 ? students[index].approved = 'Aprovado' : students[index].approved = 'Recuperação';
  })
}

verifyGrades();

console.log(students);