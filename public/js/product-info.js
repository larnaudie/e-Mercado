let json = [];
function ObjetoJSON(num1) {
document.getElementById("Titulo1").innerHTML=num1.name
document.getElementById("Descripcion").innerHTML="Descripcion: " + num1.description
document.getElementById("precio").innerHTML="Precio: " + num1.cost
document.getElementById("vendidos").innerHTML="Vendidos: " + num1.soldCount
document.getElementById("categorias").innerHTML="Categorias: " + num1.category
Showimages(num1.images)
}

function Showimages(array) {
  for (let i of array){
    document.getElementById("imagenes1").innerHTML+=`<img src="${i}" class="img-thumbnail clase1">`
  }
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

  getJSONData(PRODUCT_INFO_URL)
   .then((resultObj)=>{json=resultObj.data})
   .then(()=>{ObjetoJSON(json)

   })
  })

