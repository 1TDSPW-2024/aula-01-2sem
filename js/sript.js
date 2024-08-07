let frutas = ["Maça", "Banana", "Laranja", "Manga", "Açai", "Goiaba", "Ameixa",
     "Cereja", "Mirtilo", "Uva"]

//imprimir array com console.log e console.table

console.log(frutas);
console.table(frutas);
console.log(frutas[0])
//=======================================LOOOPS FOR/ FOR OF/ FOR IN/ FOR EACH

//recuperando a lista ul que esta no html com id = lista
let lista = document.getElementById("lista");
function renderizaLista(){
    lista.innerHTML = "";
    for (let fruta of frutas){


        let item = document.createElement("li");
        item.textContent = fruta;
    
        lista.appendChild(item);
    
    }
}


//recuperando o botão de add

document.querySelector("#btnAdd").addEventListener("click", ()=> {
    let valorDigitadoNoCampo = document.getElementById("idFruta").value;
    frutas.push(valorDigitadoNoCampo)

    renderizaLista()

})

renderizaLista()