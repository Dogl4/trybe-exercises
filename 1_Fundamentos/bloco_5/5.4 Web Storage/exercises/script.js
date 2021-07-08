const elementoParagrafo = document.querySelector('p'); //Dom paragrafo
const fundo = document.body.style; //DOM cor Fundo

window.onload = function () {
  const corSelecionadaFundo = document.querySelector('#corFundo'); //Dinamico cor Fundo Elemento
  const corParagrafo = document.querySelector('#corParagrafo'); //Dinamico cor Fundo Elemento
  const tamanhoParagrafoUsu = document.querySelector('#fontSize'); //Dinamico Tamanho Paragrafo
  const lineHeightUsu = document.querySelector('#lineHeight'); //Distância Paragrafo
  const fontFamilyUsu = document.querySelector('#fontFamily'); //Fonte Paragrafo

  fundo.backgroundColor = localStorage.getItem('background'); //localStorage cor Fundo
  elementoParagrafo.style.fontSize = localStorage.getItem('fontSize'); //locaStorage fontSize Paragrafo
  elementoParagrafo.style.color = localStorage.getItem('paragrafoCor'); //locaStorage cor Paragrafo
  elementoParagrafo.style.lineHeight = localStorage.getItem('lineHeightUsu'); //locaStorage lineHeight Paragrafo
  elementoParagrafo.style.fontFamily = localStorage.getItem('fontFamilyUsu'); //locaStorage fontFamilyUsu Paragrafo
  
  corSelecionadaFundo.addEventListener('change', () => { // Cor de Fundo
    fundo.backgroundColor = corSelecionadaFundo.value;
    localStorage.setItem('background', corSelecionadaFundo.value);
  })

  corParagrafo.addEventListener('change', () => { // Cor de Paragrafo
    elementoParagrafo.style.color = corParagrafo.value;
    localStorage.setItem('paragrafoCor', corParagrafo.value);
  })

  tamanhoParagrafoUsu.addEventListener('change', () => { // Tamanho do Paragrafo
    elementoParagrafo.style.fontSize = `${tamanhoParagrafoUsu.value}px`;
    localStorage.setItem('fontSize',`${tamanhoParagrafoUsu.value}px`);
  })

  lineHeightUsu.addEventListener('change', () => { // distancia entre linhas do Paragrafo
    elementoParagrafo.style.lineHeight = `${lineHeightUsu.value}px`;
    localStorage.setItem('lineHeightUsu',`${lineHeightUsu.value}px`);
  })

  fontFamilyUsu.addEventListener('change', () => { // distancia entre linhas do Paragrafo
    elementoParagrafo.style.fontFamily = `${fontFamilyUsu.value}px`;
    localStorage.setItem('fontFamilyUsu',`${fontFamilyUsu.value}px`);
  })
}