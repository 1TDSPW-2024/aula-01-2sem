// console.log("Bem vindo novamente!");

//Declarando um array de frutas do Brasil.
let frutas = [
  "Maçã",
  "Banana",
  "Laranja",
  "Manga",
  "Açaí",
  "Goiaba",
  "Ameixa",
  "Cereja",
  "Mirtilo",
  "Uva",
];

//Imprimir o array com console log e table.
console.log(frutas);
console.table(frutas);
console.log(frutas[0]); //Imprimir a primeira posição do array.
console.table("=========================LOOPS FOR/FOR OF/FOR IN/FOR EACH");
console.table("=========================LOOP FOR");
//for
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
console.table("=========================LOOP FOR OF");
//for of
for (let fruta of frutas) {
  console.log(fruta);
}
console.table("=========================LOOP FOR IN");
//for in
for (let indice in frutas) {
  console.log(frutas[indice]);
}
console.table("=========================LOOP FOR EACH");
//forEach
frutas.forEach(function (frutas, indice, fArray) {
  console.log(fArray[indice]);
});

//Recuperando a lista ul que esta no HTML de id=lista.
let lista = document.getElementById("lista");

function renderizaLista() {
  lista.innerHTML = "";
  for (let fruta of frutas) {
    //Criando um elemento li e adicionando o texto.
    let item = document.createElement("li");
    item.textContent = fruta;
    //Adicionando o item criado a lista.
    lista.appendChild(item);
  }
}

//Atrelando um evento de click ao botão btnAddFinal para ele adicionar
// uma nova fruta ao array no final.
document.getElementById("btnAddFinal").addEventListener("click", () => {
  let valorDigitadoNoCampo = document.getElementById("idFruta").value;
  frutas.push(valorDigitadoNoCampo);
  //Chamando a função de renderização da lista!
  renderizaLista();
});

//Atrelando um evento de click ao botão btnAddInício para ele adicionar
// uma nova fruta ao array no início.
document.getElementById("btnAddInicio").addEventListener("click", () => {
  let valorDigitadoNoCampo = document.getElementById("idFruta").value;
  frutas.unshift(valorDigitadoNoCampo);
  //Chamando a função de renderização da lista!
  renderizaLista();
});

//Atrelando um evento de click ao botão btnDelInicio para ele remover
// uma fruta do array no início.
document.getElementById("btnDelInicio").addEventListener("click", () => {
  frutas.shift();
  //Chamando a função de renderização da lista!
  renderizaLista();
});

//Atrelando um evento de click ao botão btnDelFinal para ele remover
// uma fruta do array no final.
document.getElementById("btnDelFinal").addEventListener("click", () => {
  frutas.pop();
  //Chamando a função de renderização da lista!
  renderizaLista();
});

//Atrelando um evento de click ao botão btnSort para ele ordenar os dados em ordem
// alfabética.
document.getElementById("btnSort").addEventListener("click", () => {
  frutas.sort();
  //Chamando a função de renderização da lista!
  renderizaLista();
});

//Atrelando um evento de click ao botão btnReverse para ele reverter a ordem
// dos dados do array.
document.getElementById("btnReverse").addEventListener("click", () => {
  frutas.reverse();
  //Chamando a função de renderização da lista!
  renderizaLista();
});

//Atrelando um evento de click ao botão btnDeleta para pesquisar o item passado e
// deletar o item da lista se ele existir
document.getElementById("btnDeleta").addEventListener("click", () => {
  let valorDigitadoNoCampo = document.getElementById("idFruta").value;
  let index = frutas.indexOf(valorDigitadoNoCampo);
  if (index > -1) {
    frutas.splice(index, 1);
    //Chamando a função de renderização da lista!
    renderizaLista();
  }
});

//Iniciando a lista!
renderizaLista();
