// console.log("Bem vindo novamente!");

//Declarando um array de frutas do Brasil.
let frutas = ["Maçã", "Banana", "Laranja",
    "Manga", "Açaí", "Goiaba", "Ameixa",
    "Cereja", "Mirtilo", "Uva"];

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
frutas.forEach(function(frutas,indice,fArray){
    console.log(fArray[indice]);
});

