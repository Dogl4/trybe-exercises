const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const corH3 = document.querySelector('h3').style.color;



/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado; */
const father = document.querySelector('.container');
father.addEventListener("click",addingClassTech);

 function addingClassTech(event) {
    const clickAntigo = document.querySelector('.tech');
    const clickAtual = event.target;
    if (clickAntigo !== clickAtual) {
      clickAtual.classList.add('tech');
      clickAntigo.classList.remove('tech');
    }
  };
/* 1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso? -Yes
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';*/
 input.addEventListener('input', (event) => {
  const conteudo = document.querySelector('.tech');
  conteudo.innerHTML = event.target.value;   
 });
/* Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?*/
myWebpage.addEventListener('dblclick', () => {
  window.open('https://google.com');
})


/* Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/
myWebpage.addEventListener('mouseover', (event) => {
  event.target.style.color = 'green';
})
myWebpage.addEventListener('mouseout', (event) => {
  event.target.style.color = corH3;
})

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstDiv.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.