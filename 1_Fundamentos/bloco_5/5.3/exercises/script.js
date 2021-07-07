function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

//1 Função que Adiciona os dias da semana

function createDaysWeekDays() {
  const ulWeeks = document.querySelector('#days');
  for (let i in dezDaysList) {
    const dias = document.createElement('li');
    dias.classList.add('day');
    dias.innerText = dezDaysList[i];
    ulWeeks.appendChild(dias);
  }
}
createDaysWeekDays();

const feriadosDez = [24, 25, 31];
const sextaDez = [4, 11, 18, 25];

function adicionaClassAosDiasDaLista(mes, diasRecebe, tagEntreAspas) {
  for (let key in mes) {
    for (let keyF in diasRecebe) {
      if (mes[key] === diasRecebe[keyF]) {
        const localElemento = document.querySelectorAll('.day')[key];
        localElemento.classList.add(tagEntreAspas);
      }
    }
  }
}
adicionaClassAosDiasDaLista(dezDaysList, feriadosDez, 'holiday');
adicionaClassAosDiasDaLista(dezDaysList, sextaDez, 'friday');

// 2 Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
function createButton(nomeBotaoEntreAspas, nomeIdEntreAspas) {
  const botao = document.createElement('button');
  botao.id = nomeIdEntreAspas;
  botao.innerHTML = nomeBotaoEntreAspas;
  const divPai = document.querySelector('.buttons-container');
  divPai.appendChild(botao);
}
createButton('Feriados', 'btn-holiday');

// 3 Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .

const botaoFeriados = document.querySelector('#btn-holiday');

botaoFeriados.addEventListener('click', () => {
  const acao = document.querySelectorAll('.holiday');
  for (let key in acao) {
    if (acao[key].style.backgroundColor !== 'lightgreen') {
      acao[key].style.backgroundColor = 'lightgreen'
    } else {
      acao[key].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
});

// 4 Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
createButton('Sexta-Feira', 'btn-friday');

// 5 Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira. 
const botaoSexta = document.querySelector('#btn-friday');

botaoSexta.addEventListener('click', () => {
  const acao = document.querySelectorAll('.friday');
  for (let key in acao) {
    if (acao[key].style.backgroundColor !== 'red') {
      acao[key].style.backgroundColor = 'red'
    } else {
      acao[key].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
});