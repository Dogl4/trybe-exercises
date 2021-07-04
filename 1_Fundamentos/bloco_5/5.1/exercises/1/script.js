document.getElementById('header-container').style.backgroundColor = 'green';

document.querySelectorAll('.emergency-tasks')[0].style.backgroundColor = 'pink';

document.querySelectorAll('.no-emergency-tasks')[0].style.backgroundColor = 'yellow';

let h3Div1 = document.querySelectorAll('.emergency-tasks h3');
let h3Div2 = document.querySelectorAll('.no-emergency-tasks h3');
document.querySelector('footer').style.backgroundColor = 'green';
for (let key in h3Div1) {
  h3Div1[key].style.backgroundColor = 'purple';
  h3Div2[key].style.backgroundColor = 'black';
}; 
  