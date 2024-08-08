// console.log("Bem vindo novamente!");

// Declarando um array de frutas do Brasil.
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

// Imprimir o array com console log e table.
console.log(frutas);
console.table(frutas);
console.log(frutas[0]); // Imprimir a primeira posição do array.
console.table("=========================LOOPS FOR/FOR OF/FOR IN/FOR EACH");
console.table("=========================LOOP FOR");
// for
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

console.table("=========================LOOP FOR OF");
// for of
for (let fruta of frutas) {
  console.log(fruta);
}

console.table("=========================LOOP FOR IN");
// for in
for (let indice in frutas) {
  console.log(frutas[indice]);
}

console.table("=========================LOOP FOR EACH");
// forEach
frutas.forEach(function (fruta, indice, fArray) {
  console.log(fArray[indice]);
});

// Recuperando a lista ul que está no HTML de id=lista.
let lista = document.getElementById("lista");

function renderizaLista() {
  lista.innerHTML = ""; // Limpar a lista

  for (let fruta of frutas) {
    // Criando um elemento li e adicionando o texto.
    let item = document.createElement("li");
    item.textContent = fruta;

    // Criar um elemento botão para remover o próprio item da lista:
    let btnX = document.createElement("button");
    btnX.textContent = "Delete";

    // Adicionando um event listener para o botão:
    btnX.addEventListener("click", () => {
      let indice = frutas.indexOf(fruta);
      if (indice > -1) {
        frutas.splice(indice, 1);
        renderizaLista(); // Atualizar a lista após remoção
      }
    });

    // Inserir o elemento botão no item.
    item.appendChild(btnX);

    // Adicionar o item à lista.
    lista.appendChild(item);
  }
}

// Atrelando um evento de click ao botão btnAddFinal para adicionar uma nova fruta ao array no final.
document.getElementById("btnAddFinal").addEventListener("click", () => {
  let valorDigitadoNoCampo = document.getElementById("idFruta").value;
  frutas.push(valorDigitadoNoCampo);
  renderizaLista(); // Atualizar a lista
});

// Atrelando um evento de click ao botão btnAddInicio para adicionar uma nova fruta ao array no início.
document.getElementById("btnAddInicio").addEventListener("click", () => {
  let valorDigitadoNoCampo = document.getElementById("idFruta").value;
  frutas.unshift(valorDigitadoNoCampo);
  renderizaLista(); // Atualizar a lista
});

// Atrelando um evento de click ao botão btnDelInicio para remover uma fruta do array no início.
document.getElementById("btnDelInicio").addEventListener("click", () => {
  frutas.shift();
  renderizaLista(); // Atualizar a lista
});

// Atrelando um evento de click ao botão btnDelFinal para remover uma fruta do array no final.
// document.getElementById("btnDelFinal").addEventListener("click", //"função" --> removerNomes) um outro jeito, dessa forma é muito mais rápido e direto.
document.getElementById("btnDelFinal").addEventListener("click", () => {
  frutas.pop();
  renderizaLista(); // Atualizar a lista
});

// Atrelando um evento de click ao botão btnSort para ordenar os dados em ordem alfabética.
document.getElementById("btnSort").addEventListener("click", () => {
  frutas.sort();
  renderizaLista(); // Atualizar a lista
});

// Atrelando um evento de click ao botão btnReverse para reverter a ordem dos dados do array.
document.getElementById("btnReverse").addEventListener("click", () => {
  frutas.reverse();
  renderizaLista(); // Atualizar a lista
});

// Atrelando um evento de click ao botão btnDeleta para pesquisar o item passado e deletar o item da lista se ele existir.
document.getElementById("btnDeleta").addEventListener("click", () => {
  let valorDigitadoNoCampo = document.getElementById("idFruta").value;
  let index = frutas.indexOf(valorDigitadoNoCampo);
  if (index > -1) {
    frutas.splice(index, 1);
    renderizaLista(); // Atualizar a lista
  }
});

// Iniciando a lista!
renderizaLista();
