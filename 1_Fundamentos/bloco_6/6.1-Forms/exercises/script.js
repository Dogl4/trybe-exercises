const objEle = {
  estados: ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'],
  selectEstados: document.querySelector('#estados'),
}

const objFun = {
  chamaEstados: function insereEstado() {
    for (const key in objEle.estados) {
      const element = document.createElement('option');
      element.setAttribute('name', 'estado');
      element.setAttribute('value', `${objEle.estados[key]}`);
      element.innerText = objEle.estados[key];
      objEle.selectEstados.appendChild(element);
    }
  },
};

window.onload = () => {
  objFun.chamaEstados();
};
