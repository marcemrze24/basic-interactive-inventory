let listaInputs = Array.from(document.getElementsByTagName("input"));
let miFormulario = document.getElementById("formulario");
let outputContainer = document.getElementById("outputContainer")
let prodArr = ["Producto: ", "Marca: ", "Precio: ", "Stock: "];
let arrObjProd = []
let clearLSBtn = document.getElementById("clearLSBtn");



//Agrego estilo a los inputs
listaInputs.forEach((el) => {
    el.className = "my-2"
})

//Agrego la funcion a evento del form
miFormulario.addEventListener("submit", agregarProducto);

function agregarProducto(e) {
    e.preventDefault();
    let formulario = e.target;
    outputContainer.className = "my-3"
    let outputContainerChild = document.createElement("div")
    outputContainer.append(outputContainerChild);
    // guardar en localStorage cada producto(objeto)
    let objProdAgregado = {"nombre": formulario[0].value, "marca": formulario[1].value, "precio": formulario[2].value, "stock": formulario[3].value};
    arrObjProd.push(objProdAgregado)
    localStorage.setItem(objProdAgregado.nombre, JSON.stringify(objProdAgregado))
    for (let i = 0; i < formulario.length -1 ; i++) {
        let p = document.createElement("p");
        p.innerHTML = `${prodArr[i]} <strong>${formulario[i].value}</strong>`;
        outputContainerChild.append(p);
    }
    for (let j = 0; j < listaInputs.length -1 ; j++) {
        listaInputs[j].value = ""
    }
    outputContainerChild.className = "outputContainerChild border-bottom border-danger my-3"
}


//Agrego funcion al evento del btn
clearLSBtn.addEventListener("click", () => {
    localStorage.clear()
})